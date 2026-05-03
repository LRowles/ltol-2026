/**
 * Prerender Script
 * ================
 * Spins up a local static server from the Vite build output (dist/),
 * then uses Puppeteer to visit every route and save the fully-rendered
 * HTML back into dist/ so search engines get static content.
 *
 * Usage: npx tsx scripts/prerender.ts
 * Runs automatically via: npm run build (postbuild hook)
 */

import puppeteer from "puppeteer";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { lookup } from "mime-types";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, "..", "dist");
const PORT = 4173;
const BASE = `http://localhost:${PORT}`;
const CONCURRENCY = 5; // parallel browser tabs

// Collect all routes from the sitemap (generated in prebuild)
function getRoutesFromSitemap(): string[] {
  const sitemapPath = join(DIST_DIR, "sitemap.xml");
  if (!existsSync(sitemapPath)) {
    console.error("sitemap.xml not found in dist/. Run build first.");
    process.exit(1);
  }
  const xml = readFileSync(sitemapPath, "utf-8");
  const matches = xml.matchAll(/<loc>https?:\/\/[^<]+?(\/.+?)<\/loc>/g);
  const routes = ["/"];
  for (const m of matches) {
    const path = m[1];
    if (path && path !== "/") routes.push(path);
  }
  return [...new Set(routes)];
}

// Simple static file server for the dist directory
function startServer(): Promise<ReturnType<typeof createServer>> {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST_DIR, req.url || "/");

      // SPA fallback: if file doesn't exist, serve index.html
      if (!existsSync(filePath) || filePath.endsWith(DIST_DIR)) {
        filePath = join(DIST_DIR, "index.html");
      }
      // If it's a directory, try index.html inside it
      try {
        const stat = require("fs").statSync(filePath);
        if (stat.isDirectory()) {
          filePath = join(filePath, "index.html");
          if (!existsSync(filePath)) {
            filePath = join(DIST_DIR, "index.html");
          }
        }
      } catch {}

      try {
        const content = readFileSync(filePath);
        const mimeType = lookup(filePath) || "application/octet-stream";
        res.writeHead(200, { "Content-Type": mimeType });
        res.end(content);
      } catch {
        // Fallback to SPA index
        const content = readFileSync(join(DIST_DIR, "index.html"));
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    });

    server.listen(PORT, () => {
      console.log(`Static server running on ${BASE}`);
      resolve(server);
    });
  });
}

async function prerenderRoutes(routes: string[]) {
  console.log(`Prerendering ${routes.length} routes with concurrency ${CONCURRENCY}...`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  let completed = 0;
  const errors: string[] = [];

  // Process routes in batches
  async function processRoute(route: string) {
    const page = await browser.newPage();
    try {
      // Block images, fonts, and analytics to speed up rendering
      await page.setRequestInterception(true);
      page.on("request", (req) => {
        const type = req.resourceType();
        if (["image", "font", "media"].includes(type)) {
          req.abort();
        } else if (req.url().includes("googletagmanager") || req.url().includes("analytics")) {
          req.abort();
        } else {
          req.continue();
        }
      });

      await page.goto(`${BASE}${route}`, {
        waitUntil: "networkidle0",
        timeout: 15000,
      });

      // Wait a bit for React to finish rendering
      await page.waitForSelector("main, #root", { timeout: 5000 }).catch(() => {});

      const html = await page.content();

      // Determine output path
      let outputPath: string;
      if (route === "/") {
        outputPath = join(DIST_DIR, "index.html");
      } else {
        // Create /route/index.html for clean URLs
        const dir = join(DIST_DIR, route);
        mkdirSync(dir, { recursive: true });
        outputPath = join(dir, "index.html");
      }

      writeFileSync(outputPath, html, "utf-8");
      completed++;

      if (completed % 50 === 0 || completed === routes.length) {
        console.log(`  Progress: ${completed}/${routes.length} routes prerendered`);
      }
    } catch (err) {
      errors.push(`${route}: ${(err as Error).message}`);
      completed++;
    } finally {
      await page.close();
    }
  }

  // Batch processing with concurrency limit
  const queue = [...routes];
  async function worker() {
    while (queue.length > 0) {
      const route = queue.shift();
      if (route) await processRoute(route);
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);

  await browser.close();

  console.log(`\nPrerendering complete: ${completed - errors.length}/${routes.length} successful`);
  if (errors.length > 0) {
    console.warn(`\n${errors.length} errors:`);
    errors.slice(0, 10).forEach((e) => console.warn(`  - ${e}`));
    if (errors.length > 10) console.warn(`  ... and ${errors.length - 10} more`);
  }
}

async function main() {
  const routes = getRoutesFromSitemap();
  console.log(`Found ${routes.length} routes from sitemap.xml`);

  const server = await startServer();

  try {
    await prerenderRoutes(routes);
  } finally {
    server.close();
    console.log("Static server stopped.");
  }
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});

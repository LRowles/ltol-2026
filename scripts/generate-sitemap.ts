/**
 * Sitemap Generator for LTOL
 *
 * Generates a comprehensive sitemap.xml from all data sources and route definitions.
 * Run at build time: `npx tsx scripts/generate-sitemap.ts`
 *
 * Output: public/sitemap.xml
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = "https://ltol.com";
const TODAY = new Date().toISOString().split("T")[0];

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

// --- Import route data from App.tsx definitions ---

const pillarRoutes = [
  "small-business-technology-stack",
  "ai-integration-for-small-business",
  "managed-it-services-for-small-business",
  "cybersecurity-for-small-business",
  "digital-marketing-systems-for-small-business",
  "marketing-automation-for-small-business",
  "crm-automation-for-small-business",
  "business-process-automation",
];

const serviceRoutes = [
  "ai-integration",
  "ai-workflow-automation",
  "ai-customer-support-systems",
  "ai-document-processing",
  "digital-marketing",
  "local-seo-services",
  "managed-it-services",
  "network-management",
  "help-desk-services",
  "cloud-services",
  "cybersecurity",
  "endpoint-security",
  "email-security",
  "data-backup-services",
  "network-solutions",
  "crm-automation",
  "website-systems",
  "email-marketing-automation",
];

const flatIndustryRoutes = [
  "technology-solutions-for-construction-companies",
  "technology-solutions-for-law-firms",
  "technology-solutions-for-medical-offices",
  "technology-solutions-for-real-estate",
  "technology-solutions-for-hospitality",
  "technology-solutions-for-retail-businesses",
  "technology-solutions-for-professional-services",
  "technology-solutions-for-accounting-firms",
  "technology-solutions-for-dental-practices",
  "technology-solutions-for-nonprofits",
  "technology-solutions-for-restaurants",
  "technology-solutions-for-property-management",
  "technology-solutions-for-fitness-wellness",
  "technology-solutions-for-auto-dealers",
];

const flatLocationRoutes = [
  "northern-nevada-ai-integration",
  "california-small-business-it",
  "western-us-digital-infrastructure",
  "reno-managed-it-services", "reno-ai-integration", "reno-cybersecurity-services", "reno-digital-marketing",
  "truckee-managed-it-services", "truckee-ai-integration", "truckee-cybersecurity", "truckee-digital-marketing",
  "tahoe-managed-it-services", "tahoe-ai-integration", "tahoe-cybersecurity",
  "carson-city-managed-it-services", "carson-city-ai-integration", "carson-city-cybersecurity", "carson-city-digital-marketing",
  "sparks-managed-it-services", "sparks-ai-integration", "sparks-cybersecurity", "sparks-digital-marketing",
  "incline-village-managed-it-services", "incline-village-ai-integration", "incline-village-cybersecurity", "incline-village-digital-marketing",
  "south-lake-tahoe-managed-it-services", "south-lake-tahoe-cybersecurity", "south-lake-tahoe-ai-integration", "south-lake-tahoe-digital-marketing",
  "sacramento-managed-it-services", "sacramento-ai-integration", "sacramento-cybersecurity", "sacramento-digital-marketing",
  "roseville-managed-it-services", "roseville-ai-integration", "roseville-cybersecurity", "roseville-digital-marketing",
  "folsom-managed-it-services", "folsom-ai-integration", "folsom-cybersecurity", "folsom-digital-marketing",
  "rocklin-managed-it-services", "rocklin-ai-integration", "rocklin-cybersecurity", "rocklin-digital-marketing",
  "auburn-managed-it-services", "auburn-ai-integration", "auburn-cybersecurity", "auburn-digital-marketing",
  "grass-valley-managed-it-services", "grass-valley-ai-integration", "grass-valley-cybersecurity", "grass-valley-digital-marketing",
  "nevada-city-managed-it-services", "nevada-city-ai-integration", "nevada-city-cybersecurity", "nevada-city-digital-marketing",
  "gardnerville-managed-it-services", "gardnerville-cybersecurity",
  "minden-managed-it-services", "minden-cybersecurity",
  "dayton-managed-it-services", "dayton-ai-integration", "dayton-cybersecurity", "dayton-digital-marketing",
  "fernley-managed-it-services", "fernley-ai-integration", "fernley-cybersecurity", "fernley-digital-marketing",
  "fallon-managed-it-services", "fallon-cybersecurity",
  "lincoln-managed-it-services", "lincoln-cybersecurity",
  "elk-grove-managed-it-services", "elk-grove-cybersecurity",
  "rancho-cordova-managed-it-services", "rancho-cordova-cybersecurity",
  "las-vegas-managed-it-services", "las-vegas-ai-integration", "las-vegas-cybersecurity", "las-vegas-digital-marketing",
  "san-jose-managed-it-services", "san-jose-cybersecurity",
  "reno-it-support-for-construction-companies", "truckee-it-support-for-law-firms",
  "tahoe-cybersecurity-for-hospitality", "reno-marketing-for-real-estate",
  "reno-it-support-for-medical-offices", "tahoe-marketing-for-hospitality",
  "reno-it-support-for-professional-services", "truckee-marketing-for-real-estate",
  "sacramento-it-support-for-construction-companies", "sacramento-marketing-for-real-estate",
  "reno-it-support-for-law-firms", "reno-cybersecurity-for-medical-offices",
  "reno-marketing-for-restaurants", "reno-ai-for-real-estate",
  "reno-it-support-for-retail", "truckee-cybersecurity-for-hospitality",
  "truckee-it-support-for-real-estate", "tahoe-it-support-for-hospitality",
  "tahoe-marketing-for-real-estate", "carson-city-it-support-for-law-firms",
  "carson-city-it-support-for-medical-offices", "sparks-it-support-for-construction",
  "sacramento-it-support-for-medical-offices", "sacramento-it-support-for-law-firms",
  "sacramento-marketing-for-restaurants", "sacramento-it-support-for-retail",
  "sacramento-cybersecurity-for-healthcare", "reno-it-support-for-hospitality",
  "reno-it-support-for-accounting-firms", "reno-it-support-for-dental-practices",
  "sparks-marketing-for-retail", "las-vegas-it-support-for-hospitality",
  "las-vegas-marketing-for-real-estate", "roseville-it-support-for-medical-offices",
  "folsom-it-support-for-law-firms",
];

// Location hub slugs (from locations.ts — 162 entries)
const locationSlugs = [
  "reno", "sparks", "carson-city", "gardnerville", "minden", "dayton", "fernley", "fallon", "northern-nevada",
  "lake-tahoe", "incline-village", "tahoe-city", "kings-beach", "south-lake-tahoe",
  "truckee", "sacramento", "roseville", "folsom", "rocklin", "auburn", "grass-valley", "nevada-city", "lincoln", "elk-grove", "citrus-heights", "rancho-cordova", "woodland", "davis", "placerville",
  "phoenix", "denver", "salt-lake-city", "boise", "portland", "seattle", "las-vegas", "tucson", "albuquerque", "colorado-springs", "san-jose", "fresno", "bakersfield", "bend", "spokane", "medford", "ogden", "provo", "flagstaff", "santa-fe", "san-diego",
];

// Blog post slugs — read from the data files
function extractBlogSlugs(): string[] {
  // Read the blog-posts.ts and blog-posts-extended.ts to extract slugs
  const mainFile = fs.readFileSync(path.resolve(__dirname, "../src/data/blog-posts.ts"), "utf-8");
  const extFile = fs.readFileSync(path.resolve(__dirname, "../src/data/blog-posts-extended.ts"), "utf-8");
  const slugRegex = /slug:\s*"([^"]+)"/g;
  const slugs: string[] = [];
  let match;
  while ((match = slugRegex.exec(mainFile)) !== null) slugs.push(match[1]);
  while ((match = slugRegex.exec(extFile)) !== null) slugs.push(match[1]);
  return slugs;
}

function extractResourceSlugs(): string[] {
  const file = fs.readFileSync(path.resolve(__dirname, "../src/data/resources.ts"), "utf-8");
  const slugRegex = /slug:\s*"([^"]+)"/g;
  const slugs: string[] = [];
  let match;
  while ((match = slugRegex.exec(file)) !== null) slugs.push(match[1]);
  return slugs;
}

function extractAssessmentSlugs(): string[] {
  const file = fs.readFileSync(path.resolve(__dirname, "../src/data/assessments.ts"), "utf-8");
  const slugRegex = /slug:\s*"([^"]+)"/g;
  const slugs: string[] = [];
  let match;
  while ((match = slugRegex.exec(file)) !== null) slugs.push(match[1]);
  return slugs;
}

// --- Build sitemap entries ---

function buildEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  // Homepage
  entries.push({ loc: "/", lastmod: TODAY, changefreq: "weekly", priority: "1.0" });

  // Pillar pages (high authority)
  for (const slug of pillarRoutes) {
    entries.push({ loc: `/${slug}`, lastmod: TODAY, changefreq: "monthly", priority: "0.9" });
  }

  // Service pages
  for (const slug of serviceRoutes) {
    entries.push({ loc: `/${slug}`, lastmod: TODAY, changefreq: "monthly", priority: "0.8" });
  }

  // Industry pages (flat routes)
  for (const slug of flatIndustryRoutes) {
    entries.push({ loc: `/${slug}`, lastmod: TODAY, changefreq: "monthly", priority: "0.7" });
  }

  // Location hub
  entries.push({ loc: "/locations", lastmod: TODAY, changefreq: "monthly", priority: "0.8" });

  // Individual location pages
  for (const slug of locationSlugs) {
    entries.push({ loc: `/locations/${slug}`, lastmod: TODAY, changefreq: "monthly", priority: "0.6" });
  }

  // Flat location+service SEO pages
  for (const slug of flatLocationRoutes) {
    entries.push({ loc: `/${slug}`, lastmod: TODAY, changefreq: "monthly", priority: "0.5" });
  }

  // Blog index
  entries.push({ loc: "/blog", lastmod: TODAY, changefreq: "weekly", priority: "0.7" });

  // Blog posts
  const blogSlugs = extractBlogSlugs();
  for (const slug of blogSlugs) {
    entries.push({ loc: `/blog/${slug}`, lastmod: TODAY, changefreq: "monthly", priority: "0.5" });
  }

  // Resources
  const resourceSlugs = extractResourceSlugs();
  for (const slug of resourceSlugs) {
    entries.push({ loc: `/resources/${slug}`, lastmod: TODAY, changefreq: "monthly", priority: "0.6" });
  }

  // Assessments
  const assessmentSlugs = extractAssessmentSlugs();
  for (const slug of assessmentSlugs) {
    entries.push({ loc: `/assessments/${slug}`, lastmod: TODAY, changefreq: "monthly", priority: "0.6" });
  }

  // Legal pages
  entries.push({ loc: "/privacy-policy", lastmod: TODAY, changefreq: "yearly", priority: "0.2" });
  entries.push({ loc: "/terms-of-service", lastmod: TODAY, changefreq: "yearly", priority: "0.2" });

  return entries;
}

// --- Generate XML ---

function generateXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${SITE_URL}${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

// --- Main ---

const entries = buildEntries();
const xml = generateXml(entries);
const outputPath = path.resolve(__dirname, "../public/sitemap.xml");

// Ensure public directory exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, xml);

console.log(`✓ Sitemap generated: ${entries.length} URLs → ${outputPath}`);

import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { locations } from "../../../data/locations";
import { blogPosts } from "../../../data/blog-posts";

const SITE = "https://www.ltol.com";

export const listLocationsTool = defineTool({
  name: "list_locations",
  title: "List service areas",
  description: "List the cities and regions LTOL serves.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const rows = locations.map((l) => ({ slug: l.slug, city: l.city, region: l.region, tier: l.tier ?? "primary" }));
    return {
      content: [{ type: "text", text: rows.map((r) => `${r.city}, ${r.region} (${r.tier})`).join("\n") }],
      structuredContent: { locations: rows },
    };
  },
});

export const searchBlogPostsTool = defineTool({
  name: "search_blog_posts",
  title: "Search blog posts",
  description: "Search LTOL blog posts by keyword and/or category; returns up to 20 matches.",
  inputSchema: {
    query: z.string().optional().describe("Keyword to match in title or summary."),
    category: z.string().optional().describe("Category name to filter by, e.g. Cybersecurity."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, category }) => {
    const q = query?.toLowerCase();
    const c = category?.toLowerCase();
    const rows = blogPosts
      .filter((p) => (!q || `${p.title} ${p.metaDescription}`.toLowerCase().includes(q)) && (!c || p.category.toLowerCase() === c))
      .slice(0, 20)
      .map((p) => ({ slug: p.slug, title: p.title, category: p.category, date: p.date, summary: p.metaDescription, url: `${SITE}/blog/${p.slug}` }));
    return {
      content: [{ type: "text", text: rows.length ? rows.map((r) => `${r.slug}: ${r.title} [${r.category}]`).join("\n") : "No matching posts." }],
      structuredContent: { posts: rows },
    };
  },
});

export const getBlogPostTool = defineTool({
  name: "get_blog_post",
  title: "Get blog post",
  description: "Get the full text of one LTOL blog post by slug.",
  inputSchema: { slug: z.string().min(1).describe("Blog post slug from search_blog_posts.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const p = blogPosts.find((x) => x.slug === slug);
    if (!p) throw new ToolError(`Unknown blog post "${slug}".`);
    const body = [p.intro, ...p.sections.map((s) => `## ${s.heading}\n${s.content}`)].join("\n\n");
    return {
      content: [{ type: "text", text: `# ${p.title}\n\n${body}\n\n${SITE}/blog/${p.slug}` }],
      structuredContent: { post: { slug: p.slug, title: p.title, category: p.category, date: p.date, body, url: `${SITE}/blog/${p.slug}` } },
    };
  },
});

export const getContactInfoTool = defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description: "Get LTOL's phone, email, address and business hours.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      phone: "+1-530-582-2080",
      email: "support@ltol.com",
      address: "10266 Truckee Airport Road, Suite C, Truckee, CA 96161",
      hours: "Monday–Friday, 8am–6pm Pacific",
      website: SITE,
    };
    return { content: [{ type: "text", text: Object.entries(info).map(([k, v]) => `${k}: ${v}`).join("\n") }], structuredContent: { contact: info } };
  },
});

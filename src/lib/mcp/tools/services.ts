import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { services } from "../../../data/services";

const SITE = "https://www.ltol.com";

export const listServicesTool = defineTool({
  name: "list_services",
  title: "List services",
  description: "List all LTOL services with a short summary and page link.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const rows = services.map((s) => ({ slug: s.slug, title: s.title, summary: s.metaDescription, url: `${SITE}/${s.slug}` }));
    return {
      content: [{ type: "text", text: rows.map((r) => `${r.slug}: ${r.title} — ${r.summary}`).join("\n") }],
      structuredContent: { services: rows },
    };
  },
});

export const getServiceTool = defineTool({
  name: "get_service",
  title: "Get service details",
  description: "Get full details for one LTOL service by its slug (from list_services).",
  inputSchema: { slug: z.string().min(1).describe("Service slug, e.g. ai-integration.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const s = services.find((x) => x.slug === slug);
    if (!s) throw new ToolError(`Unknown service "${slug}". Use list_services to see valid slugs.`);
    const service = {
      slug: s.slug, title: s.title, intro: s.intro, howWeHelp: s.howWeHelp,
      problems: [...s.problems], deliverables: [...s.deliverables], whyLtol: [...s.whyLtol], idealFit: [...s.idealFit],
      faqs: s.faqs.map(({ question, answer }) => ({ question, answer })), url: `${SITE}/${s.slug}`,
    };
    return { content: [{ type: "text", text: `${s.title}\n\n${s.intro}\n\nDeliverables:\n- ${s.deliverables.join("\n- ")}\n\n${service.url}` }], structuredContent: { service } };
  },
});

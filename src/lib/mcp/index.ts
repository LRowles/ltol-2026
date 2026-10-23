import { defineMcp } from "@lovable.dev/mcp-js";
import { listServicesTool, getServiceTool } from "./tools/services";
import { listLocationsTool, searchBlogPostsTool, getBlogPostTool, getContactInfoTool } from "./tools/content";

export default defineMcp({
  name: "ltol-2026",
  title: "LTOL 2026",
  version: "0.1.0",
  instructions:
    "Public information about LTOL, a local IT, AI and marketing company in Truckee, Tahoe and Reno: services, service areas, blog articles and contact details.",
  tools: [listServicesTool, getServiceTool, listLocationsTool, searchBlogPostsTool, getBlogPostTool, getContactInfoTool],
});

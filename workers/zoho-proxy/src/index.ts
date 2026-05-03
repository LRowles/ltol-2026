/**
 * LTOL Zoho CRM Proxy Worker
 *
 * This Cloudflare Worker acts as a secure server-side proxy between the
 * LTOL website forms and Zoho CRM. It handles:
 *
 * 1. OAuth token refresh (secrets never exposed to the browser)
 * 2. Lead creation in Zoho CRM from contact forms
 * 3. Lead creation from resource downloads
 * 4. Lead creation from assessment completions
 *
 * Endpoints:
 *   POST /lead/contact    — Contact form submissions
 *   POST /lead/resource   — Resource download submissions
 *   POST /lead/assessment — Assessment completion submissions
 *   GET  /health          — Health check
 */

export interface Env {
  ZOHO_CLIENT_ID: string;
  ZOHO_CLIENT_SECRET: string;
  ZOHO_REFRESH_TOKEN: string;
  ZOHO_ACCOUNTS_URL: string;
  ZOHO_API_URL: string;
  ALLOWED_ORIGIN: string;
}

// --- Types ---

interface ContactPayload {
  name: string;
  email: string;
  business?: string;
  phone?: string;
  message?: string;
  source_page?: string;
  ltol_service?: string[];
}

interface ResourcePayload {
  name: string;
  email: string;
  business?: string;
  resource_slug: string;
}

interface AssessmentPayload {
  name: string;
  email: string;
  business?: string;
  assessment_slug: string;
  score: number;
  band: string;
}

// --- CORS Helpers ---

function corsHeaders(origin: string, allowedOrigin: string): Record<string, string> {
  // Allow localhost for development, and the production origin
  const allowed = origin === allowedOrigin ||
    origin.startsWith("http://localhost") ||
    origin.startsWith("https://localhost") ||
    origin.includes("lovable.dev") ||
    origin.includes("ltol.com");

  return {
    "Access-Control-Allow-Origin": allowed ? origin : allowedOrigin,
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function handleOptions(request: Request, env: Env): Response {
  const origin = request.headers.get("Origin") || "";
  return new Response(null, {
    status: 204,
    headers: corsHeaders(origin, env.ALLOWED_ORIGIN),
  });
}

// --- Zoho OAuth ---

async function getAccessToken(env: Env): Promise<string> {
  const params = new URLSearchParams({
    refresh_token: env.ZOHO_REFRESH_TOKEN,
    client_id: env.ZOHO_CLIENT_ID,
    client_secret: env.ZOHO_CLIENT_SECRET,
    grant_type: "refresh_token",
  });

  const resp = await fetch(`${env.ZOHO_ACCOUNTS_URL}/oauth/v2/token?${params.toString()}`, {
    method: "POST",
  });

  const data = await resp.json() as { access_token?: string; error?: string };

  if (!data.access_token) {
    throw new Error(`Zoho OAuth failed: ${JSON.stringify(data)}`);
  }

  return data.access_token;
}

// --- Zoho CRM Lead Creation ---

interface ZohoLeadData {
  Last_Name: string;
  First_Name?: string;
  Email?: string;
  Phone?: string;
  Company?: string;
  Description?: string;
  Lead_Source: string;
  LTOL_Service?: string[];
  City?: string;
  State?: string;
}

async function createZohoLead(env: Env, leadData: ZohoLeadData): Promise<{ success: boolean; id?: string; error?: string }> {
  const accessToken = await getAccessToken(env);

  const resp = await fetch(`${env.ZOHO_API_URL}/crm/v2/Leads`, {
    method: "POST",
    headers: {
      "Authorization": `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: [leadData] }),
  });

  const result = await resp.json() as { data?: Array<{ code: string; details: { id: string }; message: string }> };

  if (result.data && result.data[0]?.code === "SUCCESS") {
    return { success: true, id: result.data[0].details.id };
  }

  return { success: false, error: JSON.stringify(result) };
}

// --- Name Parsing ---

function parseName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) {
    return { firstName: "", lastName: parts[0] };
  }
  const lastName = parts.pop() || "";
  const firstName = parts.join(" ");
  return { firstName, lastName };
}

// --- Route Handlers ---

async function handleContactLead(body: ContactPayload, env: Env): Promise<ZohoLeadData> {
  const { firstName, lastName } = parseName(body.name);

  return {
    First_Name: firstName,
    Last_Name: lastName || "Unknown",
    Email: body.email,
    Phone: body.phone,
    Company: body.business,
    Description: [
      body.message,
      body.source_page ? `Source Page: ${body.source_page}` : null,
    ].filter(Boolean).join("\n\n"),
    Lead_Source: "Website",
    LTOL_Service: body.ltol_service || [],
  };
}

async function handleResourceLead(body: ResourcePayload, env: Env): Promise<ZohoLeadData> {
  const { firstName, lastName } = parseName(body.name);

  return {
    First_Name: firstName,
    Last_Name: lastName || "Unknown",
    Email: body.email,
    Company: body.business,
    Description: `Downloaded resource: ${body.resource_slug}`,
    Lead_Source: "Web Download",
    LTOL_Service: [],
  };
}

async function handleAssessmentLead(body: AssessmentPayload, env: Env): Promise<ZohoLeadData> {
  const { firstName, lastName } = parseName(body.name);

  return {
    First_Name: firstName,
    Last_Name: lastName || "Unknown",
    Email: body.email,
    Company: body.business,
    Description: `Assessment: ${body.assessment_slug}\nScore: ${body.score}\nBand: ${body.band}`,
    Lead_Source: "Website",
    LTOL_Service: [],
  };
}

// --- Main Handler ---

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    const headers = corsHeaders(origin, env.ALLOWED_ORIGIN);

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return handleOptions(request, env);
    }

    // Health check
    if (url.pathname === "/health" && request.method === "GET") {
      return new Response(JSON.stringify({ status: "ok", service: "ltol-zoho-proxy" }), {
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }

    // All lead endpoints require POST
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }

    try {
      let leadData: ZohoLeadData;
      const body = await request.json();

      switch (url.pathname) {
        case "/lead/contact":
          leadData = await handleContactLead(body as ContactPayload, env);
          break;
        case "/lead/resource":
          leadData = await handleResourceLead(body as ResourcePayload, env);
          break;
        case "/lead/assessment":
          leadData = await handleAssessmentLead(body as AssessmentPayload, env);
          break;
        default:
          return new Response(JSON.stringify({ error: "Not found" }), {
            status: 404,
            headers: { ...headers, "Content-Type": "application/json" },
          });
      }

      const result = await createZohoLead(env, leadData);

      if (result.success) {
        return new Response(JSON.stringify({ success: true, zoho_id: result.id }), {
          status: 200,
          headers: { ...headers, "Content-Type": "application/json" },
        });
      } else {
        console.error("Zoho CRM error:", result.error);
        return new Response(JSON.stringify({ success: false, error: "CRM submission failed" }), {
          status: 502,
          headers: { ...headers, "Content-Type": "application/json" },
        });
      }
    } catch (err: any) {
      console.error("Worker error:", err.message);
      return new Response(JSON.stringify({ error: "Internal server error", detail: err.message }), {
        status: 500,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }
  },
};

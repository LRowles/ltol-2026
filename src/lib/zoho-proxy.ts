/**
 * Zoho CRM Proxy Client
 *
 * Sends lead data to the Cloudflare Worker proxy which securely
 * forwards it to Zoho CRM. This runs in parallel with the Supabase
 * write — if it fails, the Supabase record still exists as a fallback.
 */

const PROXY_URL = "https://ltol-zoho-proxy.ltol.workers.dev";

interface ContactLead {
  name: string;
  email: string;
  business?: string;
  phone?: string;
  message?: string;
  source_page?: string;
  ltol_service?: string[];
}

interface ResourceLead {
  name: string;
  email: string;
  business?: string;
  resource_slug: string;
}

interface AssessmentLead {
  name: string;
  email: string;
  business?: string;
  assessment_slug: string;
  score: number;
  band: string;
}

async function postToProxy(endpoint: string, data: unknown): Promise<boolean> {
  if (!PROXY_URL) {
    console.warn("[Zoho Proxy] VITE_ZOHO_PROXY_URL not configured. Skipping CRM push.");
    return false;
  }

  try {
    const resp = await fetch(`${PROXY_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!resp.ok) {
      const err = await resp.text();
      console.error("[Zoho Proxy] CRM push failed:", resp.status, err);
      return false;
    }

    const result = await resp.json();
    console.log("[Zoho Proxy] Lead created:", result);
    return true;
  } catch (err) {
    // Non-blocking: log but don't disrupt user experience
    console.error("[Zoho Proxy] Network error:", err);
    return false;
  }
}

export async function pushContactLead(data: ContactLead): Promise<boolean> {
  return postToProxy("/lead/contact", data);
}

export async function pushResourceLead(data: ResourceLead): Promise<boolean> {
  return postToProxy("/lead/resource", data);
}

export async function pushAssessmentLead(data: AssessmentLead): Promise<boolean> {
  return postToProxy("/lead/assessment", data);
}

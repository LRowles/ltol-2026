/**
 * Legacy URL Redirect Map
 *
 * Maps old ltol.com URLs (from the 2017-era static HTML site) to their
 * corresponding pages on the new React SPA. Used by the NotFound component
 * to automatically redirect users who arrive via old bookmarks, cached
 * search results, or external backlinks.
 *
 * Also includes convenience email shortcuts (e.g., ltol.com/webmail) that
 * redirect to external email login portals.
 *
 * Old site structure (from sitemap.xml):
 *   - Static .html pages at root level
 *   - /phone/ directory with mobile-specific duplicates
 *   - Simple service/utility pages
 *
 * New site structure:
 *   - React SPA with flat SEO-friendly slugs
 *   - /portal for client utilities (webmail, remote support)
 *   - /portal/email-setup for email configuration
 *   - Service pages at /{service-slug}
 *   - Location pages at /{city}-{service}
 *
 * External redirects (prefixed with https://) open in the same tab via
 * window.location.href assignment.
 */

export const legacyRedirectMap: Record<string, string> = {
  // === Homepage variants ===
  "/index.html": "/",
  "/index": "/",

  // === Service pages ===
  "/marketing.html": "/digital-marketing",
  "/marketing": "/digital-marketing",
  "/social-media.html": "/digital-marketing",
  "/social-media": "/digital-marketing",
  "/branding.html": "/digital-marketing",
  "/branding": "/digital-marketing",
  "/hosting.html": "/cloud-services",
  "/hosting": "/cloud-services",
  "/maintenance.html": "/managed-it-services",
  "/maintenance": "/managed-it-services",
  "/dsl-high-speed-internet.html": "/network-solutions",
  "/dsl-high-speed-internet": "/network-solutions",

  // === Utility / Portal pages ===
  "/web-portal.html": "/portal",
  "/web-portal": "/portal",
  "/email-portal.html": "/portal",
  "/email-portal": "/portal",

  // === Email convenience shortcuts ===
  // These give customers easy-to-remember URLs like ltol.com/webmail
  "/webmail": "https://ltol.cityemail.com/tuxedo/",
  "/mail": "/portal",
  "/email": "/portal",
  "/owa": "https://controlpanel.msoutlookonline.net/Portal/ADUser/Login",
  "/popmail": "https://cp.serverdata.net/Portal/ADUser/Login",

  // === Info pages ===
  "/about-us.html": "/#about",
  "/about-us": "/#about",
  "/contact-us.html": "/#contact",
  "/contact-us": "/#contact",
  "/promos.html": "/",
  "/promos": "/",
  "/site-map.html": "/",
  "/site-map": "/",

  // === Legal pages ===
  "/terms-conditions.html": "/terms-of-service",
  "/terms-conditions": "/terms-of-service",
  "/acceptable-use-policy.html": "/terms-of-service",
  "/acceptable-use-policy": "/terms-of-service",

  // === Mobile /phone/ directory (all redirect to desktop equivalents) ===
  "/phone/index.html": "/",
  "/phone/news.html": "/blog",
  "/phone/terms---conditions.html": "/terms-of-service",
  "/phone/phone-sitemap.html": "/",
  "/phone/dsl---high-speed-internet.html": "/network-solutions",
  "/phone/hosting.html": "/cloud-services",
  "/phone/marketing.html": "/digital-marketing",
  "/phone/branding.html": "/digital-marketing",
  "/phone/acceptable-use-policy.html": "/terms-of-service",
  "/phone/contact-us.html": "/#contact",
  "/phone/about-us.html": "/#about",
  "/phone/social-media.html": "/digital-marketing",
  "/phone/maintenance.html": "/managed-it-services",
};

/**
 * Attempts to find a redirect destination for a legacy URL path.
 * Returns the new path if a match is found, or null if no redirect exists.
 *
 * Handles case-insensitive matching and trailing slash normalization.
 */
export function findLegacyRedirect(pathname: string): string | null {
  // Normalize: lowercase, strip trailing slash (but keep root /)
  const normalized = pathname.toLowerCase().replace(/\/+$/, "") || "/";

  // Direct match
  if (legacyRedirectMap[normalized]) {
    return legacyRedirectMap[normalized];
  }

  // Try without .html extension (in case someone typed the URL without it)
  if (!normalized.endsWith(".html")) {
    const withHtml = normalized + ".html";
    if (legacyRedirectMap[withHtml]) {
      return legacyRedirectMap[withHtml];
    }
  }

  return null;
}

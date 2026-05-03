import { useEffect } from "react";

const BASE_URL = "https://ltol.com";
const DEFAULT_OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/CXSUym8aEXfAmljn39TKhvCaft33/social-images/social-1777785928831-LTOL_Gradient_ScreenSnip.webp";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    author?: string;
  };
  noindex?: boolean;
}

/**
 * Comprehensive SEO hook that manages all meta tags for a page.
 * Updates: document.title, meta description, canonical, OG tags, Twitter Cards.
 */
export function useSEO({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  article,
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    const fullUrl = `${BASE_URL}${path}`;

    // Title
    document.title = title;

    // Meta description
    setMeta("name", "description", description);

    // Canonical URL
    setLink("canonical", fullUrl);

    // Robots
    if (noindex) {
      setMeta("name", "robots", "noindex, nofollow");
    } else {
      removeMeta("name", "robots");
    }

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", fullUrl);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:site_name", "LTOL");

    // Article-specific OG tags
    if (ogType === "article" && article) {
      if (article.publishedTime) setMeta("property", "article:published_time", article.publishedTime);
      if (article.modifiedTime) setMeta("property", "article:modified_time", article.modifiedTime);
      if (article.section) setMeta("property", "article:section", article.section);
      if (article.author) setMeta("property", "article:author", article.author);
    } else {
      removeMeta("property", "article:published_time");
      removeMeta("property", "article:modified_time");
      removeMeta("property", "article:section");
      removeMeta("property", "article:author");
    }

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    // Scroll to top
    window.scrollTo(0, 0);

    // Cleanup: reset to defaults when unmounting
    return () => {
      // Don't clean up — let the next page set its own values
    };
  }, [title, description, path, ogImage, ogType, noindex, JSON.stringify(article)]);
}

// --- Helper functions ---

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function removeMeta(attr: "name" | "property", key: string) {
  const el = document.querySelector(`meta[${attr}="${key}"]`);
  if (el) el.remove();
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// --- Breadcrumb Schema Helper ---

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

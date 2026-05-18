import { useEffect } from "react";

const BASE_URL = "https://www.ltol.com";

const localBusinessBase = {
  "@type": "LocalBusiness",
  name: "LTOL",
  alternateName: "Lake Tahoe Online",
  url: BASE_URL,
  telephone: "+1-530-582-2080",
  email: "support@ltol.com",
  openingHours: "Mo-Fr 08:00-18:00",
  areaServed: {
    "@type": "Place",
    name: "Western United States",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "10266 Truckee Airport Road, Suite C",
    addressLocality: "Truckee",
    addressRegion: "CA",
    postalCode: "96161",
    addressCountry: "US",
  },
};

export function useJsonLd(schema: Record<string, unknown>) {
  useEffect(() => {
    const id = "json-ld-structured-data";
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({ "@context": "https://schema.org", ...schema });
    return () => {
      script?.remove();
    };
  }, [JSON.stringify(schema)]);
}

export function serviceSchema(title: string, description: string, slug: string) {
  return {
    "@type": "Service",
    provider: localBusinessBase,
    name: title,
    description,
    url: `${BASE_URL}/${slug}`,
  };
}

export function articleSchema(title: string, description: string, slug: string, date: string, category: string) {
  return {
    "@type": "Article",
    headline: title,
    description,
    url: `${BASE_URL}/blog/${slug}`,
    datePublished: date,
    author: { "@type": "Organization", name: "LTOL" },
    publisher: { "@type": "Organization", name: "LTOL", url: BASE_URL },
    articleSection: category,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function localBusinessSchema(city: string, region: string, description: string, slug: string) {
  return {
    "@type": "LocalBusiness",
    name: "LTOL",
    alternateName: "LTOL",
    url: `${BASE_URL}/locations/${slug}`,
    description,
    areaServed: { "@type": "Place", name: `${city}, ${region}` },
    address: { "@type": "PostalAddress", addressLocality: city, addressRegion: region, addressCountry: "US" },
  };
}

export function homepageLocalBusinessSchema() {
  return {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${BASE_URL}/#business`,
    name: "LTOL",
    alternateName: "Lake Tahoe Online",
    description:
      "Local managed IT services, web design, AI integration, and digital marketing for small businesses in Lake Tahoe, Reno, and the Western United States.",
    url: BASE_URL,
    telephone: "+1-530-582-2080",
    email: "support@ltol.com",
    image:
      "https://storage.googleapis.com/gpt-engineer-file-uploads/CXSUym8aEXfAmljn39TKhvCaft33/social-images/social-1777785928831-LTOL_Gradient_ScreenSnip.webp",
    logo: `${BASE_URL}/ltol-logo.svg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10266 Truckee Airport Road, Suite C",
      addressLocality: "Truckee",
      addressRegion: "CA",
      postalCode: "96161",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.3201,
      longitude: -120.1395,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "Place", name: "Lake Tahoe" },
      { "@type": "Place", name: "Truckee, California" },
      { "@type": "Place", name: "Reno, Nevada" },
      { "@type": "Place", name: "Carson City, Nevada" },
      { "@type": "Place", name: "Sacramento, California" },
      { "@type": "Place", name: "Northern Nevada" },
      { "@type": "Place", name: "Western United States" },
    ],
    serviceType: [
      "Managed IT Services",
      "Web Design",
      "AI Integration",
      "Digital Marketing",
      "Network Infrastructure",
      "Cybersecurity",
      "Cloud Services",
    ],
    knowsAbout: [
      "IT Support",
      "Cybersecurity",
      "AI Workflow Automation",
      "SEO",
      "Google Workspace",
      "Microsoft 365",
    ],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "LTOL",
    publisher: { "@id": `${BASE_URL}/#business` },
  };
}

export function professionalServiceSchema(industryName: string, description: string, slug: string, serviceTypes: string[]) {
  return {
    "@type": "ProfessionalService",
    provider: localBusinessBase,
    name: `Technology Solutions for ${industryName}`,
    description,
    url: `${BASE_URL}/solutions/${slug}`,
    serviceType: serviceTypes,
  };
}

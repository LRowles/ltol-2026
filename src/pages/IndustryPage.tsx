import { useParams, useLocation } from "react-router-dom";
import { industries } from "@/data/industries";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import NotFound from "./NotFound";

// Map flat SEO routes to industry slugs
const flatRouteMap: Record<string, string> = {
  "technology-solutions-for-construction-companies": "construction",
  "technology-solutions-for-law-firms": "legal",
  "technology-solutions-for-medical-offices": "healthcare",
  "technology-solutions-for-real-estate": "real-estate",
  "technology-solutions-for-hospitality": "hospitality",
  "technology-solutions-for-retail-businesses": "retail",
  "technology-solutions-for-professional-services": "professional-services",
  "technology-solutions-for-accounting-firms": "accounting-firms",
  "technology-solutions-for-dental-practices": "dental-practices",
  "technology-solutions-for-nonprofits": "nonprofits",
  "technology-solutions-for-restaurants": "restaurants",
  "technology-solutions-for-property-management": "property-management",
  "technology-solutions-for-fitness-wellness": "fitness-wellness",
  "technology-solutions-for-auto-dealers": "auto-dealers",
};

const IndustryPage = () => {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const pathSlug = pathname.replace("/", "");
  const resolvedSlug = slug || flatRouteMap[pathSlug] || pathSlug;
  const industry = industries.find((ind) => ind.slug === resolvedSlug);
  if (!industry) return <NotFound />;
  return <IndustryPageTemplate industry={industry} />;
};

export default IndustryPage;

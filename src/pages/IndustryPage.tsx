import { useParams, useLocation } from "react-router-dom";
import { industries } from "@/data/industries";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import NotFound from "./NotFound";

const IndustryPage = () => {
  const { slug } = useParams();
  const { pathname } = useLocation();
  // Support both /solutions/:slug and flat /technology-solutions-for-* routes
  const resolvedSlug = slug || pathname.replace("/", "");
  const industry = industries.find((ind) => ind.slug === resolvedSlug);
  if (!industry) return <NotFound />;
  return <IndustryPageTemplate industry={industry} />;
};

export default IndustryPage;

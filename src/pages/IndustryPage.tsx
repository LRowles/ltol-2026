import { useParams } from "react-router-dom";
import { industries } from "@/data/industries";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import NotFound from "./NotFound";

const IndustryPage = () => {
  const { slug } = useParams();
  const industry = industries.find((ind) => ind.slug === slug);
  if (!industry) return <NotFound />;
  return <IndustryPageTemplate industry={industry} />;
};

export default IndustryPage;

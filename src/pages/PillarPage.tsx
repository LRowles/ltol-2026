import { useLocation } from "react-router-dom";
import { pillars } from "@/data/pillars";
import PillarPageTemplate from "@/components/templates/PillarPageTemplate";
import NotFound from "./NotFound";

const PillarPage = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace("/", "");
  const pillar = pillars.find((p) => p.slug === slug);
  if (!pillar) return <NotFound />;
  return <PillarPageTemplate pillar={pillar} />;
};

export default PillarPage;

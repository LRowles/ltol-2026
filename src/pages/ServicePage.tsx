import { useParams, useLocation } from "react-router-dom";
import { services } from "@/data/services";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import NotFound from "./NotFound";

const ServicePage = () => {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const resolvedSlug = slug || pathname.replace("/", "");
  const service = services.find((s) => s.slug === resolvedSlug);
  if (!service) return <NotFound />;
  return <ServicePageTemplate service={service} />;
};

export default ServicePage;

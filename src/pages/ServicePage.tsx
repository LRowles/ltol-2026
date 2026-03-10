import { useParams } from "react-router-dom";
import { services } from "@/data/services";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import NotFound from "./NotFound";

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <NotFound />;
  return <ServicePageTemplate service={service} />;
};

export default ServicePage;

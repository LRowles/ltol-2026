import { useParams } from "react-router-dom";
import { resources } from "@/data/resources";
import ResourcePageTemplate from "@/components/templates/ResourcePageTemplate";
import NotFound from "./NotFound";

const ResourcePage = () => {
  const { slug } = useParams();
  const resource = resources.find((r) => r.slug === slug);
  if (!resource) return <NotFound />;
  return <ResourcePageTemplate resource={resource} />;
};

export default ResourcePage;

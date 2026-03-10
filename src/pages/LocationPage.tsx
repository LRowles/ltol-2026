import { useParams } from "react-router-dom";
import { locations } from "@/data/locations";
import LocationPageTemplate from "@/components/templates/LocationPageTemplate";
import NotFound from "./NotFound";

const LocationPage = () => {
  const { slug } = useParams();
  const location = locations.find((l) => l.slug === slug);
  if (!location) return <NotFound />;
  return <LocationPageTemplate location={location} />;
};

export default LocationPage;

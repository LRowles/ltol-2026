import { useParams, useLocation } from "react-router-dom";
import { locations } from "@/data/locations";
import LocationPageTemplate from "@/components/templates/LocationPageTemplate";
import NotFound from "./NotFound";

const LocationPage = () => {
  const { slug } = useParams();
  const { pathname } = useLocation();

  // Support both /locations/:slug and flat /:slug routes
  const resolvedSlug = slug || pathname.replace("/", "");
  const location = locations.find((l) => l.slug === resolvedSlug);

  if (!location) return <NotFound />;
  return <LocationPageTemplate location={location} />;
};

export default LocationPage;

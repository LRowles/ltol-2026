
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHeader from "@/components/templates/PageHeader";
import CTABlock from "@/components/templates/CTABlock";
import { locations, LocationData } from "@/data/locations";
import { useJsonLd } from "@/lib/structured-data";
import { useSEO } from "@/lib/seo";

import heroLandscape from "@/assets/photos/difference-landscape.jpg";

const regions = [
  {
    name: "Northern Nevada",
    description: "On-site and remote technology services for businesses across Northern Nevada.",
    slugs: ["reno", "sparks", "carson-city", "gardnerville", "minden", "dayton", "fernley", "fallon", "northern-nevada"],
  },
  {
    name: "Lake Tahoe Basin",
    description: "Local IT, cybersecurity, and marketing systems for Lake Tahoe's business community.",
    slugs: ["lake-tahoe", "incline-village", "tahoe-city", "kings-beach", "south-lake-tahoe"],
  },
  {
    name: "Northern California",
    description: "Remote and hybrid technology services for businesses across Northern California.",
    slugs: ["truckee", "sacramento", "roseville", "folsom", "rocklin", "auburn", "grass-valley", "nevada-city", "lincoln", "elk-grove", "citrus-heights", "rancho-cordova", "woodland", "davis", "placerville"],
  },
  {
    name: "Western United States",
    description: "Remote digital infrastructure for growing businesses across the West.",
    slugs: ["phoenix", "denver", "salt-lake-city", "boise", "portland", "seattle", "las-vegas", "tucson", "albuquerque", "colorado-springs", "san-jose", "fresno", "bakersfield", "bend", "spokane", "medford", "ogden", "provo", "flagstaff", "santa-fe", "san-diego"],
  },
];

const LocationsHub = () => {
  useSEO({
    title: "Technology Services for Small Businesses Across the Western United States | LTOL",
    description: "Lake Tahoe Online provides AI integration, digital marketing systems, managed IT services, and cybersecurity for small businesses across Northern Nevada, the Tahoe Basin, and the Western United States.",
    path: "/locations",
  });

  useJsonLd({
    "@type": "ProfessionalService",
    name: "Lake Tahoe Online",
    url: "https://www.ltol.com",
    areaServed: ["Reno", "Truckee", "Lake Tahoe", "Northern Nevada", "Northern California", "Western United States"],
    serviceType: ["Managed IT Services", "AI Integration", "Cybersecurity", "Digital Marketing"],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        headline="Technology Services for Small Businesses Across the Western United States"
        intro="Lake Tahoe Online provides AI integration, digital marketing systems, managed IT services, and cybersecurity for small businesses across Northern Nevada, the Tahoe Basin, and the Western United States."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]}
        badge="Regional Technology Partner"
        backgroundImage={heroLandscape}
      />

      {regions.map((region) => {
        const regionLocations = region.slugs
          .map((s) => locations.find((l) => l.slug === s))
          .filter(Boolean) as LocationData[];

        return (
          <section key={region.name} className="py-16 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{region.name}</h2>
              </div>
              <div className="gradient-line w-16 mb-4" />
              <p className="text-muted-foreground mb-8 max-w-2xl">{region.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {regionLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    to={`/locations/${loc.slug}`}
                    className="glass-card-hover p-6 flex items-center justify-between group"
                  >
                    <div>
                      <h3 className="text-foreground font-semibold group-hover:text-secondary transition-colors">{loc.city}</h3>
                      <p className="text-sm text-muted-foreground">{loc.region}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTABlock
        headline="Build a Smarter Technology Infrastructure"
        description="Lake Tahoe Online helps small businesses bring together AI, marketing systems, cybersecurity, and IT infrastructure into a single integrated strategy."
        buttonText="Schedule a Technology Strategy Session"
      />
      <Footer />
    </div>
  );
};

export default LocationsHub;

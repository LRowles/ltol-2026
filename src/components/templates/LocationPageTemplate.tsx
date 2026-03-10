import { useEffect } from "react";
import { MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHeader from "./PageHeader";
import FAQSection from "./FAQSection";
import CTABlock from "./CTABlock";
import { LocationData } from "@/data/locations";
import { services } from "@/data/services";
import { useJsonLd, localBusinessSchema, faqSchema } from "@/lib/structured-data";

interface LocationPageTemplateProps {
  location: LocationData;
}

const LocationPageTemplate = ({ location }: LocationPageTemplateProps) => {
  useEffect(() => {
    document.title = location.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", location.metaDescription);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        headline={location.headline}
        intro={location.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations" },
          { label: location.city },
        ]}
        badge={`Serving ${location.city}, ${location.region}`}
      />

      {/* Local Context */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Local Expertise in {location.city}</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">{location.localContext}</p>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Services Available in {location.city}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {location.services.map((serviceName, i) => {
              const serviceData = services.find((s) => s.title === serviceName);
              return (
                <Link
                  key={i}
                  to={serviceData ? `/${serviceData.slug}` : "#"}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">{serviceName}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FAQSection faqs={location.faqs} />
      <CTABlock
        headline={`Ready to Upgrade Your ${location.city} Business Technology?`}
        buttonText="Book a Strategy Session"
      />
      <Footer />
    </div>
  );
};

export default LocationPageTemplate;

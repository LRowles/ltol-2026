import { useEffect } from "react";
import { MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHeader from "./PageHeader";
import FAQSection from "./FAQSection";
import CTABlock from "./CTABlock";
import { LocationData } from "@/data/locations";
import { services } from "@/data/services";
import { useJsonLd, localBusinessSchema, faqSchema } from "@/lib/structured-data";

import heroLandscape from "@/assets/photos/difference-landscape.jpg";

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

  useJsonLd({
    "@graph": [
      localBusinessSchema(location.city, location.region, location.intro, location.slug),
      faqSchema(location.faqs),
    ],
  });

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
        backgroundImage={heroLandscape}
      />

      {/* Local Context */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Local Expertise in {location.city}</h2>
            </div>
            <div className="gradient-line w-12 mb-6" />
            <p className="text-muted-foreground leading-relaxed text-lg">{location.localContext}</p>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Services Available in {location.city}</h2>
          <div className="gradient-line w-16 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {location.services.map((serviceName, i) => {
              const serviceData = services.find((s) => s.title === serviceName);
              return (
                <Link
                  key={i}
                  to={serviceData ? `/${serviceData.slug}` : "#"}
                  className="glass-card-hover p-5 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium group-hover:text-secondary transition-colors">{serviceName}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
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

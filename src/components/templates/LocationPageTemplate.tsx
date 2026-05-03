
import { MapPin, CheckCircle2, ArrowRight, BookOpen, FileText, Brain, Shield, Monitor, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHeader from "./PageHeader";
import FAQSection from "./FAQSection";
import CTABlock from "./CTABlock";
import { LocationData } from "@/data/locations";
import { services } from "@/data/services";
import { useJsonLd, localBusinessSchema, faqSchema } from "@/lib/structured-data";
import { useSEO, breadcrumbSchema } from "@/lib/seo";

import heroLandscape from "@/assets/photos/difference-landscape.jpg";

interface LocationPageTemplateProps {
  location: LocationData;
}

const coreServiceLinks = [
  { label: "AI Integration", href: "/ai-integration", icon: Brain },
  { label: "Managed IT Services", href: "/managed-it-services", icon: Monitor },
  { label: "Cybersecurity", href: "/cybersecurity", icon: Shield },
  { label: "Digital Marketing", href: "/digital-marketing", icon: Megaphone },
];

const LocationPageTemplate = ({ location }: LocationPageTemplateProps) => {
  useSEO({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/${location.slug}`,
  });

  useJsonLd({
    "@graph": [
      localBusinessSchema(location.city, location.region, location.intro, location.slug),
      faqSchema(location.faqs),
      breadcrumbSchema([
        { name: "Home", url: "https://ltol.com" },
        { name: "Locations", url: "https://ltol.com/locations" },
        { name: `${location.city}, ${location.region}`, url: `https://ltol.com/${location.slug}` },
      ]),
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
          { label: "Locations", href: "/locations" },
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

      {/* Internal Links — Core Services */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Explore Our Core Services</h2>
          <div className="gradient-line w-16 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreServiceLinks.map((svc) => (
              <Link key={svc.href} to={svc.href} className="glass-card-hover p-6 text-center group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <svc.icon className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-foreground font-semibold group-hover:text-secondary transition-colors">{svc.label}</span>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <Link to="/blog" className="glass-card-hover px-5 py-3 flex items-center gap-2 group">
              <BookOpen className="w-4 h-4 text-secondary" />
              <span className="text-foreground font-medium group-hover:text-secondary transition-colors">Read Our Blog</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
            </Link>
            <Link to="/resources/technology-stack-guide" className="glass-card-hover px-5 py-3 flex items-center gap-2 group">
              <FileText className="w-4 h-4 text-secondary" />
              <span className="text-foreground font-medium group-hover:text-secondary transition-colors">Free Technology Guide</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
            </Link>
            <Link to="/assessments/ai-readiness" className="glass-card-hover px-5 py-3 flex items-center gap-2 group">
              <Brain className="w-4 h-4 text-secondary" />
              <span className="text-foreground font-medium group-hover:text-secondary transition-colors">AI Readiness Assessment</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
            </Link>
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

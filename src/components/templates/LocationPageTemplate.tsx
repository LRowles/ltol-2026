
import { MapPin, CheckCircle2, ArrowRight, BookOpen, FileText, Brain, Shield, Monitor, Megaphone, BarChart3, Quote, AlertTriangle, Building2, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHeader from "./PageHeader";
import FAQSection from "./FAQSection";
import CTABlock from "./CTABlock";
import { LocationData } from "@/data/locations";
import { services } from "@/data/services";
import { getLocalSignals } from "@/data/local-signals";
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
  const signals = getLocalSignals(location.slug);

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
        { name: "Home", url: "https://www.ltol.com" },
        { name: "Locations", url: "https://www.ltol.com/locations" },
        { name: `${location.city}, ${location.region}`, url: `https://www.ltol.com/${location.slug}` },
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

      {/* Local Stats */}
      {signals?.localStats && signals.localStats.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{location.city} by the Numbers</h2>
            </div>
            <div className="gradient-line w-16 mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {signals.localStats.map((stat, i) => (
                <div key={i} className="glass-card p-6 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                  <div className="text-foreground font-medium mb-1">{stat.label}</div>
                  {stat.source && (
                    <div className="text-xs text-muted-foreground">Source: {stat.source}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Local Context + Unique Content */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Local Expertise in {location.city}</h2>
            </div>
            <div className="gradient-line w-12 mb-6" />
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">{location.localContext}</p>
            {signals?.uniqueContent && (
              <p className="text-muted-foreground leading-relaxed text-lg">{signals.uniqueContent}</p>
            )}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {signals?.testimonial && (
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-8 sm:p-10 relative">
              <Quote className="w-12 h-12 text-secondary/20 absolute top-6 left-6" />
              <div className="relative z-10">
                <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed italic mb-6 pl-8">
                  "{signals.testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4 pl-8">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-secondary font-bold text-lg">{signals.testimonial.name[0]}</span>
                  </div>
                  <div>
                    <div className="text-foreground font-semibold">{signals.testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{signals.testimonial.role}, {signals.testimonial.business}</div>
                    <div className="text-muted-foreground text-xs">{signals.testimonial.city}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Local Technology Challenges */}
      {signals?.localChallenges && signals.localChallenges.length > 0 && (
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Technology Challenges in {location.city}</h2>
            </div>
            <div className="gradient-line w-16 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {signals.localChallenges.map((challenge, i) => (
                <div key={i} className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{challenge.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industry Focus */}
      {signals?.industryFocus && signals.industryFocus.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-secondary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Industries We Serve in {location.city}</h2>
            </div>
            <div className="gradient-line w-16 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {signals.industryFocus.map((industry, i) => (
                <Link key={i} to={`/${industry.slug}`} className="glass-card-hover p-6 group">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors">{industry.name}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4">{industry.context}</p>
                  <div className="flex items-center gap-2 text-secondary text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {/* Nearby Locations */}
      {signals?.nearbyLocations && signals.nearbyLocations.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Navigation className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Also Serving Nearby Areas</h2>
            </div>
            <div className="gradient-line w-16 mb-8" />
            <div className="flex flex-wrap gap-4">
              {signals.nearbyLocations.map((nearby, i) => (
                <Link
                  key={i}
                  to={`/${nearby.slug}`}
                  className="glass-card-hover px-5 py-3 flex items-center gap-2 group"
                >
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="text-foreground font-medium group-hover:text-secondary transition-colors">{nearby.city}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal Links — Core Services */}
      <section className="py-16 sm:py-20 bg-muted/30">
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
        buttonText="Contact Us"
      />
      <Footer />
    </div>
  );
};

export default LocationPageTemplate;

import { useEffect } from "react";
import { AlertTriangle, CheckCircle2, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHeader from "./PageHeader";
import FAQSection from "./FAQSection";
import CTABlock from "./CTABlock";
import { IndustryData } from "@/data/industries";
import { services } from "@/data/services";
import { useJsonLd, professionalServiceSchema, faqSchema } from "@/lib/structured-data";

import industryRetail from "@/assets/photos/industry-retail.jpg";
import industryHealthcare from "@/assets/photos/industry-healthcare.jpg";
import industryHospitality from "@/assets/photos/industry-hospitality.jpg";
import industryConstruction from "@/assets/photos/industry-construction.jpg";
import industryRealestate from "@/assets/photos/industry-realestate.jpg";
import industryLegal from "@/assets/photos/industry-legal.jpg";

const industryImageMap: Record<string, string> = {
  "small-business": industryRetail,
  healthcare: industryHealthcare,
  hospitality: industryHospitality,
  construction: industryConstruction,
  "real-estate": industryRealestate,
  legal: industryLegal,
};

interface IndustryPageTemplateProps {
  industry: IndustryData;
}

const IndustryPageTemplate = ({ industry }: IndustryPageTemplateProps) => {
  useEffect(() => {
    document.title = industry.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", industry.metaDescription);
    window.scrollTo(0, 0);
  }, [industry]);

  useJsonLd({
    "@graph": [
      professionalServiceSchema(industry.industry, industry.intro, industry.slug, industry.services),
      faqSchema(industry.faqs),
    ],
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        headline={industry.headline}
        intro={industry.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries" },
          { label: industry.industry },
        ]}
        badge={industry.industry}
        backgroundImage={industryImageMap[industry.slug]}
      />

      {/* Challenges */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="w-6 h-6 text-destructive" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Industry Challenges</h2>
          </div>
          <div className="gradient-line w-16 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industry.challenges.map((c, i) => (
              <div key={i} className="glass-card p-5">
                <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center mb-3">
                  <span className="text-sm font-bold text-destructive">{i + 1}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Lightbulb className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">How LTOL Solves These Challenges</h2>
          </div>
          <div className="gradient-line w-16 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.solutions.map((s, i) => (
              <div key={i} className="flex items-start gap-4 glass-card p-5">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-secondary" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Relevant Services for {industry.industry}</h2>
          <div className="gradient-line w-16 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industry.services.map((serviceName, i) => {
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

      <FAQSection faqs={industry.faqs} />
      <CTABlock
        headline={`Technology Strategy for ${industry.industry}`}
        buttonText="Book a Strategy Session"
      />
      <Footer />
    </div>
  );
};

export default IndustryPageTemplate;

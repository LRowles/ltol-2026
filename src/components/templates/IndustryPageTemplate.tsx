import { useEffect } from "react";
import { AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHeader from "./PageHeader";
import FAQSection from "./FAQSection";
import CTABlock from "./CTABlock";
import { IndustryData } from "@/data/industries";
import { services } from "@/data/services";

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
      />

      {/* Challenges */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-destructive" />
            <h2 className="text-2xl font-bold text-foreground">Industry Challenges</h2>
          </div>
          <ul className="space-y-3">
            {industry.challenges.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">How LTOL Solves These Challenges</h2>
          </div>
          <ul className="space-y-3">
            {industry.solutions.map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Relevant Services for {industry.industry}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industry.services.map((serviceName, i) => {
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

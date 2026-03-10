import { useEffect } from "react";
import { AlertTriangle, CheckCircle2, Shield, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHeader from "./PageHeader";
import FAQSection from "./FAQSection";
import CTABlock from "./CTABlock";
import InternalLinks from "./InternalLinks";
import { ServiceData } from "@/data/services";
import { blogPosts } from "@/data/blog-posts";
import { resources } from "@/data/resources";
import { assessments } from "@/data/assessments";
import { useJsonLd, serviceSchema, faqSchema } from "@/lib/structured-data";

import serviceAi from "@/assets/photos/service-ai.jpg";
import serviceIt from "@/assets/photos/service-it.jpg";
import serviceMarketing from "@/assets/photos/service-marketing.jpg";
import heroMountain from "@/assets/photos/hero-mountain-town.jpg";

const serviceImageMap: Record<string, string> = {
  "ai-integration": serviceAi,
  "managed-it": serviceIt,
  "digital-marketing": serviceMarketing,
};

interface ServicePageTemplateProps {
  service: ServiceData;
}

const ServicePageTemplate = ({ service }: ServicePageTemplateProps) => {
  useEffect(() => {
    document.title = service.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", service.metaDescription);
    window.scrollTo(0, 0);
  }, [service]);

  useJsonLd({
    "@graph": [
      serviceSchema(service.title, service.intro, service.slug),
      faqSchema(service.faqs),
    ],
  });

  const relatedBlog = blogPosts.find((b) => b.slug === service.relatedBlog);
  const relatedResource = resources.find((r) => r.slug === service.relatedResource);
  const relatedAssessment = assessments.find((a) => a.slug === service.relatedAssessment);

  const bgImage = serviceImageMap[service.slug] || heroMountain;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        headline={service.headline}
        intro={service.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: service.title },
        ]}
        badge={service.title}
        backgroundImage={bgImage}
      />

      {/* Problems */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="w-6 h-6 text-destructive" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Common Challenges</h2>
          </div>
          <div className="gradient-line w-16 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.problems.map((p, i) => (
              <div key={i} className="glass-card p-5">
                <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center mb-3">
                  <span className="text-sm font-bold text-destructive">{i + 1}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">How LTOL Helps</h2>
          <div className="gradient-line w-16 mb-8" />
          <p className="text-muted-foreground mb-10 leading-relaxed max-w-3xl">{service.howWeHelp}</p>
          
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-semibold text-foreground">What's Included</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.deliverables.map((d, i) => (
              <div key={i} className="flex items-start gap-4 glass-card p-5">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-secondary">{i + 1}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why LTOL */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Why LTOL</h2>
          </div>
          <div className="gradient-line w-16 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.whyLtol.map((w, i) => (
              <div key={i} className="gradient-border-card">
                <div className="p-5">
                  <p className="text-foreground font-medium text-sm">{w}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Fit */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Ideal Fit</h2>
          </div>
          <div className="gradient-line w-16 mb-8" />
          <div className="flex flex-wrap gap-3">
            {service.idealFit.map((f, i) => (
              <div key={i} className="glass-card px-5 py-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={service.faqs} />
      <CTABlock buttonText="Book a Technology Strategy Session" />
      <InternalLinks
        relatedBlog={relatedBlog ? { slug: relatedBlog.slug, title: relatedBlog.title } : undefined}
        relatedResource={relatedResource ? { slug: relatedResource.slug, title: relatedResource.title } : undefined}
        relatedAssessment={relatedAssessment ? { slug: relatedAssessment.slug, title: relatedAssessment.title } : undefined}
      />
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;

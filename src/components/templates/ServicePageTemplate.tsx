import { useEffect } from "react";
import { AlertTriangle, CheckCircle2, Shield, Users } from "lucide-react";
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

  const relatedBlog = blogPosts.find((b) => b.slug === service.relatedBlog);
  const relatedResource = resources.find((r) => r.slug === service.relatedResource);
  const relatedAssessment = assessments.find((a) => a.slug === service.relatedAssessment);

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
      />

      {/* Problems */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-destructive" />
            <h2 className="text-2xl font-bold text-foreground">Common Challenges</h2>
          </div>
          <ul className="space-y-3">
            {service.problems.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">How LTOL Helps</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">{service.howWeHelp}</p>
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">What's Included</h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.deliverables.map((d, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why LTOL */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Why LTOL</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.whyLtol.map((w, i) => (
              <div key={i} className="p-4 bg-card rounded-lg border border-border">
                <p className="text-foreground font-medium">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Fit */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Ideal Fit</h2>
          </div>
          <ul className="space-y-3">
            {service.idealFit.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
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

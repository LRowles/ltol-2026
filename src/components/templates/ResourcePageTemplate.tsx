import { useEffect, useState } from "react";
import { CheckCircle2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHeader from "./PageHeader";
import InternalLinks from "./InternalLinks";
import { ResourceData } from "@/data/resources";
import { services } from "@/data/services";
import { assessments } from "@/data/assessments";
import { useJsonLd } from "@/lib/structured-data";

interface ResourcePageTemplateProps {
  resource: ResourceData;
}

const ResourcePageTemplate = ({ resource }: ResourcePageTemplateProps) => {
  const [form, setForm] = useState({ name: "", email: "", business: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = resource.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", resource.metaDescription);
    window.scrollTo(0, 0);
  }, [resource]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.from("lead_downloads").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      business: form.business.trim() || null,
      resource_slug: resource.slug,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    setSubmitted(true);
    toast.success("Check your email for the download link!");
  };

  const relatedService = services.find((s) => s.slug === resource.relatedService);
  const relatedAssessment = assessments.find((a) => a.slug === resource.relatedAssessment);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        headline={resource.headline}
        intro={resource.subheadline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
          { label: resource.title },
        ]}
        badge="Free Resource"
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-8">{resource.description}</p>
              <h3 className="text-xl font-bold text-foreground mb-4">What's Included</h3>
              <ul className="space-y-3">
                {resource.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Card className="bg-card border-border h-fit">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">You're In!</h3>
                    <p className="text-muted-foreground">Check your email for the download link. We'll also send you helpful related content.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">{resource.ctaText}</h3>
                    <p className="text-sm text-muted-foreground mb-4">Enter your details to get instant access.</p>
                    <Input placeholder="Your Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-muted border-border" />
                    <Input placeholder="Email Address" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-muted border-border" />
                    <Input placeholder="Business Name (optional)" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} className="bg-muted border-border" />
                    <Button type="submit" disabled={submitting} className="w-full gradient-bg text-primary-foreground font-semibold py-6">
                      {submitting ? "Submitting..." : resource.ctaText}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <InternalLinks
        relatedService={relatedService ? { slug: relatedService.slug, title: relatedService.title } : undefined}
        relatedAssessment={relatedAssessment ? { slug: relatedAssessment.slug, title: relatedAssessment.title } : undefined}
      />
      <Footer />
    </div>
  );
};

export default ResourcePageTemplate;

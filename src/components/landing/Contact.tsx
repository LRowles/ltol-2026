import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { pushContactLead } from "@/lib/zoho-proxy";
import contactImg from "@/assets/photos/contact-support.jpg";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(530) 582-2080", href: "tel:+15305822080" },
  { icon: Mail, label: "Email", value: "support@ltol.com", href: "mailto:support@ltol.com" },
  { icon: MapPin, label: "Office", value: "10266 Truckee Airport Rd, Suite C, Truckee, CA 96161", href: "https://maps.google.com/?q=10266+Truckee+Airport+Road+Suite+C+Truckee+CA+96161" },
];

const serviceOptions = [
  { value: "IT Services", label: "IT & Network Solutions" },
  { value: "Digital Marketing Services", label: "Digital Marketing" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
    ltol_service: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceToggle = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      ltol_service: prev.ltol_service.includes(value)
        ? prev.ltol_service.filter((s) => s !== value)
        : [...prev.ltol_service, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Write to Supabase and Zoho CRM in parallel
    const [supabaseResult] = await Promise.allSettled([
      supabase.from("contact_submissions").insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        business: formData.business.trim() || null,
        phone: formData.phone.trim() || null,
        message: formData.message.trim(),
        source_page: window.location.pathname,
      }),
      pushContactLead({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        business: formData.business.trim() || undefined,
        message: formData.message.trim(),
        source_page: window.location.pathname,
        ltol_service: formData.ltol_service.length > 0 ? formData.ltol_service : undefined,
      }),
    ]);

    setIsSubmitting(false);

    // Only fail if Supabase write failed (Zoho is non-blocking)
    if (supabaseResult.status === "rejected" || (supabaseResult.status === "fulfilled" && supabaseResult.value.error)) {
      toast.error("Something went wrong. Please try again.");
      return;
    }

    setIsSubmitted(true);
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", business: "", message: "", ltol_service: [] });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Ready to <span className="gradient-text">Get Started</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule a consultation and discover how LTOL can protect and grow your business technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                      <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="John Smith" className="bg-muted border-border text-foreground placeholder:text-muted-foreground" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="bg-muted border-border text-foreground placeholder:text-muted-foreground" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">Business Name</label>
                      <Input id="business" name="business" type="text" value={formData.business} onChange={handleChange} placeholder="Your Company LLC" className="bg-muted border-border text-foreground placeholder:text-muted-foreground" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone (optional)</label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(530) 582-2080" className="bg-muted border-border text-foreground placeholder:text-muted-foreground" />
                    </div>
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">What are you interested in?</label>
                    <div className="flex flex-wrap gap-3">
                      {serviceOptions.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => handleServiceToggle(opt.value)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                            formData.ltol_service.includes(opt.value)
                              ? "border-secondary bg-secondary/10 text-secondary"
                              : "border-border bg-muted/50 text-muted-foreground hover:border-secondary/50"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">How Can We Help?</label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your business and technology needs..." rows={4} className="bg-muted border-border text-foreground placeholder:text-muted-foreground resize-none" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6">
                    {isSubmitting ? "Sending..." : (<>Schedule a Consultation <Send className="ml-2 w-5 h-5" /></>)}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center">
            {/* Contact photo */}
            <div className="relative overflow-hidden rounded-2xl mb-8 h-48">
              <img
                src={contactImg}
                alt="Friendly business handshake"
                className="brand-photo"
                loading="lazy"
              />
              <div className="brand-photo-overlay" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-6">Let's Talk</h3>
            <p className="text-muted-foreground mb-8">Have questions? We're here to help. Real people, real answers — that's the LTOL way.</p>
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    {info.href ? (
                      <a href={info.href} className="text-foreground font-medium hover:text-primary transition-colors">{info.value}</a>
                    ) : (
                      <span className="text-foreground font-medium">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-2xl bg-muted/50 border border-border">
              <h4 className="font-semibold text-foreground mb-2">The LTOL Promise</h4>
              <p className="text-sm text-muted-foreground">We respond to all inquiries within 24 hours. For urgent IT issues, call us directly — a real person will answer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

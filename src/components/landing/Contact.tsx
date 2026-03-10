import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import contactImg from "@/assets/photos/contact-support.jpg";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(775) 555-LTOL", href: "tel:+17755555865" },
  { icon: Mail, label: "Email", value: "hello@ltol.com", href: "mailto:hello@ltol.com" },
  { icon: MapPin, label: "Location", value: "Lake Tahoe • Reno • Western US", href: null },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", business: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase.from("contact_submissions").insert({
      name: formData.name.trim(),
      email: formData.email.trim(),
      business: formData.business.trim() || null,
      message: formData.message.trim(),
      source_page: window.location.pathname,
    });

    setIsSubmitting(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    setIsSubmitted(true);
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setTimeout(() => {
      setFormData({ name: "", email: "", business: "", message: "" });
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
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">Business Name</label>
                    <Input id="business" name="business" type="text" value={formData.business} onChange={handleChange} placeholder="Your Company LLC" className="bg-muted border-border text-foreground placeholder:text-muted-foreground" />
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
              <h4 className="font-semibold text-foreground mb-2">🛡️ The Guardian Promise</h4>
              <p className="text-sm text-muted-foreground">We respond to all inquiries within 24 hours. For urgent IT issues, call us directly — a real person will answer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

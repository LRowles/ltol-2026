import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Palette, Share2, Wifi, Monitor, Cloud, Bot } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description: "Custom business websites built for performance, SEO, and conversions.",
    features: ["Performance-optimized", "Mobile responsive", "SEO-ready", "Conversion-focused"],
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description: "Complete brand identity systems that make your business memorable.",
    features: ["Logo design", "Brand guidelines", "Identity systems", "Marketing collateral"],
  },
  {
    icon: Share2,
    title: "Social Media & Content",
    description: "Strategic content planning and social media management that builds trust.",
    features: ["Content planning", "Social management", "Brand messaging", "Audience growth"],
  },
  {
    icon: Wifi,
    title: "WiFi & Network Installation",
    description: "Secure, reliable office networks designed and installed onsite.",
    features: ["Office network setup", "Secure connectivity", "Hardware config", "Onsite installation"],
  },
  {
    icon: Monitor,
    title: "Managed IT Services",
    description: "Ongoing IT support, cybersecurity, backups, and device monitoring.",
    features: ["IT support", "Cybersecurity", "Backup solutions", "Device monitoring"],
  },
  {
    icon: Cloud,
    title: "Email & Cloud Systems",
    description: "Google Workspace, Microsoft 365, cloud migrations, and collaboration tools.",
    features: ["Google Workspace", "Microsoft 365", "Cloud migrations", "Collaboration tools"],
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Practical AI tools and automation designed for small business workflows.",
    features: ["Workflow automation", "AI assistants", "Marketing automation", "Staff training"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Complete Digital <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From network infrastructure to web design to AI — one trusted partner 
            for every layer of your business technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-card border-border card-hover ${index === 6 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

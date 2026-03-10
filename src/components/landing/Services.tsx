import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, BarChart3, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Bot,
    title: "AI Integration",
    description: "Implement AI systems that automate workflows, improve customer service, and drive smarter decisions.",
    features: ["Workflow Automation", "AI Agents", "Customer Service AI", "CRM Intelligence"],
    link: "/ai-integration",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing Systems",
    description: "Integrated marketing that generates leads, nurtures prospects, and grows revenue on autopilot.",
    features: ["Website Systems", "SEO", "Email Automation", "Lead Funnels"],
    link: "/digital-marketing",
  },
  {
    icon: Shield,
    title: "IT & Network Solutions",
    description: "Secure, reliable infrastructure that keeps your business running and your data protected.",
    features: ["Managed IT", "Cybersecurity", "Device Monitoring", "Network Infrastructure"],
    link: "/managed-it-services",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            The Three <span className="gradient-text">Pillars</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything your business needs — integrated, secure, and built for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="bg-card border-border card-hover flex flex-col">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <pillar.icon className="w-7 h-7 text-secondary" />
                </div>
                <CardTitle className="text-xl text-foreground">{pillar.title}</CardTitle>
                <p className="text-muted-foreground text-sm mt-2">{pillar.description}</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <ul className="space-y-2 mb-6">
                  {pillar.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full border-secondary/30 text-secondary hover:bg-secondary/10">
                  <Link to={pillar.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

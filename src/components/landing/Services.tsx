import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Search, Bot, Megaphone, BarChart3, Zap } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic campaigns that amplify your brand and drive conversions.",
    features: [
      "Social media management",
      "Content marketing",
      "PPC advertising",
      "Brand strategy",
    ],
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Dominate search results and attract organic traffic that converts.",
    features: [
      "Technical SEO audits",
      "Local SEO optimization",
      "Keyword research",
      "Link building",
    ],
  },
  {
    icon: Bot,
    title: "AI Integrations",
    description: "Leverage artificial intelligence to automate and scale your business.",
    features: [
      "AI chatbots for support",
      "Automated workflows",
      "AI-powered analytics",
      "Content generation",
    ],
  },
];

const additionalServices = [
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Data-driven strategies to accelerate your business growth",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Comprehensive reporting and actionable insights",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Streamline operations with intelligent automation",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored for small businesses ready to make a big impact.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border card-hover gradient-border glow-effect"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-muted/50 border border-border hover:bg-muted/80 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

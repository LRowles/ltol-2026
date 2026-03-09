import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for new businesses getting started",
    price: "Contact Us",
    popular: false,
    features: [
      "Basic SEO optimization",
      "Social media management (2 platforms)",
      "Monthly performance reports",
      "Email support",
      "1 consultation per month",
    ],
  },
  {
    name: "Growth",
    description: "Most popular for scaling businesses",
    price: "Contact Us",
    popular: true,
    features: [
      "Full SEO suite",
      "Multi-platform digital marketing",
      "AI chatbot integration",
      "Bi-weekly strategy calls",
      "Priority email & phone support",
      "Custom analytics dashboard",
      "Content creation (4 posts/month)",
    ],
  },
  {
    name: "Enterprise",
    description: "Custom solutions for established businesses",
    price: "Custom",
    popular: false,
    features: [
      "Everything in Growth, plus:",
      "Full AI integration suite",
      "Dedicated account manager",
      "24/7 priority support",
      "Unlimited strategy sessions",
      "Advanced automation workflows",
      "White-label reporting",
    ],
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 sm:py-32 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include a free consultation to discuss your specific needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-card border-border card-hover flex flex-col ${
                plan.popular ? "gradient-border glow-effect scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="gradient-bg px-4 py-1 rounded-full text-sm font-semibold text-primary-foreground flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={scrollToContact}
                  className={`w-full ${
                    plan.popular
                      ? "gradient-bg hover:opacity-90 text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-foreground border border-border"
                  }`}
                >
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

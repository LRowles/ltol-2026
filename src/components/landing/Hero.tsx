import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const stats = [
  { value: "100+", label: "Businesses Protected" },
  { value: "10+", label: "Years of Experience" },
  { value: "24/7", label: "Monitoring & Support" },
];

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Your Digital Infrastructure Partner</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground">
            Your Business Deserves a{" "}
            <span className="gradient-text">Digital Guardian</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Local IT, digital marketing, and AI integration designed to protect 
            and grow small businesses across Lake Tahoe, Reno, and the Western United States.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="gradient-bg hover:opacity-90 text-primary-foreground font-semibold text-lg px-8 py-6"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#services")}
              className="border-border hover:bg-muted text-foreground font-semibold text-lg px-8 py-6"
            >
              Explore Services
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

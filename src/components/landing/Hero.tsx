import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, BarChart3, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/photos/hero-mountain-town.jpg";

const pillars = [
  { icon: Bot, label: "AI Integration" },
  { icon: BarChart3, label: "Digital Marketing" },
  { icon: Shield, label: "IT & Network Infrastructure" },
];

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Western US mountain landscape"
          className="brand-photo absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-primary-foreground">
            Enterprise-Level Technology{" "}
            <span className="gradient-text">for Small Businesses</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="flex items-center gap-2 text-primary-foreground/80">
                <pillar.icon className="w-5 h-5 text-secondary" />
                <span className="text-lg sm:text-xl font-medium">{pillar.label}</span>
              </div>
            ))}
          </div>

          <p className="text-xl sm:text-2xl text-primary-foreground/80 max-w-3xl mx-auto mb-10">
            Built for small businesses across the Western United States.
            AI, marketing automation, cybersecurity, and managed IT — connected into one powerful system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              asChild
              className="gradient-bg hover:opacity-90 text-primary-foreground font-semibold text-lg px-8 py-6"
            >
              <Link to="/assessments/technology-stack">
                Start a Technology Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 py-6"
            >
              Book a Consultation
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { value: "100+", label: "Businesses Protected" },
              { value: "10+", label: "Years of Experience" },
              { value: "24/7", label: "Monitoring & Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

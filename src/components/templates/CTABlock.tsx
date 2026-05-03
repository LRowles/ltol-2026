import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CTABlockProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: "default" | "gradient";
}

const CTABlock = ({
  headline = "Ready to Get Started?",
  description = "Book a free strategy session with our team. We'll review your current systems, identify opportunities, and map a clear path forward.",
  buttonText = "Book a Strategy Session",
  buttonLink = "/#contact",
  variant = "gradient",
}: CTABlockProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (buttonLink.startsWith("/#")) {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(buttonLink.replace("/", ""));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate(buttonLink);
    }
  };

  if (variant === "gradient") {
    return (
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative gradient-bg rounded-2xl p-10 sm:p-14 text-center overflow-hidden">
            {/* Decorative dots */}
            <div className="absolute top-6 left-6 grid grid-cols-3 gap-2 opacity-20">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
              ))}
            </div>
            <div className="absolute bottom-6 right-6 grid grid-cols-3 gap-2 opacity-20">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
              ))}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4 relative z-10">{headline}</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto relative z-10">{description}</p>
            <Button
              size="lg"
              onClick={handleClick}
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 relative z-10"
            >
              {buttonText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{headline}</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">{description}</p>
        <Button
          size="lg"
          onClick={handleClick}
          className="gradient-bg hover:opacity-90 text-primary-foreground font-semibold text-lg px-8 py-6"
        >
          {buttonText}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default CTABlock;

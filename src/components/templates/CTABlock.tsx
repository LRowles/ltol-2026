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
  description = "Book a free Technology Strategy Session with our team. We'll review your current systems, identify opportunities, and map a clear path forward.",
  buttonText = "Book a Technology Strategy Session",
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
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-bg rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">{headline}</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">{description}</p>
            <Button
              size="lg"
              onClick={handleClick}
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6"
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
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

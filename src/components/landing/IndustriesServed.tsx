import { Link } from "react-router-dom";
import { HardHat, Scale, Stethoscope, Hotel, Home, ShoppingBag } from "lucide-react";

const industryCards = [
  { icon: HardHat, name: "Construction", slug: "construction" },
  { icon: Scale, name: "Professional Services", slug: "legal" },
  { icon: Stethoscope, name: "Medical", slug: "healthcare" },
  { icon: Hotel, name: "Hospitality", slug: "hospitality" },
  { icon: Home, name: "Real Estate", slug: "real-estate" },
  { icon: ShoppingBag, name: "Local Retail", slug: "small-business" },
];

const IndustriesServed = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Industries <span className="gradient-text">We Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored technology solutions for the industries that drive local economies.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {industryCards.map((ind, i) => (
            <Link
              key={i}
              to={`/solutions/${ind.slug}`}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border card-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-secondary/10 transition-colors">
                <ind.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <span className="text-sm font-semibold text-foreground">{ind.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;

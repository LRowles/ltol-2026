import { Link } from "react-router-dom";
import { HardHat, Scale, Stethoscope, Hotel, Home, ShoppingBag } from "lucide-react";
import industryConstruction from "@/assets/photos/industry-construction.jpg";
import industryLegal from "@/assets/photos/industry-legal.jpg";
import industryHealthcare from "@/assets/photos/industry-healthcare.jpg";
import industryHospitality from "@/assets/photos/industry-hospitality.jpg";
import industryRealestate from "@/assets/photos/industry-realestate.jpg";
import industryRetail from "@/assets/photos/industry-retail.jpg";

const industryCards = [
  { icon: HardHat, name: "Construction", slug: "construction", image: industryConstruction },
  { icon: Scale, name: "Professional Services", slug: "legal", image: industryLegal },
  { icon: Stethoscope, name: "Medical", slug: "healthcare", image: industryHealthcare },
  { icon: Hotel, name: "Hospitality", slug: "hospitality", image: industryHospitality },
  { icon: Home, name: "Real Estate", slug: "real-estate", image: industryRealestate },
  { icon: ShoppingBag, name: "Local Retail", slug: "small-business", image: industryRetail },
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
              className="relative flex flex-col items-center text-center rounded-2xl overflow-hidden card-hover group h-48"
            >
              {/* Background photo */}
              <img
                src={ind.image}
                alt={ind.name}
                className="brand-photo absolute inset-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/50 transition-colors" />
              <div className="brand-photo-overlay" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mb-3">
                  <ind.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="text-sm font-semibold text-primary-foreground">{ind.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;

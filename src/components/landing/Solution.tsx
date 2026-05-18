import { Bot, BarChart3, Shield, Globe, Mail, Database, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import solutionImg from "@/assets/photos/solution-workspace.jpg";

const capabilities = [
  { icon: Bot, label: "AI Tools", href: "/ai-integration" },
  { icon: BarChart3, label: "Marketing Automation", href: "/digital-marketing" },
  { icon: Shield, label: "Secure IT Infrastructure", href: "/managed-it-services" },
  { icon: Database, label: "CRM Systems", href: "/crm-automation" },
  { icon: Globe, label: "Lead Generation", href: "/email-marketing-automation" },
  { icon: Mail, label: "Cybersecurity", href: "/cybersecurity" },
];

const Solution = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={solutionImg} alt="" className="brand-photo" aria-hidden="true" />
        <div className="brand-photo-overlay" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <CheckCircle2 className="w-4 h-4 text-secondary" />
            <span className="text-sm text-secondary font-medium">The Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            LTOL Builds <span className="gradient-text">Connected Digital Systems</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            LTOL integrates the tools that matter most — so technology becomes an advantage, not a burden.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {capabilities.map((cap, i) => (
            <Link
              key={i}
              to={cap.href}
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-card border border-border card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-3">
                <cap.icon className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-sm font-medium text-foreground">{cap.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;

import { Bot, BarChart3, Shield, Globe, Mail, Database, CheckCircle2 } from "lucide-react";

const capabilities = [
  { icon: Bot, label: "AI Tools" },
  { icon: BarChart3, label: "Marketing Automation" },
  { icon: Shield, label: "Secure IT Infrastructure" },
  { icon: Database, label: "CRM Systems" },
  { icon: Globe, label: "Lead Generation" },
  { icon: Mail, label: "Cybersecurity" },
];

const Solution = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <CheckCircle2 className="w-4 h-4 text-secondary" />
            <span className="text-sm text-secondary font-medium">The Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            LTOL Builds <span className="gradient-text">Connected Digital Systems</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Lake Tahoe Online integrates the tools that matter most — so technology becomes an advantage, not a burden.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-card border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-3">
                <cap.icon className="w-6 h-6 text-secondary" />
              </div>
              <p className="text-sm font-medium text-foreground">{cap.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;

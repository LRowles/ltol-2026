import { CheckCircle2, Shield, Compass, Wrench, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trustworthy & Reliable",
    description: "We protect and strengthen what you've built — your systems, your data, your business.",
  },
  {
    icon: Compass,
    title: "Expert Guidance",
    description: "Sage-level knowledge delivered in plain language you can act on.",
  },
  {
    icon: Wrench,
    title: "Boutique Quality",
    description: "Craftsman attention to detail. Every solution is tailored, never one-size-fits-all.",
  },
  {
    icon: HeartHandshake,
    title: "Local & Human",
    description: "Based in Lake Tahoe, serving Reno, Northern Nevada, and the Western US with real, in-person support.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Businesses Trust <span className="gradient-text">LTOL</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              LTOL is a boutique technology consultancy built on the Guardian principle: 
              we protect and strengthen what others have built. Your business deserves reliable 
              systems and real support — not a faceless help desk.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Complete top-to-bottom digital infrastructure",
                "In-person support across the Western United States",
                "No outsourced technicians — ever",
                "Practical AI integration without the hype",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground">
              Your business deserves reliable systems and real support. 
              That's the LTOL promise — a true digital guardian for small businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

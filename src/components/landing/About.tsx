import { CheckCircle2, Users, Target, Headphones, Cpu } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Affordable Pricing",
    description: "Enterprise-level strategies at small business-friendly rates",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Your success is our priority with 24/7 personalized assistance",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every campaign is optimized for measurable ROI and growth",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Tech",
    description: "AI-powered tools that give you a competitive advantage",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">LRJ Digital Media</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're not just another marketing agency. We're your dedicated partners in growth, 
              combining years of expertise with cutting-edge AI technology to deliver results 
              that matter for your business.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Tailored strategies for your unique business goals",
                "Transparent reporting and communication",
                "Proven track record with 150+ satisfied clients",
                "Latest AI tools and marketing technologies",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground">
              Founded with a mission to level the playing field, we help small businesses 
              compete with industry giants through smart, efficient, and AI-enhanced marketing 
              solutions.
            </p>
          </div>

          {/* Right Content - Features Grid */}
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

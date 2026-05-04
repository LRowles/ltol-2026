import { Unplug, ShieldAlert, TrendingDown, UserX, BrainCircuit, HelpCircle } from "lucide-react";

const challenges = [
  { icon: Unplug, text: "Disconnected tools that don't talk to each other" },
  { icon: ShieldAlert, text: "Cybersecurity gaps with no protection plan" },
  { icon: TrendingDown, text: "Inconsistent marketing with no measurable results" },
  { icon: UserX, text: "Lost leads from poor follow-up systems" },
  { icon: BrainCircuit, text: "No AI adoption strategy while competitors move ahead" },
];

const Problem = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Sound Familiar?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Technology Shouldn't Be a Barrier{" "}
            <span className="gradient-text">to Your Business Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            When your tools, security, and marketing don't work together, it costs you time, money, and opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {challenges.map((challenge, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <challenge.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground leading-relaxed">{challenge.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;

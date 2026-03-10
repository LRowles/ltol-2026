import { AlertTriangle, Unplug, ShieldAlert, TrendingDown, UserX, BrainCircuit } from "lucide-react";

const problems = [
  { icon: Unplug, text: "Disconnected tools that don't talk to each other" },
  { icon: ShieldAlert, text: "Cybersecurity risk with no protection plan" },
  { icon: TrendingDown, text: "Inconsistent marketing with no measurable results" },
  { icon: UserX, text: "Lost leads from poor follow-up systems" },
  { icon: BrainCircuit, text: "No AI adoption strategy while competitors move ahead" },
];

const Problem = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm text-destructive font-medium">The Problem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Most Small Businesses Operate With <span className="gradient-text">Broken Systems</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Patchwork technology creates gaps that cost you time, money, and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <p className="text-sm font-medium text-foreground leading-relaxed">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;

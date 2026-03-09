import { Bot, Workflow, MessageSquare, BarChart3, GraduationCap } from "lucide-react";

const aiServices = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive tasks so your team can focus on what matters most.",
  },
  {
    icon: MessageSquare,
    title: "Customer Service AI",
    description: "AI assistants that handle inquiries, bookings, and support around the clock.",
  },
  {
    icon: BarChart3,
    title: "Marketing Automation",
    description: "Smarter campaigns, personalized outreach, and data-driven results.",
  },
  {
    icon: Bot,
    title: "Productivity Tools",
    description: "AI-powered tools that streamline operations and save hours every week.",
  },
  {
    icon: GraduationCap,
    title: "Staff Training",
    description: "Practical training so your team understands and adopts AI with confidence.",
  },
];

const AIIntegration = () => {
  return (
    <section id="ai-integration" className="section-padding bg-muted/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Bot className="w-4 h-4 text-secondary" />
              <span className="text-sm text-secondary font-medium">AI Made Practical</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              AI Integration for <span className="gradient-text">Small Businesses</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              AI doesn't have to be complicated. We help small businesses across Lake Tahoe, 
              Reno, and the Western US adopt practical AI tools that save time, cut costs, 
              and improve customer experiences.
            </p>
            <p className="text-muted-foreground">
              Technology should work for your business, not against it. We guide you 
              through every step — from choosing the right tools to training your team.
            </p>
          </div>

          <div className="space-y-4">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIIntegration;

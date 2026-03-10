import { MapPin, Users, Phone, Layers } from "lucide-react";

const differentiators = [
  {
    icon: MapPin,
    title: "Local Team",
    description: "We're based in the Lake Tahoe region. We show up at your business, not from a call center halfway around the world.",
  },
  {
    icon: Phone,
    title: "Human Support",
    description: "Call us and a real person answers. No ticket queues, no chatbot runaround, no waiting days for a callback.",
  },
  {
    icon: Users,
    title: "No Outsourcing",
    description: "Our team handles everything in-house. You work with people who know your systems, your goals, and your business.",
  },
  {
    icon: Layers,
    title: "Enterprise-Grade Systems",
    description: "The same technology platforms used by large companies — configured and managed at small business scale and pricing.",
  },
];

const Difference = () => {
  return (
    <section id="difference" className="section-padding gradient-bg text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why LTOL
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            LTOL is not just a vendor. We are a long-term technology partner for small businesses that need secure systems, smarter operations, and a connected path to growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 transition-all duration-300 hover:bg-primary-foreground/15"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-primary-foreground/75 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Difference;

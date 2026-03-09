import { Phone, MapPin, Users, Layers } from "lucide-react";

const differentiators = [
  {
    icon: Phone,
    title: "We Answer the Phone",
    description: "Call us and a real person picks up. No phone trees, no ticket queues, no waiting days for a callback.",
  },
  {
    icon: MapPin,
    title: "We Visit Your Business",
    description: "We come to you. Onsite support, installations, and consultations — because your business deserves a partner who shows up.",
  },
  {
    icon: Users,
    title: "We Never Outsource Support",
    description: "Our team handles everything in-house. You'll work with people who know your systems and your business.",
  },
  {
    icon: Layers,
    title: "Complete Digital Solutions",
    description: "From network infrastructure to web design to AI — one partner for your entire digital ecosystem. No juggling vendors.",
  },
];

const Difference = () => {
  return (
    <section id="difference" className="section-padding bg-primary text-primary-foreground relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            The LTOL Difference
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            In a world of outsourced help desks and automated responses, LTOL stands apart. 
            We're a boutique consultancy that believes technology should come with a human touch.
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

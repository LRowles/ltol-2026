import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Karen Mitchell",
    role: "Owner, Summit Dental — Reno, NV",
    content:
      "LTOL set up our entire office network, migrated us to Google Workspace, and built a new website — all without a single day of downtime. They actually answer the phone when we call. That alone is worth it.",
    rating: 5,
  },
  {
    name: "James Ortega",
    role: "Founder, Sierra Property Group — Lake Tahoe",
    content:
      "We went through three IT companies before finding LTOL. The difference is night and day. They visit our offices, they know our systems, and they don't send us to some overseas help desk.",
    rating: 5,
  },
  {
    name: "Lisa Tran",
    role: "Director, Bloom Bakery — Carson City, NV",
    content:
      "The AI chatbot LTOL set up handles 80% of our online orders and customer questions. It was simple to implement and my staff actually understands how it works. Practical, not gimmicky.",
    rating: 5,
  },
  {
    name: "David Reyes",
    role: "CEO, Western Trail Outfitters — Northern Nevada",
    content:
      "Having one partner for IT, web, and marketing just makes sense. LTOL handles everything so I can focus on running my business. They're the digital partner every small business needs.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-muted/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Small business owners across the Western US trust LTOL to protect and grow their digital infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border card-hover relative overflow-hidden"
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

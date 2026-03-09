import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Owner, Bloom Boutique",
    content:
      "LRJ Digital Media transformed our online presence. Our website traffic increased by 250% and our sales have never been better. The AI chatbot they implemented handles customer inquiries 24/7!",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "CEO, TechStart Solutions",
    content:
      "The SEO work they did was phenomenal. We went from page 5 to the top 3 results for our main keywords in just 4 months. Their AI-powered analytics gave us insights we never had before.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Green Living Co.",
    content:
      "As a small business owner, I was skeptical about AI marketing tools. LRJ made everything simple and showed me exactly how it was helping my business grow. Best investment I've made!",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Director, Urban Fitness Studio",
    content:
      "Their digital marketing strategy brought us 50 new members in the first month. The team is responsive, creative, and truly understands small business needs. Highly recommend!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what business owners like you have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border card-hover relative overflow-hidden"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-lg">
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

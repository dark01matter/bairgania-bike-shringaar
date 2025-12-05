import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Rahul Kumar",
    location: "Bairgania",
    rating: 5,
    text: "Best bike accessories shop in Bairgania! Anmol bhai की service बहुत अच्छी है। My Pulsar looks amazing now.",
  },
  {
    name: "Amit Singh",
    location: "Sitamarhi",
    rating: 5,
    text: "Full servicing karwaya, bike ekdum smooth chal rahi hai. Price bhi reasonable hai. Highly recommended!",
  },
  {
    name: "Vijay Yadav",
    location: "Bairgania",
    rating: 5,
    text: "Custom modification karwaya apni Apache mein. Everyone asks where I got it done. Premium quality work!",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <p className="text-primary font-medium tracking-[0.2em] text-sm mb-4">
            TESTIMONIALS
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Customer <span className="text-gradient-gold">Reviews</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-foreground/60 max-w-2xl mx-auto">
            हमारे customers का feedback — उनकी खुशी ही हमारी सफलता है
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={cn(
                "relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover-lift",
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

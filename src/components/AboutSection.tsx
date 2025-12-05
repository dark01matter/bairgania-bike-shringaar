import { Award, Users, Wrench, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const stats = [
  { icon: Users, value: "5000+", label: "Happy Customers" },
  { icon: Wrench, value: "10+", label: "Years Experience" },
  { icon: Award, value: "100%", label: "Quality Assured" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10")}>
            <p className="text-primary font-medium tracking-[0.2em] text-sm mb-4">
              ABOUT US
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner for{" "}
              <span className="text-gradient-gold">Bike Care</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-gold rounded-full mb-8" />

            <p className="text-foreground/70 text-lg leading-relaxed mb-6">
              <span className="text-primary font-semibold">Bike Shringaar Bairgania</span> — 
              हम Bairgania और आसपास के क्षेत्रों में bike lovers को premium quality accessories, 
              expert servicing, और creative modifications provide करते हैं।
            </p>

            <p className="text-foreground/60 leading-relaxed mb-8">
              Owner <span className="text-primary">Anmol Singh</span> की देखरेख में, 
              हम हर bike को एक unique identity देने का काम करते हैं। चाहे आपको simple 
              accessories चाहिए या complete bike makeover — हम आपके साथ हैं।
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
            >
              <span>Get in Touch</span>
              <span>→</span>
            </a>
          </div>

          {/* Right - Stats */}
          <div className={cn("grid grid-cols-2 gap-6", "transition-all duration-700 delay-200", isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10")}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={cn(
                  "p-8 rounded-2xl border-gradient-gold bg-card/50 backdrop-blur-sm hover-lift hover-glow",
                  "transition-all duration-500",
                  isVisible && `delay-${(index + 2) * 100}`
                )}
              >
                <stat.icon className="w-10 h-10 text-primary mb-4" />
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-foreground/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

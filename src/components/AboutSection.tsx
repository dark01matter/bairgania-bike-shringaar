import { Award, Users, Wrench, Clock, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const stats = [
  { icon: Users, value: "5000+", label: "Happy Customers", color: "text-primary" },
  { icon: Wrench, value: "10+", label: "Years Experience", color: "text-accent" },
  { icon: Award, value: "100%", label: "Quality Assured", color: "text-purple" },
  { icon: Clock, value: "24/7", label: "Support Available", color: "text-cyan" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-28 lg:py-36 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 orb orb-gold opacity-30 animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 orb orb-cyan opacity-20 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left content */}
          <div className={cn("transition-all duration-1000", isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16")}>
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
              <p className="text-primary font-mono tracking-[0.2em] text-xs uppercase">
                About Us
              </p>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Trusted Partner for{" "}
              <span className="text-gradient-gold">Bike Care</span>
            </h2>
            
            <div className="section-divider !mx-0 !w-24 mb-10" />

            <p className="text-foreground/70 text-lg lg:text-xl leading-relaxed mb-6">
              <span className="text-gradient-gold font-semibold">Bike Shringaar Bairgania</span> — 
              हम Bairgania और आसपास के क्षेत्रों में bike lovers को premium quality accessories, 
              expert servicing, और creative modifications provide करते हैं।
            </p>

            <p className="text-foreground/60 leading-relaxed mb-10">
              Owner <span className="text-accent font-medium">Anmol Singh</span> की देखरेख में, 
              हम हर bike को एक unique identity देने का काम करते हैं। चाहे आपको simple 
              accessories चाहिए या complete bike makeover — हम आपके साथ हैं।
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-primary font-medium text-lg 
                         hover:gap-5 transition-all duration-500"
            >
              <Zap className="w-5 h-5" />
              <span>Get in Touch</span>
              <span className="text-xl">→</span>
            </a>
          </div>

          {/* Right - Stats Grid */}
          <div className={cn(
            "grid grid-cols-2 gap-5",
            "transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
          )}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={cn(
                  "group p-8 rounded-2xl border-gradient-gold hover-lift hover-glow cursor-default",
                  "transition-all duration-500 bg-card/30"
                )}
                style={{ transitionDelay: isVisible ? `${(index + 2) * 100}ms` : "0ms" }}
              >
                <stat.icon className={cn("w-10 h-10 mb-5 transition-transform group-hover:scale-110", stat.color)} />
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-foreground/60 text-sm font-mono uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

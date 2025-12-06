import { useEffect, useState } from "react";
import { ChevronDown, MapPin, Phone, Sparkles } from "lucide-react";
import heroBike from "@/assets/hero-bike.jpg";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <img
          src={heroBike}
          alt="Premium Motorcycle"
          className="w-full h-[120%] object-cover object-center"
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Animated accent lines */}
      <div className="absolute left-0 top-1/4 w-px h-40 bg-gradient-to-b from-transparent via-primary to-transparent opacity-40" />
      <div className="absolute right-20 top-1/3 w-px h-32 bg-gradient-to-b from-transparent via-accent to-transparent opacity-30" />

      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="max-w-4xl">
          {/* Tagline with glow */}
          <div className="flex items-center gap-3 mb-6 animate-fade-up opacity-0 delay-100">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <p className="text-primary font-mono tracking-[0.3em] text-xs md:text-sm uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Premium Bike Accessories & Service
            </p>
          </div>

          {/* Main heading with gradient */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 animate-fade-up opacity-0 delay-200">
            <span className="text-foreground block">Bike</span>
            <span className="text-gradient-gold inline-block">Shringaar</span>
            <span className="text-foreground/80 block text-4xl md:text-5xl lg:text-6xl mt-2">
              Bairgania
            </span>
          </h1>

          {/* Subheading with elegant styling */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 mb-10 max-w-2xl leading-relaxed animate-fade-up opacity-0 delay-300">
            आपकी बाइक को दें{" "}
            <span className="text-gradient-cyber font-medium">शानदार लुक</span> —{" "}
            Premium accessories, expert service, और custom modifications
          </p>

          {/* CTA Buttons with premium effects */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-up opacity-0 delay-400">
            <a
              href="tel:+917319866462"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 
                         bg-gradient-gold text-primary-foreground font-semibold rounded-full 
                         hover:glow-gold-lg transition-all duration-500 hover:scale-105"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              <span>Call Now</span>
            </a>
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 
                         glass border-primary/30 text-foreground font-medium rounded-full 
                         hover:border-primary/60 hover:bg-primary/10 transition-all duration-300"
            >
              <span>Explore Products</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Quick Info with modern styling */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm animate-fade-up opacity-0 delay-500">
            <div className="flex items-center gap-3 glass px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-foreground/80">Bairgania, Bihar</span>
            </div>
            <div className="flex items-center gap-3 glass px-4 py-2 rounded-full">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-foreground/80">+91 73198 66462</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with animation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#about"
          className={cn(
            "flex flex-col items-center gap-2 text-foreground/40 hover:text-primary transition-all duration-500",
            scrollY > 100 && "opacity-0 pointer-events-none"
          )}
        >
          <span className="text-xs tracking-[0.3em] font-mono uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border border-current flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
          </div>
        </a>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;

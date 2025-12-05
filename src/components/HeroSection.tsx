import { useEffect, useState } from "react";
import { ChevronDown, MapPin, Phone } from "lucide-react";
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
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src={heroBike}
          alt="Premium Motorcycle"
          className="w-full h-[120%] object-cover object-center"
        />
        {/* Gradient overlays for cinematic effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          {/* Tagline */}
          <p className="text-primary font-medium tracking-[0.3em] text-sm mb-6 animate-fade-up opacity-0 delay-100">
            PREMIUM BIKE ACCESSORIES & SERVICE CENTER
          </p>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up opacity-0 delay-200">
            Bike{" "}
            <span className="text-gradient-gold">Shringaar</span>
            <br />
            Bairgania
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-xl animate-fade-up opacity-0 delay-300">
            आपकी बाइक को दें <span className="text-primary">शानदार लुक</span> — Premium accessories, 
            expert service, और custom modifications के लिए Bairgania का भरोसेमंद नाम।
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up opacity-0 delay-400">
            <a
              href="tel:+917319866462"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-full hover:shadow-gold-lg transition-all duration-500"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-primary/30 text-foreground font-medium rounded-full hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <span>Explore Products</span>
            </a>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-foreground/60 animate-fade-up opacity-0 delay-500">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Bairgania, Bihar</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 73198 66462</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-float">
        <a
          href="#about"
          className={cn(
            "flex flex-col items-center gap-2 text-foreground/50 hover:text-primary transition-colors",
            scrollY > 100 && "opacity-0"
          )}
        >
          <span className="text-xs tracking-wider">SCROLL</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

import { Wrench, Settings, Paintbrush, Cog, Zap, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import serviceMechanic from "@/assets/service-mechanic.jpg";

const services = [
  {
    icon: Wrench,
    title: "Full Service",
    titleHindi: "पूर्ण सर्विस",
    description: "Complete bike checkup, oil change, brake service",
  },
  {
    icon: Settings,
    title: "Engine Work",
    titleHindi: "इंजन वर्क",
    description: "Engine tuning, overhaul, performance upgrades",
  },
  {
    icon: Paintbrush,
    title: "Custom Paint",
    titleHindi: "कस्टम पेंट",
    description: "Designer graphics, wraps, color change",
  },
  {
    icon: Cog,
    title: "Modifications",
    titleHindi: "मॉडिफिकेशन",
    description: "Performance & aesthetic upgrades",
  },
  {
    icon: Zap,
    title: "Electrical",
    titleHindi: "इलेक्ट्रिकल",
    description: "Wiring, lights, indicators repair",
  },
  {
    icon: Shield,
    title: "Detailing",
    titleHindi: "डिटेलिंग",
    description: "Polish, ceramic coating, protection",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={serviceMechanic}
          alt="Service Center"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <p className="text-primary font-medium tracking-[0.2em] text-sm mb-4">
              OUR SERVICES
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Expert <span className="text-gradient-gold">Bike Care</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-gold rounded-full mb-8" />
            
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Bairgania का सबसे trusted service center — हर bike को मिलती है 
              <span className="text-primary"> professional care</span>। 
              चाहे regular service हो या major repair, हमारी experienced team 
              हर काम को perfection से करती है।
            </p>

            <a
              href="tel:+917319866462"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-full hover:shadow-gold-lg transition-all duration-500"
            >
              <span>Book Service</span>
              <span>→</span>
            </a>
          </div>

          {/* Right - Services grid */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={cn(
                  "p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover-lift hover-glow group",
                  "transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
              >
                <service.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-primary/80 text-xs mb-2">{service.titleHindi}</p>
                <p className="text-foreground/60 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

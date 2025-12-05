import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 73198 66462",
    link: "tel:+917319866462",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bairgania, Bihar",
    link: "https://maps.google.com/?q=Bairgania,Bihar",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "9:00 AM - 8:00 PM",
    link: null,
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@anmolsinghpushpak",
    link: "https://www.instagram.com/anmolsinghpushpak?igsh=ZWdtcjZ0eHVuYWNx",
  },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="contact" className="py-24 lg:py-32 bg-charcoal-light relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <p className="text-primary font-medium tracking-[0.2em] text-sm mb-4">
            CONTACT US
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-foreground/60 max-w-2xl mx-auto">
            आज ही संपर्क करें — हम आपकी bike को बनाएंगे और भी खास
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((info, index) => (
              <a
                key={info.title}
                href={info.link || "#"}
                target={info.link?.startsWith("http") ? "_blank" : undefined}
                rel={info.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                className={cn(
                  "p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover-lift hover-glow group",
                  "transition-all duration-500",
                  !info.link && "cursor-default",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
              >
                <info.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-foreground/60 text-sm mb-1">{info.title}</p>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {info.value}
                </p>
              </a>
            ))}
          </div>

          {/* Google Maps embed */}
          <div className={cn(
            "rounded-2xl overflow-hidden border border-border/50 h-80 lg:h-auto",
            "transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28612.19438098392!2d85.50876!3d26.4889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5d8b1e0f1f33%3A0x7c3a5c7f7a1c7a1c!2sBairgania%2C%20Bihar!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bike Shringaar Location"
            />
          </div>
        </div>

        {/* CTA */}
        <div className={cn(
          "text-center mt-16 transition-all duration-700 delay-500",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <p className="text-foreground/60 mb-6">
            Ready to give your bike a makeover? Call us now!
          </p>
          <a
            href="tel:+917319866462"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-gold text-primary-foreground font-semibold text-lg rounded-full hover:shadow-gold-lg transition-all duration-500"
          >
            <Phone className="w-5 h-5" />
            <span>+91 73198 66462</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

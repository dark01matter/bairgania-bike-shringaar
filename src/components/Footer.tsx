import { Instagram, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & name */}
          <div className="flex items-center gap-4">
            <Logo size="md" />
            <div>
              <p className="font-display text-xl font-semibold text-foreground">
                Bike Shringaar
              </p>
              <p className="text-sm text-muted-foreground">Bairgania</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="text-foreground/60 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground/60 hover:text-primary transition-colors">
              About
            </a>
            <a href="#products" className="text-foreground/60 hover:text-primary transition-colors">
              Products
            </a>
            <a href="#services" className="text-foreground/60 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Social & contact */}
          <div className="flex justify-end gap-4">
            <a
              href="https://www.instagram.com/anmolsinghpushpak?igsh=ZWdtcjZ0eHVuYWNx"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border/50 text-foreground/60 hover:text-primary hover:border-primary/50 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="tel:+917319866462"
              className="p-3 rounded-full bg-card border border-border/50 text-foreground/60 hover:text-primary hover:border-primary/50 transition-all"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://maps.google.com/?q=Bairgania,Bihar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border/50 text-foreground/60 hover:text-primary hover:border-primary/50 transition-all"
            >
              <MapPin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-foreground/40">
            © {new Date().getFullYear()} Bike Shringaar Bairgania. All rights reserved.
          </p>
          <p className="text-xs text-foreground/30 mt-2">
            Owner: Anmol Singh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

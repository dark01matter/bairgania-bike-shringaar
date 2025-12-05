import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import heroBike from "@/assets/hero-bike.jpg";
import accessoriesHero from "@/assets/accessories-hero.jpg";
import serviceMechanic from "@/assets/service-mechanic.jpg";
import customBike from "@/assets/custom-bike.jpg";
import helmet from "@/assets/helmet.jpg";
import exhaust from "@/assets/exhaust.jpg";

const galleryItems = [
  { image: heroBike, title: "Royal Enfield Classic", category: "Bikes" },
  { image: customBike, title: "Custom Modified", category: "Modifications" },
  { image: accessoriesHero, title: "Premium Setup", category: "Accessories" },
  { image: serviceMechanic, title: "Service Center", category: "Workshop" },
  { image: helmet, title: "Safety First", category: "Gear" },
  { image: exhaust, title: "Performance Parts", category: "Parts" },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-charcoal-light relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Section header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <p className="text-primary font-medium tracking-[0.2em] text-sm mb-4">
            GALLERY
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-gold">Work</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-foreground/60 max-w-2xl mx-auto">
            देखिए हमारे satisfied customers की bikes और modifications
          </p>
        </div>

        {/* Masonry-style gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "group relative overflow-hidden rounded-xl cursor-pointer",
                index === 0 && "md:col-span-2 md:row-span-2",
                "transition-all duration-700",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
              onClick={() => setSelectedImage(item.image)}
            >
              <div className={cn(
                "aspect-square overflow-hidden",
                index === 0 && "md:aspect-auto md:h-full"
              )}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-primary text-xs font-medium mb-1">{item.category}</p>
                  <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
              </div>

              {/* Border effect */}
              <div className="absolute inset-0 border-2 border-primary/0 rounded-xl transition-all duration-300 group-hover:border-primary/50" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-foreground/60 hover:text-foreground transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;

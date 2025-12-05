import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import helmetImg from "@/assets/helmet.jpg";
import glovesImg from "@/assets/gloves.jpg";
import exhaustImg from "@/assets/exhaust.jpg";
import headlightImg from "@/assets/headlight.jpg";
import mirrorImg from "@/assets/mirror.jpg";
import bagsImg from "@/assets/bags.jpg";

const products = [
  {
    name: "Premium Helmets",
    nameHindi: "हेलमेट",
    description: "ISI certified, stylish designs",
    image: helmetImg,
    price: "₹999+",
  },
  {
    name: "Riding Gloves",
    nameHindi: "राइडिंग ग्लव्स",
    description: "Leather & knuckle protection",
    image: glovesImg,
    price: "₹499+",
  },
  {
    name: "Exhaust Systems",
    nameHindi: "साइलेंसर",
    description: "Chrome & performance",
    image: exhaustImg,
    price: "₹1,999+",
  },
  {
    name: "LED Headlights",
    nameHindi: "एलईडी लाइट्स",
    description: "Bright & stylish",
    image: headlightImg,
    price: "₹799+",
  },
  {
    name: "Chrome Mirrors",
    nameHindi: "मिरर",
    description: "Premium finish mirrors",
    image: mirrorImg,
    price: "₹399+",
  },
  {
    name: "Saddle Bags",
    nameHindi: "सैडल बैग",
    description: "Genuine leather, touring ready",
    image: bagsImg,
    price: "₹2,499+",
  },
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="products" className="py-24 lg:py-32 bg-charcoal-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section header */}
        <div className={cn(
          "text-center mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <p className="text-primary font-medium tracking-[0.2em] text-sm mb-4">
            OUR PRODUCTS
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Premium <span className="text-gradient-gold">Accessories</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-foreground/60 max-w-2xl mx-auto">
            हर बाइक के लिए best quality accessories — style और safety दोनों
          </p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover-lift",
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Price badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 text-primary-foreground text-sm font-semibold rounded-full">
                  {product.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-primary/80 text-sm mb-2">{product.nameHindi}</p>
                <p className="text-foreground/60 text-sm">{product.description}</p>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-primary/0 rounded-2xl transition-all duration-300 group-hover:border-primary/50" />
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className={cn(
          "text-center mt-12 transition-all duration-700 delay-500",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary/30 text-primary font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <span>View All Products</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

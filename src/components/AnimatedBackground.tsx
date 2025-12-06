import { useEffect, useState } from "react";

interface Orb {
  id: number;
  x: number;
  y: number;
  size: number;
  color: "gold" | "cyan" | "purple";
  duration: number;
  delay: number;
}

const AnimatedBackground = () => {
  const [orbs, setOrbs] = useState<Orb[]>([]);

  useEffect(() => {
    const generatedOrbs: Orb[] = [
      { id: 1, x: 10, y: 20, size: 400, color: "gold", duration: 20, delay: 0 },
      { id: 2, x: 80, y: 60, size: 300, color: "cyan", duration: 25, delay: 5 },
      { id: 3, x: 50, y: 80, size: 350, color: "purple", duration: 22, delay: 10 },
      { id: 4, x: 20, y: 70, size: 250, color: "cyan", duration: 28, delay: 3 },
      { id: 5, x: 70, y: 20, size: 280, color: "gold", duration: 24, delay: 8 },
    ];
    setOrbs(generatedOrbs);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,200,50,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,200,50,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Animated orbs */}
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className={`orb orb-${orb.color} animate-pulse-glow`}
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.delay}s`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-radial opacity-80" />
    </div>
  );
};

export default AnimatedBackground;

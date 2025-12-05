import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizes = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
  };

  return (
    <div className={cn("relative", sizes[size], className)}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer gear ring */}
        <path
          d="M50 5L55 15L65 10L65 22L77 17L72 30L85 30L77 40L90 45L78 52L88 62L75 62L82 75L68 70L70 83L58 75L55 90L50 78L45 90L42 75L30 83L32 70L18 75L25 62L12 62L22 52L10 45L23 40L15 30L28 30L23 17L35 22L35 10L45 15L50 5Z"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          className="drop-shadow-lg"
        />
        
        {/* Inner circle */}
        <circle
          cx="50"
          cy="50"
          r="28"
          fill="hsl(0 0% 7%)"
          stroke="url(#goldGradient)"
          strokeWidth="2"
        />
        
        {/* BS Letters */}
        <text
          x="50"
          y="58"
          textAnchor="middle"
          fontFamily="'Playfair Display', serif"
          fontSize="28"
          fontWeight="700"
          fill="url(#goldGradient)"
        >
          BS
        </text>
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#F5D782" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;

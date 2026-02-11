import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const GlassCard = ({ children, className, hover = false, onClick }: GlassCardProps) => (
  <div
    onClick={onClick}
    className={cn(
      hover ? "glass-hover" : "glass",
      "rounded-2xl p-6 relative overflow-hidden",
      className
    )}
  >
    {/* Subtle inner glow effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    {children}
  </div>
);

export default GlassCard;

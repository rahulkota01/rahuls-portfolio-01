import { portfolioData } from "@/data/portfolio-data";
import { ExternalLink } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-white/40 py-10 relative overflow-hidden nav-glass">
    {/* Gradient overlay - white to light blue */}
    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/70 to-blue-50/50 pointer-events-none" />
    
    {/* Ambient glow orbs */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(210 60% 70% / 0.5) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, hsl(200 60% 65% / 0.5) 0%, transparent 70%)' }}
      />
    </div>
    
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
        <p className="text-sm text-foreground/70">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </p>
        <span className="hidden sm:block text-border">|</span>
        <a
          href="https://www.roecosystem.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          Founder & CEO — RO Ecosystem
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <p className="text-xs text-foreground/50">
          Built for research. Designed with precision.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

import { portfolioData } from "@/data/portfolio-data";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "./AnimatedText";
import { useState } from "react";

interface HeroSectionProps {
  onFounderClick: () => void;
}

const HeroSection = ({ onFounderClick }: HeroSectionProps) => {
  const { personal } = portfolioData;
  const [currentPortal, setCurrentPortal] = useState("Founder & CEO");

  const animatedPhrases = [
    { text: "Founder & CEO — RO Ecosystem", portal: "Founder & CEO" },
    { text: "Entrepreneur", portal: "Entrepreneur" },
    { text: "PharmD Student", portal: "PharmD Student" },
    { text: "AI/ML Researcher", portal: "AI/ML Researcher" },
    { text: "Healthcare Innovator", portal: "Healthcare Innovator" },
    { text: "Computational Biologist", portal: "Computational Biologist" },
    { text: "Cancer Biology Researcher", portal: "Cancer Biology Researcher" },
    { text: "CRISPR Data Analysis Enthusiast", portal: "CRISPR Enthusiast" },
  ];
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center hero-bg overflow-hidden">
      {/* Clean ambient glow - minimal */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft ambient blue glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(210 60% 70% / 0.4) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Glass avatar container with clean liquid glass glow */}
        <div className="relative mx-auto mb-8 w-48 h-48 md:w-56 md:h-56 animate-glide">
          {/* Subtle outer glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-300/25 blur-2xl" />
          
          {/* Main glass container */}
          <div className="relative w-full h-full rounded-full liquid-glass flex items-center justify-center">
            {/* Liquid shimmer effect inside */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-30 pointer-events-none z-10" />

            {/* Shimmer effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden z-15">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
            </div>

            <img
              src="/avatar.jpg"
              alt={personal.name}
              className="absolute inset-0 w-full h-full object-cover rounded-full z-20"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground animate-fade-up-smooth">
          {personal.name}
        </h1>

        {/* Animated title with enhanced styling */}
        <div className="mt-4 animate-fade-up-smooth" style={{ animationDelay: "0.15s" }}>
          <button
            onClick={onFounderClick}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all duration-300 cursor-pointer group"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <AnimatedText 
              words={animatedPhrases.map(p => p.text)} 
              speed={1200}
              onWordChange={(index) => setCurrentPortal(animatedPhrases[index]?.portal || "")}
            />
          </button>
        </div>

        {/* Portal Indicator Bar */}
        <div className="mt-3 animate-fade-up-smooth" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center justify-center gap-1">
            {animatedPhrases.map((phrase, index) => (
              <div
                key={phrase.portal}
                className={`h-1 rounded-full transition-all duration-500 ${
                  currentPortal === phrase.portal 
                    ? "w-8 bg-blue-500" 
                    : "w-2 bg-blue-200"
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center font-medium tracking-wide uppercase">
            {currentPortal}
          </p>
        </div>

        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up-smooth" style={{ animationDelay: "0.3s" }}>
          {personal.mission}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-smooth" style={{ animationDelay: "0.45s" }}>
          <Button asChild className="px-6 gap-2 glass-button">
            <a href="#research">
              <FileText size={16} />
              View Research
            </a>
          </Button>
          <Button asChild variant="outline" className="px-6 gap-2 glass-button border-blue-400/30">
            <a href={`mailto:${personal.email}`}>
              <Mail size={16} />
              Contact
            </a>
          </Button>
        </div>

        <a
          href="#about"
          className="inline-block mt-12 text-muted-foreground hover:text-foreground transition-colors animate-fade-up-smooth animate-float-gentle"
          style={{ animationDelay: "0.6s" }}
        >
          <ArrowDown size={20} className="animate-float-gentle" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

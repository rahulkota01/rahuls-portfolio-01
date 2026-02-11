import { useState } from "react";
import { portfolioData } from "@/data/portfolio-data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const ResearchSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="research" className="py-24 md:py-32 section-gradient relative overflow-hidden">
      {/* Ambient liquid orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full opacity-5 blur-3xl animate-float-slow"
          style={{ background: 'radial-gradient(circle, hsl(168 55% 42% / 0.8) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionHeading title="Research Focus" subtitle="Core areas driving my academic work." />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioData.researchAreas.map((area, i) => (
            <ScrollReveal key={area.title} delay={i * 100}>
              <GlassCard
                hover
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="h-full border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{area.icon}</div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500",
                    expanded === i ? "max-h-48 mt-4 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="pt-3 border-t border-border/40">
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {area.details}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mt-3 text-primary text-xs font-medium">
                  <span>{expanded === i ? "Less" : "More"}</span>
                  <ChevronDown
                    size={14}
                    className={cn(
                      "transition-transform duration-300",
                      expanded === i && "rotate-180"
                    )}
                  />
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;

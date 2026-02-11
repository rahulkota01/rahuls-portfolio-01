import { portfolioData } from "@/data/portfolio-data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";

const VisionSection = () => {
  const data = portfolioData as any;
  const { vision } = data;

  return (
    <section className="py-24 md:py-32 section-gradient relative overflow-hidden">
      {/* Ambient liquid orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-0 left-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl animate-float-slow"
          style={{ background: 'radial-gradient(circle, hsl(168 55% 42% / 0.8) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionHeading title="Research Vision" subtitle="Statement of purpose and future direction." />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <GlassCard hover className="max-w-3xl border-primary/10 transition-all duration-300">
            <p className="text-foreground/80 leading-relaxed font-serif text-lg italic">
              "{vision}"
            </p>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VisionSection;

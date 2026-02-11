import { portfolioData } from "@/data/portfolio-data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";

const AboutSection = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 md:py-32 section-gradient relative overflow-hidden">
      {/* Ambient liquid orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl animate-float-slow"
          style={{ background: 'radial-gradient(circle, hsl(168 55% 42% / 0.8) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5 blur-3xl animate-float-medium"
          style={{ background: 'radial-gradient(circle, hsl(220 60% 30% / 0.8) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionHeading title="About Me" subtitle="Background, research interests, and vision." />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal delay={100}>
            <GlassCard hover className="h-full border-primary/10 transition-all duration-300">
              <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Academic Background</h3>
              <p className="text-foreground/80 leading-relaxed">{about.background}</p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <GlassCard hover className="h-full border-primary/10 transition-all duration-300">
              <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Current Focus</h3>
              <p className="text-foreground/80 leading-relaxed">{about.focusAreas}</p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <GlassCard hover className="h-full border-primary/10 transition-all duration-300">
              <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Research Interests</h3>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest) => (
                  <span 
                    key={interest} 
                    className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <GlassCard hover className="h-full border-primary/20 transition-all duration-300">
              <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Philosophy</h3>
              <p className="text-foreground/80 leading-relaxed italic">"{about.statement}"</p>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

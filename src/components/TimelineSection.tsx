import { portfolioData } from "@/data/portfolio-data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";
import { cn } from "@/lib/utils";

const typeColors: Record<string, string> = {
  education: "bg-primary",
  internship: "bg-accent-foreground",
  publication: "bg-blue-400",
  conference: "bg-violet-400",
  research: "bg-emerald-400",
  award: "bg-yellow-400",
  project: "bg-orange-400",
};

const typeLabels: Record<string, string> = {
  education: "Education",
  internship: "Internship",
  publication: "Publication",
  conference: "Conference",
  research: "Research",
  award: "Award",
  project: "Project",
};

const TimelineSection = () => {
  const { timeline, awards } = portfolioData as any;

  return (
    <section id="timeline" className="py-24 md:py-32 section-gradient relative overflow-hidden">
      {/* Ambient liquid orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full opacity-5 blur-3xl animate-float-slow"
          style={{ background: 'radial-gradient(circle, hsl(168 55% 42% / 0.8) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionHeading title="Journey" subtitle="Education, research milestones, and achievements." />
        </ScrollReveal>

        <div className="relative">
          <div className="timeline-line" />

          <div className="space-y-8 md:space-y-12">
            {timeline && timeline.map((item: any, i: number) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className={cn(
                  "relative pl-12 md:pl-0 md:w-1/2",
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                )}>
                  {/* Dot */}
                  <div className={cn(
                    "absolute left-3 md:left-auto w-3 h-3 rounded-full border-2 border-background",
                    typeColors[item.type],
                    i % 2 === 0 ? "md:right-[-6px]" : "md:left-[-6px]"
                  )} />

                  <GlassCard hover className="rounded-xl p-5 border-primary/10 transition-all duration-300">
                    <div className={cn("flex items-center gap-2 mb-2", i % 2 === 0 && "md:justify-end")}>
                      <span className="text-xs text-primary font-mono">{item.year}</span>
                      <span className={cn(
                        "text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full",
                        "bg-primary/10 text-primary border border-primary/20"
                      )}>
                        {typeLabels[item.type]}
                      </span>
                    </div>
                    <h3 className="font-serif text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </GlassCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Awards */}
        <ScrollReveal delay={200}>
          <GlassCard hover className="mt-16 rounded-xl p-6 border-primary/10 transition-all duration-300">
            <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Awards & Honors</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {awards && awards.map((award: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-0.5">★</span>
                  <span className="text-sm text-foreground/80">{award}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TimelineSection;

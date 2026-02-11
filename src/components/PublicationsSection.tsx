import { useState } from "react";
import { portfolioData } from "@/data/portfolio-data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const types = ["all", "project", "conference", "research"] as const;
const typeLabels: Record<string, string> = {
  all: "All",
  journal: "Journal",
  review: "Review",
  preprint: "Preprint",
  conference: "Conference",
  project: "Project",
  research: "Research",
};

const PublicationsSection = () => {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? portfolioData.publications
      : portfolioData.publications.filter((p) => p.type === filter);

  return (
    <section id="publications" className="py-24 md:py-32 section-gradient relative overflow-hidden">
      {/* Ambient liquid orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full opacity-5 blur-3xl animate-float-slow"
          style={{ background: 'radial-gradient(circle, hsl(168 55% 42% / 0.8) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionHeading title="Publications & Works" subtitle="Academic contributions, research, and projects." />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap gap-2 mb-8">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={cn(
                  "px-4 py-1.5 text-sm rounded-full transition-all duration-300",
                  filter === t
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {typeLabels[t]}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {filtered.map((pub, i) => (
            <ScrollReveal key={pub.title} delay={i * 80}>
              <GlassCard hover className="flex flex-col gap-3 border-primary/10 hover:border-primary/30 transition-all duration-300">
                <div>
                  <h3 className="font-serif text-base font-semibold text-foreground leading-snug">
                    {pub.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{pub.authors}</p>
                  <p className="mt-1 text-sm text-foreground/60">
                    <span className="text-accent-foreground">{pub.journal}</span> · {pub.year}
                  </p>
                  {pub.description && (
                    <p className="mt-2 text-sm text-foreground/70">{pub.description}</p>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {(pub as any).link && (
                    <a
                      href={(pub as any).link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={14} />
                      View
                    </a>
                  )}
                  {(pub as any).doi && (
                    <a
                      href={`https://doi.org/${(pub as any).doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={14} />
                      DOI
                    </a>
                  )}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;

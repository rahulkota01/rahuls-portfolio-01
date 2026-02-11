import { useState } from "react";
import { portfolioData } from "@/data/portfolio-data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";
import { Github, FileText, ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 section-gradient relative overflow-hidden">
      {/* Ambient liquid orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-0 right-1/3 w-72 h-72 rounded-full opacity-5 blur-3xl animate-float-slow"
          style={{ background: 'radial-gradient(circle, hsl(168 55% 42% / 0.8) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionHeading title="Projects" subtitle="Research tools, computational models, and lab-based work." />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 100}>
              <GlassCard
                hover
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="h-full flex flex-col border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {project.abstract}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary border border-primary/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500",
                    expanded === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="pt-3 border-t border-border/40 space-y-2">
                    <p className="text-sm text-foreground/70">
                      <span className="text-primary font-medium">Methods:</span> {project.methods}
                    </p>
                    <p className="text-sm text-foreground/70">
                      <span className="text-primary font-medium">Results:</span> {project.results}
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-primary text-xs font-medium">
                    <span>{expanded === i ? "Less" : "Details"}</span>
                    <ChevronDown
                      size={14}
                      className={cn("transition-transform duration-300", expanded === i && "rotate-180")}
                    />
                  </div>
                  <div className="flex gap-3 items-center">
                    {project.link && project.link !== "#" && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={14} />
                        View Project
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github size={16} />
                    </a>
                    <a href={project.paper} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-muted-foreground hover:text-foreground transition-colors">
                      <FileText size={16} />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

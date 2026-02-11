import { portfolioData } from "@/data/portfolio-data";
import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";
import { Award, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const CertificatesSection = () => {
  const { certifications } = portfolioData as any;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  if (!certifications || certifications.length === 0) {
    return null;
  }

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="certificates" className="py-24 md:py-32 section-gradient relative overflow-hidden">
      {/* Ambient liquid orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full opacity-5 blur-3xl animate-float-slow"
          style={{ background: 'radial-gradient(circle, hsl(210 60% 50% / 0.8) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl animate-float-medium"
          style={{ background: 'radial-gradient(circle, hsl(220 60% 30% / 0.8) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionHeading 
            title="Certifications & Achievements"
            subtitle="Professional credentials and recognition"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certifications.map((cert: any, index: number) => (
            <ScrollReveal key={`cert-${index}`} delay={index * 0.1}>
              <GlassCard 
                hover 
                className={`h-full flex flex-col overflow-hidden transition-all duration-300 border-primary/10 cursor-pointer ${expandedIndex === index ? 'ring-2 ring-primary/30' : ''}`}
                onClick={() => toggleExpand(index)}
              >
                {/* Certificate Image */}
                <div className="relative w-full h-48 bg-gradient-to-br from-primary/10 to-accent-foreground/10 overflow-hidden">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-center justify-center">
                    <Award className="w-12 h-12 text-primary/40" />
                  </div>
                  {/* Expand indicator */}
                  <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm rounded-full p-1">
                    {expandedIndex === index ? (
                      <ChevronUp size={16} className="text-primary" />
                    ) : (
                      <ChevronDown size={16} className="text-primary" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-4">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  
                  {/* Expanded content */}
                  {expandedIndex === index && (
                    <div className="space-y-3 pt-2 animate-fade-up-smooth">
                      {cert.platform && (
                        <p className="text-sm text-primary">{cert.platform}</p>
                      )}
                      
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Year:</span>
                          <span className="font-medium">{cert.year}</span>
                        </div>
                        {cert.score && (
                          <div className="flex justify-between">
                            <span>Score:</span>
                            <span className="font-medium text-primary">{cert.score}</span>
                          </div>
                        )}
                        {cert.duration && (
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span className="font-medium">{cert.duration}</span>
                          </div>
                        )}
                        {cert.description && (
                          <p className="text-xs text-foreground/70 pt-2 leading-relaxed border-t border-primary/10 mt-2">
                            {cert.description}
                          </p>
                        )}
                      </div>
                    </div>
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

export default CertificatesSection;

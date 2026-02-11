import { useState, useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio-data";
import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";
import ScrollReveal from "./ScrollReveal";
import { Award, ChevronDown, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const ResearchExposureSection = () => {
  const { researchExposures } = portfolioData as { researchExposures: any[] };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const startAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      if (isAutoPlaying && researchExposures.length > 0) {
        setCurrentIndex((prev) => (prev + 1) % researchExposures.length);
      }
    }, 2000); // Slide every 2 seconds
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, researchExposures.length]);

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('[data-card-width]')?.clientWidth || 320;
      const gap = 24;
      container.scrollTo({
        left: (cardWidth + gap) * index,
        behavior: "smooth",
      });
    }
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    const newIndex = (currentIndex + 1) % researchExposures.length;
    scrollToIndex(newIndex);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    const newIndex = currentIndex === 0 ? researchExposures.length - 1 : currentIndex - 1;
    scrollToIndex(newIndex);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleDialogOpenChange = (open: boolean) => {
    if (!open) {
      setExpandedIndex(null);
      setIsAutoPlaying(true);
    }
  };

  if (!researchExposures || researchExposures.length === 0) {
    return null;
  }

  return (
    <section id="research-exposure" className="py-24 md:py-32 section-gradient relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionHeading 
            title="Research Exposure"
            subtitle="Visual journey through conferences, workshops, and research experiences"
          />
        </ScrollReveal>

        {/* Auto-sliding Carousel Container */}
        <div className="relative mt-12">
          {/* Navigation Arrows */}
          {researchExposures.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/40 hover:bg-accent hover:border-primary/50 transition-all duration-300 shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronDown className="w-5 h-5 text-foreground rotate-90" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/40 hover:bg-accent hover:border-primary/50 transition-all duration-300 shadow-lg"
                aria-label="Next slide"
              >
                <ChevronDown className="w-5 h-5 text-foreground -rotate-90" />
              </button>
            </>
          )}

          {/* Carousel */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pt-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {researchExposures.map((exposure, index) => (
              <div 
                key={exposure.id}
                data-card-width
                className="flex-shrink-0 w-[320px] sm:w-[380px] md:w-[420px] snap-center"
              >
                <ScrollReveal delay={index * 0.1}>
                  <GlassCard 
                    hover 
                    className={`h-full flex flex-col overflow-hidden transition-all duration-300 border-primary/10 cursor-pointer ${expandedIndex === index ? 'ring-2 ring-primary/30' : ''}`}
                    onClick={() => setExpandedIndex(index)}
                  >
                    {/* Image */}
                    <div className="relative w-full h-48 bg-gradient-to-br from-primary/10 to-accent-foreground/10 overflow-hidden">
                      {exposure.image && !exposure.image.includes('placeholder') ? (
                        <img
                          src={exposure.image}
                          alt={exposure.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      ) : null}
                      
                      {/* Placeholder when no image */}
                      {!exposure.image || exposure.image.includes('placeholder') ? (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                          <div className="text-center p-4">
                            <Award className="w-12 h-12 text-primary/30 mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground/50">Add image:</p>
                            <p className="text-xs text-muted-foreground/30">public/exposures/{exposure.id}.jpg</p>
                          </div>
                        </div>
                      ) : null}

                      {/* Expand indicator */}
                      <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm rounded-full p-1">
                        {expandedIndex === index ? (
                          <ChevronDown size={16} className="text-primary rotate-180" />
                        ) : (
                          <ChevronRight size={16} className="text-primary" />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col p-4">
                      <h3 className="font-serif font-semibold text-foreground mb-2 line-clamp-2">
                        {exposure.title}
                      </h3>
                      
                      {/* Expanded content */}
                      {expandedIndex === index ? (
                        <div className="space-y-3 pt-2 animate-fade-up-smooth">
                          {exposure.location && (
                            <p className="text-sm text-primary">{exposure.location}</p>
                          )}
                          
                          <div className="space-y-2 text-xs text-muted-foreground">
                            {exposure.date && (
                              <div className="flex justify-between">
                                <span>Date:</span>
                                <span className="font-medium">{exposure.date}</span>
                              </div>
                            )}
                            <p className="text-xs text-foreground/70 pt-2 leading-relaxed border-t border-primary/10 mt-2">
                              {exposure.fullDescription}
                            </p>
                          </div>

                          {/* Read More button for modal */}
                          <button 
                            className="w-full py-2 px-4 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-all duration-300 flex items-center justify-center gap-2 mt-3"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedIndex(index);
                            }}
                          >
                            <span>Read More</span>
                            <ChevronRight size={14} />
                          </button>
                        </div>
                      ) : (
                        <>
                          {exposure.shortDescription && (
                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                              {exposure.shortDescription}
                            </p>
                          )}
                          
                          {/* See More button */}
                          <button 
                            className="w-full py-2 px-4 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-all duration-300 flex items-center justify-center gap-2 mt-auto"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedIndex(index);
                            }}
                          >
                            <span>See More</span>
                            <ChevronRight size={14} />
                          </button>
                        </>
                      )}
                    </div>
                  </GlassCard>
                </ScrollReveal>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          {researchExposures.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {researchExposures.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    scrollToIndex(index);
                    setTimeout(() => setIsAutoPlaying(true), 5000);
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    currentIndex === index 
                      ? "bg-primary w-8" 
                      : "bg-primary/30 hover:bg-primary/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Modal for Full Details */}
        <Dialog open={expandedIndex !== null} onOpenChange={handleDialogOpenChange}>
          <DialogContent className="sm:max-w-[600px] max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-start justify-between pr-8">
                <div>
                  <DialogTitle className="font-serif text-xl">
                    {researchExposures[expandedIndex as number]?.title}
                  </DialogTitle>
                  {researchExposures[expandedIndex as number]?.location && (
                    <p className="text-sm text-primary/70 mt-1">
                      {researchExposures[expandedIndex as number]?.location}
                    </p>
                  )}
                </div>
              </div>
            </DialogHeader>

            {expandedIndex !== null && (
              <div className="space-y-4">
                {/* Image in Modal */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                  <img
                    src={researchExposures[expandedIndex]?.image}
                    alt={researchExposures[expandedIndex]?.title}
                    className="w-full h-full object-cover"
                  />
                  {!researchExposures[expandedIndex]?.image || researchExposures[expandedIndex]?.image?.includes('placeholder') ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                      <Award className="w-16 h-16 text-primary/20" />
                    </div>
                  ) : null}
                </div>

                {/* Full Details */}
                <div className="space-y-4">
                  {researchExposures[expandedIndex]?.date && (
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Date:</span> {researchExposures[expandedIndex]?.date}
                    </p>
                  )}
                  
                  <div className="prose prose-sm max-w-none">
                    <p className="text-foreground/90 leading-relaxed">
                      {researchExposures[expandedIndex]?.fullDescription}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ResearchExposureSection;

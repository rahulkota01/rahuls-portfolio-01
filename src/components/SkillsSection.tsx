import { useRef, useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio-data";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";

const categoryLabels: Record<string, string> = {
  programming: "Programming Languages",
  dataScience: "Data Science & ML",
  computationalBiology: "Computational & Cancer Biology",
  languages: "Languages",
};

const SkillBadge = ({ name }: { name: string }) => (
  <span className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 inline-block">
    {name}
  </span>
);

const SkillCategory = ({ label, skills }: { label: string; skills: { name: string; level: number }[] }) => {
  return (
    <GlassCard hover className="h-full border-primary/10 transition-all duration-300">
      <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{label}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} />
        ))}
      </div>
    </GlassCard>
  );
};

const SkillsSection = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 md:py-32 section-gradient relative overflow-hidden">
      {/* Ambient liquid orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-0 left-1/2 w-80 h-80 rounded-full opacity-5 blur-3xl animate-float-slow"
          style={{ background: 'radial-gradient(circle, hsl(168 55% 42% / 0.8) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl animate-float-medium"
          style={{ background: 'radial-gradient(circle, hsl(220 60% 30% / 0.8) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionHeading title="Skills" subtitle="Technical proficiencies and areas of expertise." />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([key, value], i) => (
            <ScrollReveal key={key} delay={i * 100}>
              <SkillCategory label={categoryLabels[key] || key} skills={value} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import ResearchExposureSection from "@/components/ResearchExposureSection";
import PublicationsSection from "@/components/PublicationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificatesSection from "@/components/CertificatesSection";
import TimelineSection from "@/components/TimelineSection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FounderModal from "@/components/FounderModal";

const Index = () => {
  const [founderOpen, setFounderOpen] = useState(false);

  return (
    <div className="w-screen bg-background overflow-x-hidden">
      <Navbar onFounderClick={() => setFounderOpen(true)} />
      <main className="pt-16">
        <HeroSection onFounderClick={() => setFounderOpen(true)} />
        <AboutSection />
        <ResearchSection />
        <ResearchExposureSection />
        <PublicationsSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificatesSection />
        <TimelineSection />
        <VisionSection />
        <ContactSection />
      </main>
      <Footer />
      <FounderModal open={founderOpen} onOpenChange={setFounderOpen} />
    </div>
  );
};

export default Index;

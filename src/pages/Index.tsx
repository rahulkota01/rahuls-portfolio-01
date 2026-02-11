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

const Index = () => (
  <div className="w-screen bg-background overflow-x-hidden">
    <Navbar />
    <main className="pt-16">
      <HeroSection />
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
  </div>
);

export default Index;

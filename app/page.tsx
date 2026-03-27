import ContactSection from "@/components/portfolio/ContactSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import FooterSection from "@/components/portfolio/FooterSection";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}

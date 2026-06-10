import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main
      className="relative w-full bg-transparent"
      style={{ overflowX: 'clip' }}
    >
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ServicesSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
}

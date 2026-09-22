import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ProgramsSection from "@/components/ProgramsSection";
import CourseDirectorySelector from "@/components/CourseDirectorySelector";
import ProcessSection from "@/components/ProcessSection";
import SocialProofSection from "@/components/SocialProofSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ServicesSection />
        <ProgramsSection />
        <CourseDirectorySelector />
        <ProcessSection />
        <SocialProofSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

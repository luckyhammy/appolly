import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import AppFeaturesSection from "../components/sections/AppFeaturesSection";
import AppInterfaceSlider from "../components/sections/AppInterfaceSlider";
import DownloadAppSection from "../components/sections/DownloadAppSection";
import HowToUseSection from "../components/sections/HowToUseSection";
import TeamSection from "../components/sections/TeamSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import BlogSection from "../components/sections/BlogSection";
import ContactBar from "../components/sections/ContactBar";
import FooterSection from "../components/sections/FooterSection";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <HeroSection />
      <AboutSection />
      <AppFeaturesSection />
      <AppInterfaceSlider />
      <DownloadAppSection />
      <HowToUseSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactBar />
      <FooterSection />
    </div>
  );
}

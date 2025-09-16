import LandingHeader from "@/components/landing/LandingHeader";
import HeroSection from "@/components/landing/HeroSection";
import SpotlightSection from "@/components/landing/SpotlightSection";
import ContentCards from "@/components/landing/ContentCards";
import CapabilitiesGrid from "@/components/landing/CapabilitiesGrid";
import BenefitsBlocks from "@/components/landing/BenefitsBlocks";
import FAQAccordion from "@/components/landing/FAQAccordion";
import FinalCTA from "@/components/landing/FinalCTA";
import LandingFooter from "@/components/landing/LandingFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <LandingHeader />
      
      <main id="main-content">
        <HeroSection />
        <SpotlightSection />
        <ContentCards />
        <CapabilitiesGrid />
        <BenefitsBlocks />
        <FAQAccordion />
        <FinalCTA />
      </main>
      
      <LandingFooter />
    </div>
  );
};

export default Index;

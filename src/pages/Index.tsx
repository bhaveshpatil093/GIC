
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TimelineSection } from "@/components/TimelineSection";
import { RulesSection } from "@/components/RulesSection";
import { CommunitySection } from "@/components/CommunitySection";
import { Footer } from "@/components/Footer";
import { GameCursor } from "@/components/GameCursor";
import { GICRecapSection } from "@/components/GICRecapSection";
import { GICTestimonialsSection } from "@/components/GICTestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GameCursor />
      <Navigation />
      <HeroSection />
      <div id="gic-recap">
        <GICRecapSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="timeline">
        <TimelineSection />
      </div>
      <div id="gic-testimonials">
        <GICTestimonialsSection />
      </div>
      <div id="rules">
        <RulesSection />
      </div>
      <div id="community">
        <CommunitySection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

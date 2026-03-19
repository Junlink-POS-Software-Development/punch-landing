import { Navigation } from "@/components/navigation/Navigation";
import { HeroSection } from "./components/HeroSection";
import { SocialProofSection } from "./components/SocialProofSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { CoreValuesSection } from "./components/CoreValuesSection";
import { MockupsSection } from "./components/MockupsSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { PricingSection } from "./components/PricingSection";
import { FaqSection } from "./components/FaqSection";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "@/components/navigation/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <HeroSection />
        <SocialProofSection />
        <IndustriesSection />
        <CoreValuesSection />
        <MockupsSection />
        <FeaturesSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>

      <Footer />
      
      {/* Sticky Bottom CTA for Mobile Thumb Zone */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-xl border-t border-slate-200 md:hidden z-50">
        <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-[1.02] transition-transform active:scale-95">
          Get Started Now
        </button>
      </div>
    </div>
  );
}

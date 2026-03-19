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
    <div className="min-h-screen bg-slate-950 font-sans text-white overflow-x-hidden flex flex-col relative">
      {/* Global Aurora Background */}
       <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vh] rounded-full bg-blue-600/40 blur-[120px] animate-aurora-1"></div>
          <div className="absolute top-[20%] right-[-10%] w-[70vw] h-[70vh] rounded-full bg-indigo-600/30 blur-[150px] animate-aurora-2"></div>
          <div className="absolute bottom-[-20%] left-[10%] w-[80vw] h-[80vh] rounded-full bg-emerald-600/20 blur-[150px] animate-aurora-3"></div>
          <div className="absolute bottom-[10%] right-[20%] w-[60vw] h-[60vh] rounded-full bg-orange-500/20 blur-[120px] animate-aurora-4"></div>
       </div>
      
      {/* Foreground Content */}
      <div className="relative z-10 flex-grow flex flex-col">
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
      </div>
      
      {/* Sticky Bottom CTA for Mobile Thumb Zone */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-950/70 backdrop-blur-2xl border-t border-slate-800 md:hidden z-50">
        <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-[1.02] transition-transform active:scale-95">
          Get Started Now
        </button>
      </div>
    </div>
  );
}

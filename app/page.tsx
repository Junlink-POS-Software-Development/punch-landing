"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { HeroSection } from "./components/HeroSection";

import { IndustriesSection } from "./components/IndustriesSection";
import { CoreValuesSection } from "./components/CoreValuesSection";
import { MockupsSection } from "./components/MockupsSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { PricingSection } from "./components/PricingSection";
import { FaqSection } from "./components/FaqSection";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "@/components/navigation/Footer";
import { SocialProofSection } from "./components/SocialProofSection";

function BackgroundElements() {
  const [stars, setStars] = useState<React.CSSProperties[]>([]);
  const [fireflies1, setFireflies1] = useState<React.CSSProperties[]>([]);
  const [fireflies2, setFireflies2] = useState<React.CSSProperties[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStars(
      [...Array(40)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: '1px',
        height: '1px',
        '--duration': `${3 + Math.random() * 5}s`,
        opacity: 0.2 + Math.random() * 0.4,
      } as React.CSSProperties))
    );
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFireflies1(
      [...Array(20)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: '1.5px',
        height: '1.5px',
        '--duration': `${3 + Math.random() * 3}s`,
      } as React.CSSProperties))
    );
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFireflies2(
      [...Array(15)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: '1px',
        height: '1px',
        '--duration': `${4 + Math.random() * 4}s`,
      } as React.CSSProperties))
    );
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Small Stars Background (Behind Glass) */}
        <div className="absolute inset-0 animate-float-slow">
          {stars.map((style, i) => (
            <div
              key={`star-${i}`}
              className="absolute rounded-full bg-white animate-twinkle"
              style={style}
            />
          ))}
        </div>
      </div>

      {/* 2. Middle Layer: Fireflies (Sharp, Above Glass) */}
      <div className="fixed inset-0 z-30 pointer-events-none overflow-hidden">
        {/* Fireflies Layer 1 (Drift Right) */}
        <div className="absolute inset-0 animate-float-sideways opacity-80">
          {fireflies1.map((style, i) => (
            <div
              key={`ff1-${i}`}
              className="absolute rounded-full bg-yellow-50 animate-firefly"
              style={style}
            />
          ))}
        </div>

        {/* Fireflies Layer 2 (Drift Left) */}
        <div className="absolute inset-0 animate-float-reverse opacity-80">
          {fireflies2.map((style, i) => (
            <div
              key={`ff2-${i}`}
              className="absolute rounded-full bg-lime-50 animate-firefly"
              style={style}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white overflow-x-hidden flex flex-col relative">
       <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vh] rounded-full bg-blue-600/40 blur-[120px] animate-aurora-1"></div>
          <div className="absolute top-[20%] right-[-10%] w-[70vw] h-[70vh] rounded-full bg-indigo-600/30 blur-[150px] animate-aurora-2"></div>
          <div className="absolute bottom-[-20%] left-[10%] w-[80vw] h-[80vh] rounded-full bg-emerald-600/20 blur-[150px] animate-aurora-3"></div>
          <div className="absolute bottom-[10%] right-[20%] w-[60vw] h-[60vh] rounded-full bg-orange-500/20 blur-[120px] animate-aurora-4"></div>
          
        <BackgroundElements />
       </div>
      
      {/* Foreground Content */}
      <div className="relative z-10 grow flex flex-col">
        <Navigation />
        
        <main className="grow">
          <HeroSection />
          <SocialProofSection/>
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
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-950/70 border-t border-slate-800 md:hidden z-50">
        <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-[1.02] transition-transform active:scale-95">
          Get Started Now
        </button>
      </div>
    </div>
  );
}

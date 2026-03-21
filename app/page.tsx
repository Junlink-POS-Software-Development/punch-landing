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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
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

          {/* Constellation 1: Orion-ish */}
          <svg className="absolute top-[15%] left-[10%] w-32 h-48 animate-float-reverse animate-constellation" viewBox="0 0 100 150">
            <path
              d="M10,10 L40,30 L90,20 L60,80 L20,130 L10,10"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
            {[[10,10], [40,30], [90,20], [60,80], [20,130]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="2" fill="white" />
            ))}
          </svg>

          {/* Performant Meteor Showers */}
          <div className="absolute top-[5%] right-[20%] w-[120px] h-[1px] bg-gradient-to-l from-transparent to-white/70 animate-meteor" style={{ '--duration': '14s', '--delay': '2s' } as React.CSSProperties}>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_8px_1px_white]" />
          </div>
          <div className="absolute top-[10%] right-[5%] w-[100px] h-[1px] bg-gradient-to-l from-transparent to-white/50 animate-meteor" style={{ '--duration': '19s', '--delay': '7s' } as React.CSSProperties}>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1.5px] h-[1.5px] bg-white rounded-full shadow-[0_0_8px_1px_white]" />
          </div>
          <div className="absolute top-[-10%] right-[40%] w-[200px] h-[1px] bg-gradient-to-l from-transparent to-white/80 animate-meteor" style={{ '--duration': '11s', '--delay': '13s' } as React.CSSProperties}>
             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2.5px] h-[2.5px] bg-white rounded-full shadow-[0_0_10px_2px_white]" />
          </div>
          <div className="absolute top-[30%] right-[-10%] w-[150px] h-[1px] bg-gradient-to-l from-transparent to-white/60 animate-meteor" style={{ '--duration': '16s', '--delay': '18s' } as React.CSSProperties}>
             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_8px_1px_white]" />
          </div>
          <div className="absolute top-[40%] right-[10%] w-[80px] h-[1px] bg-gradient-to-l from-transparent to-cyan-200/50 animate-meteor" style={{ '--duration': '22s', '--delay': '25s' } as React.CSSProperties}>
             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1.5px] h-[1.5px] bg-cyan-100 rounded-full shadow-[0_0_6px_1px_cyan]" />
          </div>

          {/* Constellation 2: Little Dipper-ish */}
          <svg className="absolute top-[60%] right-[15%] w-48 h-32 animate-float-sideways animate-constellation" style={{ animationDelay: '2s' }} viewBox="0 0 150 100">
            <path
              d="M10,80 L40,70 L70,80 L100,60 L130,40 L140,10"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
            {[[10,80], [40,70], [70,80], [100,60], [130,40], [140,10]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="1.5" fill="white" />
            ))}
          </svg>

          {/* Constellation 3: Abstract Triangle */}
          <svg className="absolute bottom-[10%] left-[30%] w-24 h-24 animate-constellation" style={{ animationDelay: '4s' }} viewBox="0 0 100 100">
            <path
              d="M10,90 L50,10 L90,90 Z"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
            {[[10,90], [50,10], [90,90]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="1" fill="white" />
            ))}
          </svg>
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

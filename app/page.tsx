import { Suspense } from "react";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/HeroSection";

const TrustStrip = dynamic(() => import("@/components/TrustStrip").then(mod => mod.TrustStrip), {
  ssr: true
});
const FeatureGrid = dynamic(() => import("@/components/FeatureGrid").then(mod => mod.FeatureGrid), {
  ssr: true
});
const SocialProof = dynamic(() => import("@/components/SocialProof").then(mod => mod.SocialProof), {
  ssr: true
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-background overflow-x-hidden pb-24 md:pb-0">
      <HeroSection />
      
      <Suspense fallback={<div className="h-32 w-full animate-pulse bg-surface/50" />}>
        <TrustStrip />
      </Suspense>

      <Suspense fallback={<div className="h-96 w-full animate-pulse bg-surface/50" />}>
        <FeatureGrid />
      </Suspense>

      <Suspense fallback={<div className="h-96 w-full animate-pulse bg-surface/50" />}>
        <SocialProof />
      </Suspense>

      {/* Sticky Bottom CTA for Mobile Thumb Zone */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-xl border-t border-surface md:hidden z-50">
        <button className="w-full bg-primary text-[#0B0D10] font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(64,224,255,0.3)] hover:scale-[1.02] transition-transform active:scale-95">
          Get Started Now
        </button>
      </div>
    </main>
  );
}

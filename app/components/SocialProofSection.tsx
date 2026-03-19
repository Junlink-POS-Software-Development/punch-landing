import { BadgeCheck, FileCheck, ShieldCheck } from "lucide-react";

export function SocialProofSection() {
  return (
    <section className="py-8 bg-white border-t border-slate-200 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-16 opacity-80 hover:opacity-100 transition-opacity duration-500">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest text-center md:text-left">
          Trusted & Compliant
        </p>
        <div className="w-px h-8 bg-slate-200 hidden md:block"></div>
        <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center">
          <div className="flex items-center gap-2 group cursor-default">
            <BadgeCheck className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
            <span className="font-bold text-slate-600 group-hover:text-slate-900 transition-colors">DTI Business Registered</span>
          </div>
          <div className="flex items-center gap-2 group cursor-default">
            <FileCheck className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
            <span className="font-bold text-slate-600 group-hover:text-slate-900 transition-colors">BIR Registered Business</span>
          </div>
          <div className="flex items-center gap-2 group cursor-default">
            <ShieldCheck className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
            <span className="font-bold text-slate-600 group-hover:text-slate-900 transition-colors">Enterprise Security</span>
          </div>
        </div>
      </div>
    </section>
  );
}

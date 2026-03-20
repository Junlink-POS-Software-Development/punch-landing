import { Banknote, Cloud, Shield, BadgeCheck, FileCheck, ShieldCheck } from "lucide-react";

export function CoreValuesSection() {
  return (
    <section className="min-h-screen flex items-center py-24 bg-slate-900/30 text-white relative z-20 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
        {/* Social Proof Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-16 opacity-80 hover:opacity-100 transition-opacity duration-500 mb-20">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest text-center md:text-left">
            Trusted & Compliant
          </p>
          <div className="w-px h-8 bg-slate-800 hidden md:block"></div>
          <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center">
            <div className="flex items-center gap-2 group cursor-default">
              <BadgeCheck className="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition-colors" />
              <span className="font-bold text-slate-400 group-hover:text-white transition-colors text-sm">DTI Registered</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <FileCheck className="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition-colors" />
              <span className="font-bold text-slate-400 group-hover:text-white transition-colors text-sm">BIR Registered</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <ShieldCheck className="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition-colors" />
              <span className="font-bold text-slate-400 group-hover:text-white transition-colors text-sm">Enterprise Security</span>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 text-center">
          <div className="p-8 flex flex-col items-center bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group">
            <div className="w-16 h-16 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:border-blue-500/40">
              <Banknote className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Most Affordable Cloud POS</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              The most cost-effective and highly affordable cloud-based service on the market. Get premium, enterprise-grade features without the enterprise price tag.
            </p>
          </div>
          <div className="p-8 flex flex-col items-center bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] group">
            <div className="w-16 h-16 bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:border-emerald-500/40">
              <Shield className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">100% Secured Data</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Industrial-grade database security powered by Supabase. Your business transactions and customer data are encrypted, backed up, and strictly yours.
            </p>
          </div>
          <div className="p-8 flex flex-col items-center bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] group">
            <div className="w-16 h-16 bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors rounded-2xl flex items-center justify-center mb-6 border border-orange-500/20 group-hover:border-orange-500/40">
              <Cloud className="w-8 h-8 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Accessible Anywhere</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Fully cloud-based. Monitor live sales, update stock, and manage your staff from your phone, tablet, or laptop wherever you are in the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

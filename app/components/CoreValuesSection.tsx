import { Banknote, Cloud, Shield } from "lucide-react";

export function CoreValuesSection() {
  return (
    <section className="py-16 bg-slate-900/30 text-white relative z-20 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
          <div className="p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
              <Banknote className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Most Affordable Cloud POS</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              The most cost-effective and highly affordable cloud-based service on the market. Get premium, enterprise-grade features without the enterprise price tag.
            </p>
          </div>
          <div className="p-6 flex flex-col items-center pt-10 md:pt-6">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
              <Shield className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">100% Secured Data</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Industrial-grade database security powered by Supabase. Your business transactions and customer data are encrypted, backed up, and strictly yours.
            </p>
          </div>
          <div className="p-6 flex flex-col items-center pt-10 md:pt-6">
            <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 border border-orange-500/20">
              <Cloud className="w-8 h-8 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Accessible Anywhere</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Fully cloud-based. Monitor live sales, update stock, and manage your staff from your phone, tablet, or laptop wherever you are in the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

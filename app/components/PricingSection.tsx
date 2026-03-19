"use client";

import { useState } from "react";
import { Banknote, CheckCircle2, Cloud } from "lucide-react";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative z-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold mb-6 border border-emerald-200 shadow-sm">
            <Banknote className="w-4 h-4" />
            <span>80%+ Cheaper than other Cloud POS in the Philippines</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Enterprise Power, Local Price
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Unlock the entire Punch POS ecosystem for a fraction of the cost. No hidden fees, no per-feature charges—just one incredibly affordable rate.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-bold transition-colors ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-16 h-8 rounded-full bg-blue-600 relative transition-colors focus:outline-none shadow-inner"
              aria-label="Toggle billing period"
            >
              <div className={`w-6 h-6 rounded-full bg-white absolute top-1 transition-transform shadow-sm ${isAnnual ? 'translate-x-9' : 'translate-x-1'}`}></div>
            </button>
            <span className={`text-sm font-bold flex items-center gap-2 transition-colors ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Annually 
              <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">SAVE 16%</span>
            </span>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-200 p-8 md:p-10 relative overflow-hidden transform transition-all hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -z-10"></div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-2">All-Access Pass</h3>
            <p className="text-slate-500 text-sm mb-6">Everything you need to run your business smoothly.</p>
            
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-slate-900 tracking-tight">
                ₱{isAnnual ? '1,999' : '199'}
              </span>
              <span className="text-slate-500 font-medium">/ {isAnnual ? 'year' : 'month'}</span>
            </div>

            <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-colors mb-8 shadow-lg shadow-slate-200">
              Start Free Trial Now
            </button>

            <div className="space-y-4">
              <p className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">What&apos;s included:</p>
              {[
                'Full Backoffice Command Center',
                'Unlimited POS Terminals',
                'Living Inventory Sync',
                'Offline-Capable PWA Terminal',
                '1GB Real-time Cloud DB Storage',
                'Advanced Business Analytics'
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-start gap-3 text-sm text-slate-500">
              <Cloud className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <p>
                Base plan includes 1GB of secure database storage. <br/>
                <span className="font-semibold text-slate-700">+₱30/month</span> for every additional 1GB exceeded.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

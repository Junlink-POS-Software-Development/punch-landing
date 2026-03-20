import { ShoppingBag, Pill, ShoppingCart } from "lucide-react";

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 bg-slate-950/50 border-t border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Purpose-Built for Your Industry</h2>
          <p className="text-slate-400">Punch POS is engineered with the specific workflows of modern retail in mind, bypassing the bloat of restaurant-first systems.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Retail */}
          <div className="bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-sm hover:shadow-indigo-500/10 transition-all group text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Retail Shops</h3>
            <p className="text-sm text-slate-400">Boutiques, apparel, and general merchandise. Manage vast variants and barcode scanning effortlessly.</p>
          </div>

          {/* Pharmacies */}
          <div className="bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-sm hover:shadow-emerald-500/10 transition-all group text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Pill className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Pharmacies</h3>
            <p className="text-sm text-slate-400">Strict stock monitoring, batch tracking capabilities, and lightning-fast customer search.</p>
          </div>

          {/* Groceries */}
          <div className="bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-sm hover:shadow-orange-500/10 transition-all group text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-orange-500/10 text-orange-400 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <ShoppingCart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Groceries & Mini-Marts</h3>
            <p className="text-sm text-slate-400">High-speed checkout workflows built to handle hundreds of transactions per hour seamlessly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

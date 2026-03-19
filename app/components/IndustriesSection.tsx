import { ShoppingBag, Pill, ShoppingCart } from "lucide-react";

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 bg-slate-50 border-t border-slate-200 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Purpose-Built for Your Industry</h2>
          <p className="text-slate-600">Punch POS is engineered with the specific workflows of modern retail in mind, bypassing the bloat of restaurant-first systems.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Retail */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Retail Shops</h3>
            <p className="text-sm text-slate-500">Boutiques, apparel, and general merchandise. Manage vast variants and barcode scanning effortlessly.</p>
          </div>

          {/* Pharmacies */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Pill className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Pharmacies</h3>
            <p className="text-sm text-slate-500">Strict stock monitoring, batch tracking capabilities, and lightning-fast customer search.</p>
          </div>

          {/* Groceries */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <ShoppingCart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Groceries & Mini-Marts</h3>
            <p className="text-sm text-slate-500">High-speed checkout workflows built to handle hundreds of transactions per hour seamlessly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

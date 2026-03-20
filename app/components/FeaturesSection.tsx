import { LayoutDashboard, Monitor, TrendingUp, Globe, ShieldCheck, Lock, Zap, WifiOff, Boxes, Clock } from "lucide-react";

const backofficeFeatures = [
  {
    icon: TrendingUp,
    title: 'Advanced Business Intelligence',
    description: 'Track revenue trends, compare store metrics, and monitor financial liquidity over 7, 30, and 90-day periods.'
  },
  {
    icon: Globe,
    title: 'Multi-Store Mastery',
    description: 'Manage 1 or 100 locations. Enforce global catalog control for products, categories, and variants from a single screen.'
  },
  {
    icon: ShieldCheck,
    title: 'Robust Audit Logs',
    description: 'Every transaction and administrative action is logged, searchable, and exportable (PDF/CSV) for total accountability.'
  },
  {
    icon: Lock,
    title: 'Granular Access Control',
    description: 'Define precise roles and permissions for managers, auditors, and frontline staff to secure your business operations.'
  }
];

const terminalFeatures = [
  {
    icon: Zap,
    title: 'Rapid-Fire Transactions',
    description: 'A swift checkout interface designed for high-volume environments with intelligent barcode/SKU power and multi-payment support.'
  },
  {
    icon: WifiOff,
    title: 'Offline Mode Installable PWA',
    description: 'Keep selling even when the internet drops. Install the terminal directly to your device for lightning-fast, reliable checkouts anywhere.'
  },
  {
    icon: Boxes,
    title: 'Phantom Stock Prevention',
    description: 'Advanced "Living Inventory" monitors stock levels in real-time across all terminals, preventing oversells automatically.'
  },
  {
    icon: Clock,
    title: 'Daily Operational Excellence',
    description: 'Streamlined shift handovers, cashout management, and integrated expense tracking directly from the terminal.'
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-slate-900/30 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            A Dual-Platform Solution
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Punch POS bridges the gap between frontline operations and high-level management. Built with Next.js 16 and Supabase, these tools are designed to work in perfect harmony.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8">
          <div className="bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/20">
                  <LayoutDashboard className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Punch POS Backoffice</h3>
                  <p className="text-blue-400 font-medium text-sm uppercase tracking-wider mt-1">The Command Center</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                {backofficeFeatures.map((feature, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-orange-500 rounded-2xl shadow-lg shadow-orange-500/20">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Punch POS Terminal</h3>
                  <p className="text-orange-400 font-medium text-sm uppercase tracking-wider mt-1">The Smart Checkout</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                {terminalFeatures.map((feature, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, ShieldCheck } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 bg-slate-950/70 text-white relative z-20 overflow-hidden border-t border-slate-800">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">
          Ready to transform your operations?
        </h2>
        <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Get full access to Punch POS today. Setup takes minutes, and our team is here to help you migrate your data for free.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 group">
            Start Your Free Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto bg-slate-900/50 backdrop-blur-xl text-white border border-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all">
            Schedule a Demo
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-slate-400 font-medium bg-slate-900/40 w-fit mx-auto px-6 py-3 rounded-full border border-slate-800 backdrop-blur-sm">
          <ShieldCheck className="w-6 h-6 text-emerald-400" />
          <span><strong className="text-white">30-Day Money-Back Guarantee.</strong> No questions asked.</span>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Zap } from "lucide-react";

export function Navigation() {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg border-b border-slate-200 z-50 transition-all">
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
          <img src="/punch-logo.png" alt="Punch POS Logo" className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold tracking-tight text-slate-900 hidden sm:block">Punch POS</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <a href="#industries" className="hover:text-blue-600 transition-colors">Solutions</a>
          <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-slate-600 font-medium hover:text-slate-900">Log In</button>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200 text-sm sm:text-base">
            Start Free Trial
          </button>
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Zap was unused, Menu and X are still used

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/70 backdrop-blur-md border-b border-slate-800 z-50 transition-all">
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/punch-logo.png" alt="Punch POS Logo" className="w-10 h-10 object-contain invert grayscale brightness-200" />
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block">Punch POS</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-300">
          <a href="#industries" className="hover:text-blue-400 transition-colors">Solutions</a>
          <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="hidden sm:block text-slate-300 font-medium hover:text-white">Log In</button>
          <button className="bg-white text-slate-900 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold hover:bg-slate-200 transition-colors shadow-lg shadow-white/10 text-xs sm:text-sm md:text-base whitespace-nowrap">
            Start Free Trial
          </button>
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-300 p-1 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 flex flex-col items-center py-6 gap-6 shadow-2xl origin-top animate-in slide-in-from-top-4 duration-200">
          <a href="#industries" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium text-lg w-full text-center py-2">Solutions</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium text-lg w-full text-center py-2">Features</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium text-lg w-full text-center py-2">Pricing</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium text-lg w-full text-center py-2">FAQ</a>
          <div className="w-full px-6 pt-4 mt-2 border-t border-slate-800 flex flex-col gap-4">
            <button className="w-full text-slate-300 font-medium hover:text-white py-3 border border-slate-700 rounded-xl">Log In</button>
          </div>
        </div>
      )}
    </nav>
  );
}

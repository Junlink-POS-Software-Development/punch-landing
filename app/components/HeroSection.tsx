"use client";

import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  User, 
  LayoutDashboard, 
  Users, 
  Monitor, 
  BarChart3, 
  ShoppingCart, 
  Package, 
  CheckCircle2, 
  ChevronLeft 
} from "lucide-react";

export function HeroSection() {
  const [activeStage, setActiveStage] = useState(0);
  const [viewingFeature, setViewingFeature] = useState<string | null>(null);

  const baseStages = [
    {
      id: "backoffice",
      title: "Control Everything from One Backoffice",
      subtitle: "Managers get a bird's-eye view of the entire business. Manage inventory, track analytics, and adjust settings from a single, powerful dashboard.",
    },
    {
      id: "terminals",
      title: "Empower Your Staff Anywhere",
      subtitle: "Lightning-fast, intuitive POS terminals designed for cashiers. Seamlessly process transactions across multiple store locations with zero friction.",
    },
    {
      id: "ecosystem",
      title: "A Unified SaaS Ecosystem",
      subtitle: "Real-time synchronization between every terminal and your backoffice. Punch POS keeps your entire business connected and operating smoothly.",
    }
  ];

  const interactiveStages = {
    backoffice: {
      id: "feat-backoffice",
      title: "Deep Dive: Powerful Management",
      subtitle: "Live dashboard analytics and comprehensive staff management at your fingertips. See sales trends and monitor employee performance in real-time.",
    },
    terminal: {
      id: "feat-terminal",
      title: "Deep Dive: POS Terminal",
      subtitle: "Lightning-fast checkouts and real-time stock synchronization directly from the counter. Watch inventory update instantly as transactions occur.",
    }
  };

  const allTextStages = [...baseStages, interactiveStages.backoffice, interactiveStages.terminal];
  
  let activeTextIndex = activeStage;
  if (viewingFeature === "backoffice") activeTextIndex = 3;
  if (viewingFeature === "terminal") activeTextIndex = 4;

  useEffect(() => {
    if (viewingFeature) return; 
    const timer = setInterval(() => {setActiveStage((prev) => (prev + 1) % baseStages.length);}, 4500);
    return () => clearInterval(timer);
  }, [baseStages.length, viewingFeature]);

  useEffect(() => {
    if (viewingFeature) {
      const timer = setTimeout(() => {setViewingFeature(null);}, 10000);
      return () => clearTimeout(timer);
    }
  }, [viewingFeature]);

  return (
    <section className="flex items-center relative z-10 pt-32 pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Column: Dynamic Text */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 shadow-sm border border-blue-100">
            <ShieldCheck className="w-4 h-4" />
            <span>The Next-Gen POS Ecosystem</span>
          </div>
          
          {/* Changed absolute positioning to CSS grid to prevent overlapping */}
          <div className="grid">
            {allTextStages.map((stage, index) => (
              <div 
                key={stage.id}
                className={`row-start-1 col-start-1 transition-all duration-700 ease-in-out ${
                  activeTextIndex === index 
                    ? 'opacity-100 translate-y-0 z-10' 
                    : 'opacity-0 translate-y-8 z-0 pointer-events-none'
                }`}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.15] tracking-tight mb-4 lg:mb-6 text-white">
                  {stage.title}
                </h1>
                <p className="text-lg sm:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-xl">
                  {stage.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className={`flex flex-col xl:flex-row gap-3 lg:gap-4 mt-8 lg:mt-10 transition-opacity duration-500 ${viewingFeature ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <button className="bg-blue-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:bg-blue-700 transition-colors shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 group">
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-slate-900/50 backdrop-blur-xl text-white border border-slate-700 px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center">
              Book a Demo
            </button>
          </div>

          {/* Social Proof */}
          <div className={`flex items-center gap-4 mt-8 transition-opacity duration-500 ${viewingFeature ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="flex -space-x-2">
              <div className="w-9 h-9 rounded-full border-2 border-slate-50 bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-700">JD</div>
              <div className="w-9 h-9 rounded-full border-2 border-slate-50 bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-700">AL</div>
              <div className="w-9 h-9 rounded-full border-2 border-slate-50 bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-700">MC</div>
              <div className="w-9 h-9 rounded-full border-2 border-slate-50 bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-700">RS</div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 mb-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-sm font-medium text-slate-400">
                Joined by <span className="text-white font-bold">500+</span> users and counting
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className={`flex items-center gap-3 mt-10 lg:mt-12 transition-opacity duration-500 ${viewingFeature ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            {baseStages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStage(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  activeStage === index ? 'w-10 bg-blue-500' : 'w-3 bg-slate-800 hover:bg-slate-700'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Diagram */}
        <div className="relative w-full h-[450px] md:h-[500px] lg:h-[550px] bg-slate-900/40 backdrop-blur-xl rounded-[2rem] border border-slate-800 shadow-2xl shadow-black/50 p-4 lg:p-8 overflow-hidden z-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
          
          {/* VIEW 1: Network Overview */}
          <div className={`absolute inset-0 w-full h-full transition-all duration-500 ${viewingFeature ? 'scale-95 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}>
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <g className={`transition-opacity duration-700 opacity-100`}>
                {/* Base Paths */}
                <path d="M 50 25 C 50 55, 20 50, 20 80" fill="none" stroke="#e2e8f0" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                <path d="M 50 25 L 50 80" fill="none" stroke="#e2e8f0" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                <path d="M 50 25 C 50 55, 80 50, 80 80" fill="none" stroke="#e2e8f0" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                <path d="M 20 80 L 80 80" fill="none" stroke="#e2e8f0" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="2 4" />

                {/* Animated Data Flow Down (Backoffice Syncing) */}
                <g className={`transition-opacity duration-700 ${(activeStage === 0 || activeStage === 2) ? 'opacity-100' : 'opacity-0'}`}>
                  <path d="M 50 25 C 50 55, 20 50, 20 80" fill="none" stroke="#3b82f6" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeDasharray="3 9" className="animate-flow" />
                  <path d="M 50 25 L 50 80" fill="none" stroke="#3b82f6" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeDasharray="3 9" className="animate-flow delay-75" />
                  <path d="M 50 25 C 50 55, 80 50, 80 80" fill="none" stroke="#3b82f6" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeDasharray="3 9" className="animate-flow delay-150" />
                </g>

                {/* Animated Data Flow Up (Terminals Selling) */}
                <g className={`transition-opacity duration-700 ${(activeStage === 1 || activeStage === 2) ? 'opacity-100' : 'opacity-0'}`}>
                  <path d="M 20 80 C 20 50, 50 55, 50 25" fill="none" stroke="#f97316" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeDasharray="4 10" className="animate-flow" style={{ animationDirection: 'reverse' }} />
                  <path d="M 50 80 L 50 25" fill="none" stroke="#f97316" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeDasharray="4 10" className="animate-flow delay-75" style={{ animationDirection: 'reverse' }} />
                  <path d="M 80 80 C 80 50, 50 55, 50 25" fill="none" stroke="#f97316" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeDasharray="4 10" className="animate-flow delay-150" style={{ animationDirection: 'reverse' }} />
                </g>
              </g>
            </svg>

            {/* Backoffice Node */}
            <button 
              onClick={() => setViewingFeature("backoffice")}
              className={`absolute top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-700 z-20 group cursor-pointer focus:outline-none ${
                activeStage === 0 || activeStage === 2 ? 'scale-110' : 'scale-95 opacity-70 hover:opacity-100 hover:scale-105'
              }`}
            >
              <div className="mb-2 text-center opacity-90 hidden sm:block">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-800/80 px-2 py-0.5 rounded-full shadow-sm">Global HQ</span>
              </div>
              <div className={`relative bg-slate-900 p-5 rounded-2xl shadow-xl border-2 transition-colors duration-500 group-hover:border-indigo-500 group-hover:shadow-indigo-500/20 ${
                activeStage === 0 || activeStage === 2 ? 'border-blue-500 shadow-blue-500/20' : 'border-slate-800'
              }`}>
                <div className={`absolute -top-3 -right-3 p-1.5 rounded-full border-2 border-slate-900 text-white transition-colors duration-500 z-10 ${
                  activeStage === 0 || activeStage === 2 ? 'bg-indigo-500' : 'bg-slate-700 group-hover:bg-indigo-400'
                }`}>
                  <User className="w-4 h-4" />
                </div>
                <LayoutDashboard className={`w-10 h-10 transition-colors ${
                  activeStage === 0 || activeStage === 2 ? 'text-blue-400' : 'text-slate-600 group-hover:text-blue-400'
                }`} />
                
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Click to Inspect
                </div>

                {(activeStage === 0 || activeStage === 2) && (
                  <span className="absolute inset-0 rounded-2xl ring-4 ring-blue-500/20 animate-pulse"></span>
                )}
              </div>
              <div className="mt-3 text-center bg-slate-900/90 backdrop-blur px-3 py-1.5 rounded-xl shadow-sm border border-slate-800">
                <span className="block font-extrabold text-white text-sm">Backoffice</span>
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider mt-0.5 inline-block">Manager View</span>
              </div>
            </button>

            {/* Terminal Nodes */}
            {[
              { label: 'Store 1', sub: 'Manila', left: '20%' },
              { label: 'Store 2', sub: 'Cebu', left: '50%' },
              { label: 'Store 3', sub: 'Davao', left: '80%' },
            ].map((loc, i) => (
              <button 
                key={i}
                onClick={() => setViewingFeature("terminal")}
                className={`absolute top-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-700 z-20 group cursor-pointer focus:outline-none ${
                  activeStage === 1 || activeStage === 2 ? 'scale-110' : 'scale-95 opacity-70 hover:opacity-100 hover:scale-105'
                }`}
                style={{ left: loc.left }}
              >
                <div className="mt-[-3.5rem] mb-3 text-center sm:block hidden">
                  <span className="text-[11px] font-extrabold text-slate-300 uppercase tracking-wider block bg-slate-800/80 px-2 py-0.5 rounded-t-lg">{loc.label}</span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase bg-slate-900/80 px-2 py-0.5 rounded-b-lg block border-t border-slate-800">{loc.sub}</span>
                </div>
                <div className={`relative bg-slate-900 p-3 sm:p-4 rounded-2xl shadow-lg border-2 transition-colors duration-500 group-hover:border-orange-500 group-hover:shadow-orange-500/20 ${
                  activeStage === 1 || activeStage === 2 ? 'border-orange-500 shadow-orange-500/20' : 'border-slate-800'
                }`}>
                  <div className={`absolute -top-2.5 -right-2.5 p-1.5 rounded-full border-2 border-slate-900 text-white transition-colors duration-500 z-10 ${
                    activeStage === 1 || activeStage === 2 ? 'bg-orange-500' : 'bg-slate-700 group-hover:bg-orange-400'
                  }`}>
                    <Users className="w-3 h-3" />
                  </div>
                  <Monitor className={`w-8 h-8 sm:w-8 sm:h-8 transition-colors ${
                    activeStage === 1 || activeStage === 2 ? 'text-orange-400' : 'text-slate-600 group-hover:text-orange-400'
                  }`} />
                  
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-[10px] font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30">
                    Click to Inspect
                  </div>

                  {activeStage === 1 && (
                    <span className="absolute inset-0 rounded-2xl ring-4 ring-orange-500/20 animate-pulse delay-75"></span>
                  )}
                </div>
                <div className="mt-2 text-center bg-slate-900/90 backdrop-blur px-2.5 py-1 rounded-lg shadow-sm border border-slate-800">
                  <span className="block text-xs font-bold text-white">Terminal</span>
                  <span className="text-[9px] font-bold text-orange-400 uppercase tracking-wider mt-0.5 inline-block">Staff View</span>
                </div>
              </button>
            ))}

            {/* Helper text */}
            <div className="absolute top-4 right-4 text-xs font-semibold text-slate-400 bg-slate-900/60 backdrop-blur px-3 py-1.5 rounded-full border border-slate-800 shadow-sm">
              <span className="hidden sm:inline">Interactive Diagram: </span>Click on icons to inspect
            </div>
          </div>

          {/* VIEW 2: Backoffice Deep Dive */}
          <div className={`absolute inset-0 w-full h-full bg-slate-950/80 backdrop-blur-md transition-all duration-500 flex flex-col p-6 z-30 ${
            viewingFeature === "backoffice" ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
          }`}>
            <button onClick={() => setViewingFeature(null)} className="flex items-center text-sm font-bold text-slate-400 hover:text-blue-400 transition-colors mb-4 w-fit bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 shadow-sm">
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Network Overview
            </button>
            
            <div className="flex-grow grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-5 flex flex-col shadow-sm">
                <div className="flex items-center gap-2 mb-6 text-white font-bold">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  Live Sales Analytics
                </div>
                <div className="flex-grow flex items-end justify-between gap-3 pt-4">
                  {[40, 70, 45, 90, 60, 100].map((height, i) => (
                    <div key={i} className="w-full bg-blue-500/5 border border-blue-500/20 rounded-t-md relative group">
                      <div 
                        className="absolute bottom-0 left-0 w-full bg-blue-400 rounded-t-md animate-grow transition-all"
                        style={{ height: `${height}%`, animationDelay: `${i * 100}ms` }}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between text-[10px] font-semibold text-slate-500 uppercase">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-5 flex flex-col overflow-hidden shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Users className="w-5 h-5 text-indigo-400" />
                    Global Staff
                  </div>
                  <span className="text-xs font-bold bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded-full border border-indigo-500/20">3 Active</span>
                </div>
                
                <div className="flex flex-col gap-3 mt-2">
                  {[
                    {name: 'Alice Smith', store: 'Manila'}, 
                    {name: 'Bob Johnson', store: 'Cebu'}, 
                    {name: 'Carol White', store: 'Davao'}
                  ].map((staff, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 bg-slate-800/40 p-2.5 rounded-xl border border-slate-800/50 opacity-0 animate-slide-in"
                      style={{ animationDelay: `${400 + (i * 150)}ms` }}
                    >
                      <div className="w-9 h-9 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm border-2 border-slate-800 shadow-sm">
                        {staff.name.charAt(0)}
                      </div>
                      <div className="flex-grow">
                        <div className="text-sm font-bold text-white">{staff.name}</div>
                        <div className="text-[10px] font-medium text-slate-400 flex items-center justify-between mt-0.5">
                          <span>{staff.store}</span>
                          <span className="text-emerald-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span> Clocked In
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* VIEW 3: Terminal Deep Dive */}
          <div className={`absolute inset-0 w-full h-full bg-slate-950/80 backdrop-blur-md transition-all duration-500 flex flex-col p-6 z-30 ${
            viewingFeature === "terminal" ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
          }`}>
            <button onClick={() => setViewingFeature(null)} className="flex items-center text-sm font-bold text-slate-400 hover:text-orange-400 transition-colors mb-4 w-fit bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 shadow-sm">
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Network Overview
            </button>
            
            <div className="flex-grow grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-5 flex flex-col relative overflow-hidden shadow-sm">
                <div className="flex items-center justify-between mb-4 text-white font-bold">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-orange-400" />
                    Active Cart
                  </div>
                  <span className="text-xs font-bold bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md border border-slate-700">Order #1204</span>
                </div>
                <div className="flex flex-col gap-2 flex-grow">
                  <div className="flex justify-between items-center text-sm bg-slate-800/40 p-2.5 rounded-lg border border-slate-800 animate-cart-add" style={{ animationDelay: '0s' }}>
                    <span className="font-semibold text-slate-300">Artisan Coffee</span>
                    <span className="text-white font-bold">$4.50</span>
                  </div>
                  <div className="flex justify-between items-center text-sm bg-slate-800/40 p-2.5 rounded-lg border border-slate-800 animate-cart-add" style={{ animationDelay: '1.5s' }}>
                    <span className="font-semibold text-slate-300">Pastry</span>
                    <span className="text-white font-bold">$3.00</span>
                  </div>
                </div>
                <div className="mt-auto border-t border-slate-800 pt-3">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-slate-500 uppercase">Total</span>
                    <span className="text-lg font-extrabold text-white">$7.50</span>
                  </div>
                  <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-xl shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 hover:bg-orange-600 transition-all active:scale-95">
                    <CheckCircle2 className="w-5 h-5" /> Pay Now
                  </button>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-5 flex flex-col shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Package className="w-5 h-5 text-amber-400" />
                    Store Inventory
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/40 border border-slate-800/50 p-3 rounded-xl text-center flex flex-col items-center justify-center animate-cart-add" style={{ animationDelay: '0s' }}>
                    <div className="text-xs font-bold text-slate-300 mb-1">Coffee</div>
                    <div className="text-[10px] font-extrabold bg-slate-900 border border-slate-700 text-slate-400 px-2 py-0.5 rounded-md animate-stock-update shadow-sm" style={{ animationDelay: '0s' }}>
                      124 left
                    </div>
                  </div>
                  <div className="bg-slate-800/40 border border-slate-800/50 p-3 rounded-xl text-center flex flex-col items-center justify-center animate-cart-add" style={{ animationDelay: '1.5s' }}>
                    <div className="text-xs font-bold text-slate-300 mb-1">Pastry</div>
                    <div className="text-[10px] font-extrabold bg-slate-900 border border-slate-700 text-slate-400 px-2 py-0.5 rounded-md animate-stock-update shadow-sm" style={{ animationDelay: '1.5s' }}>
                      42 left
                    </div>
                  </div>
                  <div className="bg-slate-800/40 border border-slate-800/50 p-3 rounded-xl text-center flex flex-col items-center justify-center">
                    <div className="text-xs font-bold text-slate-300 mb-1">Tea</div>
                    <div className="text-[10px] font-extrabold bg-slate-900 border border-slate-700 text-slate-400 px-2 py-0.5 rounded-md shadow-sm">
                      89 left
                    </div>
                  </div>
                  <div className="bg-slate-800/40 border border-slate-800/50 p-3 rounded-xl text-center flex flex-col items-center justify-center">
                    <div className="text-xs font-bold text-slate-300 mb-1">Mugs</div>
                    <div className="text-[10px] font-extrabold bg-slate-900 border border-slate-700 text-slate-400 px-2 py-0.5 rounded-md shadow-sm">
                      15 left
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-orange-400/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      </div>
    </section>
  );
}

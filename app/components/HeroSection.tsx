"use client";

import { useState, useEffect } from "react";
import { 
  ArrowRight, ShieldCheck, Star, Search, UserCircle, QrCode, ShoppingCart, 
  CreditCard, CheckCircle2, ChevronDown, LayoutDashboard, BarChart3, TrendingUp,
  LineChart, Sparkles, Layers, Server, Zap, PieChart
} from "lucide-react";

// Helper components strictly for the cinematic hero
const TerminalMockup = ({ phase, subStep }: { phase: number, subStep: number }) => {
  const isTerminalPhase = phase === 0;
  const isBackofficePhase = phase === 1;

  // Terminal transformation states
  const terminalClasses = 
    isTerminalPhase ? "scale-100 translate-x-0 translate-y-0 opacity-100 z-30" :
    isBackofficePhase ? "scale-[0.85] -translate-x-[90%] lg:-translate-x-[100%] translate-y-0 opacity-40 z-10" :
    "scale-[0.65] sm:scale-[0.70] lg:scale-[0.75] -translate-x-[10%] sm:-translate-x-[15%] -translate-y-[10%] sm:-translate-y-[15%] opacity-100 z-20 hover:z-50 hover:scale-[0.8] transition-all duration-500";

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className={`relative w-[95%] max-w-[600px] h-[350px] lg:h-[400px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-auto ${terminalClasses}`}>
        
        {/* Tablet Frame Bezel */}
        <div className="absolute inset-x-0 top-0 bottom-6 bg-slate-900 rounded-[2rem] p-3 shadow-2xl border-4 border-slate-700 z-10 flex">
          
          {/* Camera Hole (Landscape Left) */}
          <div className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-950 border border-slate-800"></div>

          {/* Screen Inner */}
          <div className="w-full h-full bg-slate-950 rounded-xl overflow-hidden flex relative">
            
            {/* Left Panel: Quick Picks */}
            <div className="w-[55%] bg-slate-900 border-r border-slate-800 p-4 flex flex-col">
              <div className="flex items-center justify-between mb-4 bg-slate-800/50 p-2 rounded-lg border border-slate-700">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Search className="w-4 h-4" /> Search items...
                </div>
                <QrCode className="w-4 h-4 text-blue-400" />
              </div>
              
              <div className="grid grid-cols-2 gap-2 flex-grow">
                {['Coffee', 'Pastry', 'Premium White Bread', 'Tea', 'Mug', 'Beans'].map((item, i) => (
                  <div key={i} className={`relative bg-slate-800 rounded-lg border border-slate-700 p-3 flex flex-col items-center justify-center text-center transition-all duration-300 ${item === 'Premium White Bread' && subStep >= 1 && phase === 0 ? 'ring-2 ring-blue-500 bg-blue-500/10 scale-95' : ''}`}>
                    <div className="w-10 h-10 bg-slate-700 rounded-full mb-2 flex items-center justify-center text-xs shadow-inner">📸</div>
                    <span className="text-[10px] font-bold text-slate-300 leading-tight">{item}</span>
                    
                    {/* Click Ripple Effect */}
                    {item === 'Premium White Bread' && subStep === 1 && phase === 0 && (
                      <div className="absolute inset-0 border-2 border-blue-400 rounded-lg animate-hero-click pointer-events-none" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel: Cart & Customer */}
            <div className="w-[45%] bg-slate-950 p-4 flex flex-col relative overflow-hidden">
              
              {/* Customer Spotlight */}
              <div className={`bg-slate-900 rounded-xl p-3 border border-slate-800 mb-3 transition-all duration-500 ${subStep >= 3 && phase === 0 ? 'ring-1 ring-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.2)] bg-slate-800/80 translate-y-1' : ''}`}>
                <div className="flex items-center gap-2 mb-2">
                  <UserCircle className="w-6 h-6 text-slate-400" />
                  <div>
                    <div className="text-xs font-bold text-white">Alex Doe</div>
                    <div className={`text-[10px] font-bold text-amber-400 transition-opacity duration-300 ${subStep >= 3 && phase === 0 ? 'opacity-100' : 'opacity-0'}`}>150 pts</div>
                  </div>
                </div>
                <div className={`text-[9px] text-slate-400 bg-slate-950 px-2 py-1 rounded transition-all duration-500 ${subStep >= 3 && phase === 0 ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}>
                  <span className="font-semibold text-slate-300">Last:</span> Stardew Valley Plushie
                </div>
              </div>

              {/* Cart */}
              <div className="flex-grow flex flex-col gap-2 relative">
                <div className="flex items-center justify-between text-xs bg-slate-900 p-2 rounded border border-slate-800">
                  <span className="text-slate-300">Coffee</span><span className="text-white font-bold">$4.50</span>
                </div>
                <div className={`flex items-center justify-between text-xs bg-slate-900 p-2 rounded border border-slate-800 transition-all duration-500 ${subStep >= 2 && phase === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  <span className="text-slate-300">White Bread</span><span className="text-white font-bold">$3.50</span>
                </div>

                {/* Barcode Scanner Floating Peripheral */}
                <div className={`absolute -right-10 top-1/2 -mt-6 transition-all duration-500 z-50 ${subStep >= 2 && phase === 0 ? 'translate-x-[5px] rotate-[-5deg] opacity-100' : 'translate-x-12 rotate-[30deg] opacity-0'}`}>
                  <div className="relative text-slate-300 bg-slate-800 rounded-full p-2 border border-slate-700 shadow-xl shadow-black">
                    <QrCode className="w-5 h-5" />
                    {subStep >= 2 && phase === 0 && (
                      <div className="absolute top-1/2 -left-[60px] w-[60px] h-[1px] bg-red-500 shadow-[0_0_5px_1px_red] animate-pulse origin-right"></div>
                    )}
                  </div>
                </div>
              </div>

              {/* Total & Charge */}
              <div className="mt-auto pt-3 border-t border-slate-800">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Grand Total</span>
                  <span className={`text-xl font-extrabold text-white transition-colors duration-300 ${subStep >= 2 && phase === 0 ? 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]' : ''}`}>
                    ${subStep >= 2 && phase === 0 ? '8.00' : '4.50'}
                  </span>
                </div>
                <div className={`w-full bg-emerald-500 text-white font-bold text-sm py-2.5 flex justify-center rounded-lg shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] transition-transform duration-100 ${subStep >= 4 && phase === 0 ? 'scale-95 bg-emerald-600 shadow-none' : ''}`}>
                  CHARGE
                </div>
              </div>

              {/* Digital Receipt Overlay */}
              <div className={`absolute inset-x-2 bottom-2 top-8 bg-white/95 backdrop-blur rounded-t-xl rounded-b flex flex-col p-4 shadow-2xl border border-slate-200 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${subStep >= 5 && phase === 0 ? 'translate-y-0' : 'translate-y-[120%]'}`}>
                <div className="text-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-1" />
                  <div className="text-slate-900 font-black text-sm uppercase">Payment Successful</div>
                  <div className="text-slate-500 text-[10px]">Digital Receipt Sent</div>
                </div>
                <div className="border-t border-dashed border-slate-300 pt-2 text-[10px] text-slate-600 space-y-1">
                  <div className="flex justify-between"><span>Coffee</span><span>$4.50</span></div>
                  <div className="flex justify-between"><span>White Bread</span><span>$3.50</span></div>
                  <div className="flex justify-between font-bold text-slate-900 mt-2 pt-2 border-t border-slate-200"><span>TOTAL</span><span>$8.00</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cash Drawer Peripheral (Underneath Tablet) */}
        <div className="absolute inset-x-[15%] bottom-0 h-6 bg-slate-800 rounded-b-xl border border-slate-700 shadow-xl flex flex-col justify-end z-0">
          {/* Drawer Face */}
          <div className={`relative w-full h-5 bg-slate-900 rounded-b-lg border-t border-slate-700 flex justify-center transition-transform duration-500 ${subStep >= 4 && phase === 0 ? 'translate-y-6 shadow-2xl' : 'translate-y-0'}`}>
             {/* Key slot */}
             <div className="absolute top-1/2 left-4 w-1.5 h-1.5 rounded-full bg-slate-700 border border-slate-950"></div>
             {/* Handle */}
             <div className="mt-1 w-[20%] h-1 bg-slate-700 rounded-full"></div>
             {/* Cash Popping Out */}
             {subStep >= 4 && phase === 0 && (
               <div className="absolute -top-2 left-10 w-8 h-3 bg-emerald-700/80 border border-emerald-500/50 rounded flex gap-1 px-1 rotate-[-5deg]">
                 <span className="w-1 h-full bg-emerald-900/50 rounded-sm"></span>
                 <span className="w-1 h-full bg-emerald-900/50 rounded-sm"></span>
               </div>
             )}
          </div>
        </div>

      </div>
    </div>
  );
};

const BackofficeMockup = ({ phase, subStep }: { phase: number, subStep: number }) => {
  const isTerminalPhase = phase === 0;
  const isBackofficePhase = phase === 1;

  const boClasses = 
    isTerminalPhase ? "scale-[0.85] translate-x-[90%] lg:translate-x-[100%] translate-y-0 opacity-0 z-10" :
    isBackofficePhase ? "scale-100 translate-x-0 translate-y-0 opacity-100 z-30" :
    "scale-[0.65] sm:scale-[0.70] lg:scale-[0.75] translate-x-[10%] sm:translate-x-[15%] translate-y-[10%] sm:translate-y-[15%] opacity-100 z-20 hover:z-50 hover:scale-[0.8] transition-all duration-500";

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className={`relative w-[95%] max-w-[600px] h-[350px] lg:h-[400px] flex flex-col items-center justify-end pb-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-auto ${boClasses}`}>
        
        {/* Monitor Screen Frame */}
        <div className="relative w-full h-full bg-slate-800 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700 flex flex-col overflow-hidden z-10">
          
          {/* Browser / App Top Bar */}
          <div className="h-6 w-full bg-slate-900 border-b border-slate-800 flex items-center px-3 gap-1.5 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
          </div>

          <div className="flex-grow bg-slate-950 flex flex-col">
            {/* Dashboard Top Bar */}
            <div className="h-12 bg-slate-900/80 border-b border-slate-800 flex items-center px-4 justify-between">
              <div className="flex items-center gap-2"><LayoutDashboard className="w-4 h-4 text-blue-400"/> <span className="text-xs font-bold text-white">Command Center</span></div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mt-0.5 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Live Sync</span>
              </div>
            </div>

            <div className="p-4 grid grid-cols-2 gap-4 flex-grow">
              
              {/* Revenue Pulse */}
              <div className="col-span-2 grid grid-cols-2 gap-4 h-20">
                <div className="bg-slate-900 rounded-xl border border-slate-800/80 p-3 flex flex-col justify-center shadow-inner">
                  <span className="text-[10px] text-slate-400 font-bold uppercase mb-1 flex items-center gap-1.5"><TrendingUp className="w-3 h-3 text-emerald-400"/> Gross Sales</span>
                  <span className={`text-2xl font-extrabold text-white transition-all duration-300 ${subStep >= 1 && phase === 1 ? 'text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.4)] tracking-tight' : ''}`}>
                    {subStep >= 1 && phase === 1 ? '$14,258.50' : '$14,250.00'}
                  </span>
                </div>
                <div className="bg-slate-900 rounded-xl border border-slate-800/80 p-3 flex flex-col justify-center shadow-inner">
                   <span className="text-[10px] text-slate-400 font-bold uppercase mb-1 flex items-center gap-1.5"><LineChart className="w-3 h-3 text-blue-400"/> Net Profit</span>
                  <span className={`text-2xl font-extrabold text-white transition-all duration-300 ${subStep >= 1 && phase === 1 ? 'text-blue-400 drop-shadow-[0_0_12px_rgba(96,165,250,0.4)] tracking-tight' : ''}`}>
                    {subStep >= 1 && phase === 1 ? '$6,845.20' : '$6,840.00'}
                  </span>
                </div>
              </div>

              {/* Payment Mix Donut */}
              <div className="bg-slate-900 rounded-xl border border-slate-800/80 p-4 flex flex-col items-center justify-center relative shadow-inner">
                <span className="text-[10px] text-slate-400 font-bold uppercase absolute top-4 left-4 flex items-center gap-1.5"><PieChart className="w-3 h-3 text-purple-400"/> Payment Mix</span>
                <div className="relative w-32 h-32 mt-4 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 drop-shadow-xl">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="15" />
                    {/* Cash Segment */}
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="15" strokeLinecap="round"
                      strokeDasharray="251" 
                      strokeDashoffset={subStep >= 2 && phase === 1 ? 120 : 251} 
                      className="transition-all duration-1000 ease-in-out" />
                    {/* GCash Segment */}
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="15" strokeLinecap="round"
                      strokeDasharray="251" 
                      strokeDashoffset={subStep >= 2 && phase === 1 ? 180 : 251} 
                      className="transition-all duration-1000 ease-in-out delay-300" />
                    {/* Maya Segment */}
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#8b5cf6" strokeWidth="15" strokeLinecap="round"
                      strokeDasharray="251" 
                      strokeDashoffset={subStep >= 2 && phase === 1 ? 220 : 251} 
                      className="transition-all duration-1000 ease-in-out delay-500" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm tracking-widest">Mix</div>
                </div>
              </div>

              {/* Liquidity Tracking */}
              <div className="bg-slate-900 rounded-xl border border-slate-800/80 p-4 flex flex-col shadow-inner">
                 <span className="text-[10px] text-slate-400 font-bold uppercase mb-4 flex items-center gap-1.5"><Zap className="w-3 h-3 text-amber-400 fill-amber-400/20"/> Available Cash</span>
                 <div className="flex flex-col gap-2.5 relative overflow-hidden flex-grow">
                    <div className="flex justify-between items-center bg-slate-800/80 p-2 rounded-md text-xs border border-slate-700/50">
                      <span className="text-slate-300">Total Revenue</span><span className="text-white font-bold tracking-tight">$14,258</span>
                    </div>
                    <div className={`flex justify-between items-center bg-rose-500/10 p-2 rounded-md text-xs border border-rose-500/20 transition-all duration-500 ${subStep >= 3 && phase === 1 ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                      <span className="text-rose-400">Fixed Expenses</span><span className="text-rose-400 font-bold tracking-tight">-$4,100</span>
                    </div>
                    <div className={`flex justify-between items-center bg-rose-500/10 p-2 rounded-md text-xs border border-rose-500/20 transition-all duration-500 delay-150 ${subStep >= 3 && phase === 1 ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                      <span className="text-rose-400">COGS</span><span className="text-rose-400 font-bold tracking-tight">-$3,313</span>
                    </div>
                    <div className={`mt-auto pt-3 border-t border-slate-800 flex justify-between items-center transition-all duration-500 delay-300 ${subStep >= 3 && phase === 1 ? 'opacity-100' : 'opacity-0'}`}>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Net Cash flow</span>
                      <span className="text-emerald-400 font-extrabold tracking-tight">$6,845</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Monitor Base / Stand */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-800 rounded-t-lg [clip-path:polygon(15%_0%,85%_0%,100%_100%,0%_100%)] z-0 shadow-inner"></div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-2.5 bg-slate-700 rounded-lg shadow-xl z-0"></div>
      </div>
    </div>
  );
};

export function HeroSection() {
  const [tick, setTick] = useState(0);

  // Animation Choreography Loop (18 seconds total, 500ms ticks = 36 steps)
  useEffect(() => {
    const timer = setInterval(() => {
      setTick(t => (t + 1) % 36);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  // Derive phase and substep from tick
  let phase = 0;
  let subStep = 0;

  if (tick < 15) { // Phase 0: 0s to 7.5s (Terminal)
    phase = 0;
    if (tick >= 2) subStep = 1;  // Tap Bread
    if (tick >= 4) subStep = 2;  // Scan
    if (tick >= 7) subStep = 3;  // Customer focus
    if (tick >= 10) subStep = 4; // Charge button
    if (tick >= 11) subStep = 5; // Receipt up
  } else if (tick < 27) { // Phase 1: 7.5s to 13.5s (Backoffice)
    phase = 1;
    if (tick >= 17) subStep = 1; // Revenue Pulse
    if (tick >= 19) subStep = 2; // Donut Draw
    if (tick >= 22) subStep = 3; // Liquidity Sync
  } else { // Phase 2: 13.5s to 18s (Tech Stack)
    phase = 2;
    if (tick >= 29) subStep = 1; // Tech badges
    if (tick >= 31) subStep = 2; // Tagline
  }

  const textContent = [
    {
      title: "Lightning-Fast Point of Sale",
      subtitle: "Process transactions in seconds. Intelligent Quick Picks, instant customer insights, and digital receipts keep the line moving smoothly.",
    },
    {
      title: "Real-Time Command Center",
      subtitle: "Watch your revenue pulse live. Deep dive into payment mixes and liquidity tracking from anywhere in the world.",
    },
    {
      title: "Next-Generation Technology",
      subtitle: "Built on bleeding-edge web infrastructure. React 19, Supabase, and Gemini AI powering a truly modern SaaS ecosystem.",
    }
  ];

  return (
    <section className="flex items-center relative z-10 pt-32 pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Left Column: Dynamic Text mapping to Phase */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 shadow-sm border border-blue-100">
            <ShieldCheck className="w-4 h-4" />
            <span>The Next-Gen POS Ecosystem</span>
          </div>
          
          <div className="grid min-h-[280px] sm:min-h-[220px] lg:min-h-[280px] xl:min-h-[240px]">
            {textContent.map((stage, index) => (
              <div 
                key={index}
                className={`row-start-1 col-start-1 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  phase === index 
                    ? 'opacity-100 translate-y-0 z-10 duration-700' 
                    : 'opacity-0 -translate-y-8 z-0 pointer-events-none duration-300'
                }`}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.15] tracking-tight mb-4 lg:mb-6 text-white drop-shadow-sm">
                  {stage.title}
                </h1>
                <p className="text-lg sm:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-xl font-medium">
                  {stage.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col xl:flex-row gap-3 lg:gap-4 mt-8 lg:mt-10">
            <button className="bg-blue-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:bg-blue-700 transition-colors shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 group">
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-slate-900/50 backdrop-blur-xl text-white border border-slate-700 px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center shadow-lg shadow-black/20">
              Book a Demo
            </button>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <div className="flex -space-x-2">
              <div className="w-9 h-9 rounded-full border-2 border-slate-900 bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-700 shadow-sm">JD</div>
              <div className="w-9 h-9 rounded-full border-2 border-slate-900 bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-700 shadow-sm">AL</div>
              <div className="w-9 h-9 rounded-full border-2 border-slate-900 bg-orange-100 flex items-center justify-center text-[10px] font-bold text-orange-700 shadow-sm">MC</div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 mb-0.5">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
              </div>
              <div className="text-sm font-medium text-slate-400">
                Joined by <span className="text-white font-bold">500+</span> users
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 mt-10">
            {[0, 1, 2].map(idx => (
              <div key={idx} className={`h-2 rounded-full transition-all duration-[800ms] ${phase === idx ? 'w-10 bg-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.6)]' : 'w-3 bg-slate-800'}`} />
            ))}
          </div>
        </div>

        {/* Right Column: Cinematic Animation Container */}
        <div className="relative w-full h-[450px] md:h-[500px] lg:h-[550px] rounded-[2rem] border border-slate-800 shadow-2xl p-4 lg:p-8 overflow-hidden z-20 bg-slate-900/40 backdrop-blur-3xl ring-1 ring-white/10">
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
          
          {/* Data Stream (visible transitioning 0 -> 1 and during 1) */}
          <svg className={`absolute inset-0 w-full h-full xl:translate-x-12 pointer-events-none transition-opacity duration-[1500ms] ${phase === 1 || phase === 2 ? 'opacity-100' : 'opacity-0'}`}>
            <path d="M 200 250 C 300 250, 300 150, 400 150" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="8 16" className="animate-hero-stream" strokeLinecap="round" />
            <path d="M 150 280 C 250 280, 250 350, 350 350" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="6 12" className="animate-hero-stream" style={{ animationDuration: '1.5s' }} strokeLinecap="round" />
          </svg>

          {/* Phase UI Elements */}
          <TerminalMockup phase={phase} subStep={subStep} />
          <BackofficeMockup phase={phase} subStep={subStep} />

          {/* Tech Stack overlay (Phase 2) */}
          <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 z-40 ${phase === 2 && subStep >= 1 ? 'opacity-100' : 'opacity-0'}`}>
             {/* Placed in the empty top-right and bottom-left spaces of the diagonal layout */}
             <div className="absolute top-[10%] sm:top-[15%] right-[10%] sm:right-[15%] bg-slate-900 border border-slate-700 text-white text-[10px] sm:text-xs font-bold px-4 py-2 rounded-full shadow-2xl animate-float-slow tracking-wider">Next.js 16</div>
             <div className="absolute top-[5%] sm:top-[5%] right-[30%] sm:right-[35%] bg-slate-900 border border-slate-700 text-blue-400 text-[10px] sm:text-xs font-bold px-4 py-2 rounded-full shadow-2xl animate-float-reverse tracking-wider">React 19</div>
             <div className="absolute bottom-[20%] sm:bottom-[25%] left-[5%] sm:left-[10%] bg-slate-900 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-bold px-4 py-2 rounded-full shadow-2xl shadow-emerald-500/20 animate-float-sideways tracking-wider">Supabase DB</div>
             <div className="absolute bottom-[10%] sm:bottom-[15%] left-[25%] sm:left-[30%] bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] sm:text-xs font-bold px-4 py-2 rounded-full shadow-2xl animate-float-slow tracking-wider shadow-purple-500/20" style={{ animationDelay: '1s' }}>Gemini AI ✨</div>
          </div>

          <div className={`absolute bottom-6 left-0 right-0 text-center transition-all duration-1000 z-50 pointer-events-none ${phase === 2 && subStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="inline-block bg-slate-950/80 backdrop-blur-md border border-slate-800 text-slate-300 text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-2xl tracking-wide max-w-[90%] mx-auto">
              Punch POS: Smart Business, Simplified. <span className="text-blue-400 block sm:inline mt-1 sm:mt-0 font-extrabold">Developed by Junlink.</span>
            </span>
          </div>

        </div>

        {/* Glow Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10 mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10 mix-blend-screen"></div>
      </div>
    </section>
  );
}

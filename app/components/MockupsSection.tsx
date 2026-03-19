import { LayoutDashboard, Terminal, Grid, Package, Settings, X, Minus, Plus, ShoppingCart, Leaf, Users, Store, FileText, BarChart3, Search, Bell, LineChart, ArrowUpRight, ArrowDownRight } from "lucide-react";

export function MockupsSection() {
  return (
    <section className="py-24 bg-slate-950/50 backdrop-blur-xl relative z-20 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Premium Design, Zero Clutter
          </h2>
          <p className="text-lg text-slate-400">
            Beautifully designed interfaces that require zero training. Dark-mode optimized for operators working long shifts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Backoffice Desktop Mockup (Monitor Frame) */}
          <div className="relative w-full transform transition-transform hover:scale-[1.02] duration-300 flex flex-col items-center">
            {/* Monitor Display Assembly */}
            <div className="w-full bg-slate-900 p-2 sm:p-2.5 pb-0 rounded-xl sm:rounded-2xl border border-slate-800 relative z-10 shadow-2xl shadow-black/50">
               {/* Camera Dot */}
               <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full shadow-inner"></div>
               
               {/* Browser window header inside Monitor */}
               <div className="bg-slate-800 rounded-t-md border-b border-slate-700 px-3 py-2 flex items-center gap-1.5 sm:gap-2 mt-3">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-400/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]"></div>
                 {/* Fake Address Bar */}
                 <div className="mx-auto w-1/2 sm:w-1/3 bg-slate-900 h-4 sm:h-5 rounded-[4px] border border-slate-700 flex items-center px-2 shadow-sm">
                   <div className="w-20 sm:w-32 h-1.5 bg-slate-200 rounded-full"></div>
                 </div>
               </div>
            
            {/* Real Dashboard Mockup */}
            <div className="h-[320px] sm:h-[450px] bg-[#0b0e14] flex relative overflow-hidden text-slate-300 cursor-default select-none">
              
              {/* Sidebar */}
              <div className="w-12 sm:w-16 bg-[#0f1219] border-r border-[#1e2330] flex flex-col items-center py-4 shrink-0 z-10 w-full hidden sm:flex">
                <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20"><LayoutDashboard className="w-4 h-4"/></div>
                <div className="flex flex-col gap-6 text-slate-500 mt-2">
                   <Users className="w-4 h-4 hover:text-white transition-colors"/>
                   <Store className="w-4 h-4 hover:text-white transition-colors"/>
                   <FileText className="w-4 h-4 hover:text-white transition-colors"/>
                   <BarChart3 className="w-4 h-4 hover:text-white transition-colors"/>
                   <Settings className="w-4 h-4 hover:text-white transition-colors mt-auto"/>
                </div>
              </div>

              {/* Main Area */}
              <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <div className="h-12 sm:h-14 border-b border-[#1e2330] bg-[#0b0e14] flex items-center justify-between px-4 shrink-0">
                   <div className="w-48 sm:w-64 h-7 sm:h-8 bg-[#151923] border border-[#1e2330] rounded-lg flex items-center px-3">
                     <Search className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500 mr-2" />
                     <span className="text-[9px] sm:text-[10px] text-slate-500">Search members, stores, transactions...</span>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="relative">
                       <Bell className="w-4 h-4 sm:w-4 sm:h-4 text-slate-400" />
                       <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0b0e14]"></div>
                     </div>
                     <div className="flex items-center gap-2">
                       <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-900/40 text-blue-400 flex items-center justify-center text-[10px] sm:text-xs font-bold border border-blue-500/20">J</div>
                       <div className="leading-tight hidden sm:block">
                         <div className="text-[10px] font-bold text-slate-200">JUNEL FUENTES</div>
                         <div className="text-[9px] text-slate-500">Admin</div>
                       </div>
                     </div>
                   </div>
                </div>

                {/* Dashboard Content */}
                <div className="flex-1 p-3 sm:p-5 overflow-hidden flex flex-col gap-3 sm:gap-4">
                  
                  {/* Title Row */}
                  <div className="flex justify-between items-center shrink-0">
                    <div>
                      <h2 className="text-white font-bold text-sm sm:text-base flex items-center gap-2 tracking-tight">
                        <LayoutDashboard className="w-4 h-4 text-blue-500"/> Overview
                      </h2>
                      <div className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5 font-medium tracking-wide">Jan 1, 2026 — Mar 19, 2026</div>
                    </div>
                  </div>

                  {/* Top Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 shrink-0">
                    <div className="bg-[#13161f] border border-[#1e2330] rounded-xl p-3 sm:p-4 shadow-sm relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.3)] opacity-80 group-hover:opacity-100 transition-opacity"></div>
                      <div className="text-[8px] sm:text-[9px] xl:text-[10px] text-slate-400 font-bold mb-1 tracking-wider uppercase flex justify-between">Gross Sales <span className="text-[8px] bg-slate-800 px-1 py-0.5 rounded text-white flex items-center">$</span></div>
                      <div className="text-sm sm:text-base xl:text-lg font-black text-amber-500 tracking-tight mt-1 sm:mt-2">₱1,709,033</div>
                      <div className="w-full bg-[#1e2330] h-1 sm:h-1.5 rounded-full mt-2 sm:mt-3 overflow-hidden">
                        <div className="w-[85%] bg-blue-500 h-full rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-[#13161f] border border-[#1e2330] rounded-xl p-3 sm:p-4 shadow-sm group hover:border-[#2a3142] transition-colors">
                      <div className="text-[8px] sm:text-[9px] xl:text-[10px] text-slate-400 font-bold mb-1 tracking-wider uppercase flex justify-between">Net Profit <span className="text-[8px] bg-emerald-500/10 px-1 py-0.5 rounded text-emerald-400 flex items-center"><ArrowUpRight className="w-2 h-2"/></span></div>
                      <div className="text-sm sm:text-base xl:text-lg font-black text-amber-500 tracking-tight mt-1 sm:mt-2">₱369,880</div>
                      <div className="text-[9px] sm:text-[10px] text-emerald-400 mt-2 flex items-center gap-1 font-semibold"><span className="text-emerald-500 bg-emerald-500/20 px-1 py-0.5 rounded">0.0%</span> <span className="text-slate-500 text-[9px] ml-1">vs prev. period</span></div>
                    </div>
                    <div className="bg-[#13161f] border border-[#1e2330] rounded-xl p-3 sm:p-4 shadow-sm hidden sm:block group hover:border-[#2a3142] transition-colors">
                      <div className="text-[8px] sm:text-[9px] xl:text-[10px] text-slate-400 font-bold mb-1 tracking-wider uppercase flex justify-between">Transactions <span className="text-[8px] bg-amber-500/10 px-1 py-0.5 rounded text-amber-500 flex items-center"><FileText className="w-2 h-2"/></span></div>
                      <div className="text-sm sm:text-base xl:text-lg font-black text-amber-500 tracking-tight mt-1 sm:mt-2">1,032</div>
                      <div className="text-[9px] sm:text-[10px] text-emerald-400 mt-2 flex items-center gap-1 font-semibold"><span className="text-emerald-500 bg-emerald-500/20 px-1 py-0.5 rounded">0.0%</span> <span className="text-slate-500 text-[9px] ml-1">busiest at N/A</span></div>
                    </div>
                    <div className="bg-[#13161f] border border-[#1e2330] rounded-xl p-3 sm:p-4 shadow-sm hidden sm:block group hover:border-[#2a3142] transition-colors">
                      <div className="text-[8px] sm:text-[9px] xl:text-[10px] text-slate-400 font-bold mb-1 tracking-wider uppercase flex justify-between">Avg. Order Value <span className="text-[8px] bg-slate-800 px-1 py-0.5 rounded text-white flex items-center"><ShoppingCart className="w-2 h-2"/></span></div>
                      <div className="text-sm sm:text-base xl:text-lg font-black text-amber-500 tracking-tight mt-1 sm:mt-2">₱1,656.04</div>
                      <div className="text-[9px] sm:text-[10px] text-emerald-400 mt-2 flex items-center gap-1 font-semibold"><span className="text-emerald-500 bg-emerald-500/20 px-1 py-0.5 rounded">0.0%</span> <span className="text-slate-500 text-[9px] ml-1">per transaction</span></div>
                    </div>
                  </div>

                  {/* Middle Charts Row */}
                  <div className="flex-1 min-h-[140px] grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-3">
                    <div className="sm:col-span-3 bg-[#13161f] border border-[#1e2330] rounded-xl p-3 sm:p-4 shadow-sm flex flex-col hover:border-[#2a3142] transition-colors">
                      <div className="text-[10px] sm:text-xs text-slate-300 font-bold mb-1 sm:mb-2 tracking-wide flex items-center gap-2">
                         Available Cash
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-4">₱50,000.00</div>
                      
                      <div className="text-[10px] text-slate-400 font-bold mb-2 tracking-wider mt-1">BREAKDOWN</div>
                      <div className="flex-1 flex flex-col justify-end gap-1.5 sm:gap-2">
                        <div className="flex justify-between items-center bg-[#0f1219] p-1.5 sm:p-2.5 rounded-lg border border-[#1e2330]/50 hover:bg-[#151923] transition-colors">
                          <span className="text-[10px] sm:text-xs text-white flex items-center gap-2"><div className="bg-emerald-500/10 p-1 rounded-full"><ArrowUpRight className="w-3 h-3 text-emerald-500"/></div> Net Profit</span>
                          <span className="text-[10px] sm:text-xs font-bold text-amber-500">+₱369,880.30</span>
                        </div>
                        <div className="flex justify-between items-center bg-[#0f1219] p-1.5 sm:p-2.5 rounded-lg border border-[#1e2330]/50 hover:bg-[#151923] transition-colors">
                          <span className="text-[10px] sm:text-xs text-white flex items-center gap-2"><div className="bg-red-500/10 p-1 rounded-full"><Package className="w-3 h-3 text-red-500"/></div> Total Expenses</span>
                          <span className="text-[10px] sm:text-xs font-bold text-amber-500">-₱1,689,593.50</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="sm:col-span-2 bg-[#13161f] border border-[#1e2330] rounded-xl p-3 sm:p-4 shadow-sm flex flex-col items-center relative min-h-[140px] hover:border-[#2a3142] transition-colors">
                      <div className="w-full text-left">
                        <div className="text-[10px] text-slate-400 font-medium tracking-wide">Payment Method Mix</div>
                        <div className="text-sm font-bold text-white mb-2 sm:mb-0">Distribution</div>
                      </div>
                      
                      {/* Donut Chart Mockup */}
                      <div className="flex-1 flex items-center justify-center w-full relative">
                        <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-[8px] sm:border-[12px] border-blue-500 border-t-emerald-400 border-r-purple-500 border-b-amber-500 transform -rotate-45 shadow-[inset_0_0_20px_rgba(0,0,0,0.5),0_0_15px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-500"></div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-1 sm:gap-y-1.5 mt-auto w-full pt-2 sm:pt-4 text-[9px] sm:text-[10px]">
                        <div className="flex justify-between"><span className="flex items-center gap-1.5 text-slate-300"><div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.5)]"></div>Cash</span><span className="text-white font-bold tracking-wide">42%</span></div>
                        <div className="flex justify-between"><span className="flex items-center gap-1.5 text-slate-300"><div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></div>GCash</span><span className="text-white font-bold tracking-wide">28%</span></div>
                        <div className="flex justify-between"><span className="flex items-center gap-1.5 text-slate-300"><div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.5)]"></div>Maya</span><span className="text-white font-bold tracking-wide">18%</span></div>
                        <div className="flex justify-between"><span className="flex items-center gap-1.5 text-slate-300"><div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 shadow-[0_0_5px_rgba(245,158,11,0.5)]"></div>Card</span><span className="text-white font-bold tracking-wide">12%</span></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
            {/* Monitor Lower Chin */}
            <div className="h-6 sm:h-8 bg-slate-900 w-full rounded-b-xl sm:rounded-b-2xl mt-0 border-t border-slate-800 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-slate-800"></div>
            </div>
          </div>
            
          {/* Monitor Stand */}
          <div className="relative flex flex-col items-center z-0 -mt-2">
            <div className="w-16 sm:w-24 h-8 sm:h-12 bg-gradient-to-b from-slate-700 to-slate-900 border-x border-slate-800"></div>
            <div className="w-32 sm:w-48 h-3 sm:h-4 bg-slate-800 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.4)] border-b-2 border-slate-900 -mt-1 relative z-10 flex"></div>
          </div>
        </div>

          {/* Real POS Terminal Mockup (Tablet Frame) */}
          <div className="relative w-full transform transition-transform hover:scale-[1.02] duration-300 rounded-3xl sm:rounded-[2.5rem] shadow-2xl shadow-black/50">
            {/* Tablet Outer Bezel */}
            <div className="bg-slate-900 p-2.5 sm:p-4 rounded-3xl sm:rounded-[2.5rem] relative flex items-center shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] border border-slate-800 h-[320px] sm:h-[420px]">
              {/* Tablet Camera (Left Bezel) */}
              <div className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 flex items-center justify-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full shadow-inner"></div>
              </div>

              {/* Tablet Screen Container */}
              <div className="bg-slate-50 rounded-lg sm:rounded-xl overflow-hidden w-full h-full relative flex flex-row ring-1 ring-black shadow-inner">
                {/* Sidebar */}
                <div className="w-12 sm:w-16 bg-white border-r border-slate-200 flex flex-col items-center py-4 gap-4 z-10 shrink-0">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2 shadow-sm border border-emerald-200"><Leaf className="w-4 h-4"/></div>
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shadow-sm border border-blue-200"><Terminal className="w-4 h-4"/></div>
                  <div className="w-8 h-8 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors flex items-center justify-center"><Grid className="w-4 h-4"/></div>
                  <div className="w-8 h-8 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors flex items-center justify-center"><Package className="w-4 h-4"/></div>
                  <div className="mt-auto w-8 h-8 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors flex items-center justify-center"><Settings className="w-4 h-4"/></div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col min-w-0">
                  {/* Header */}
                  <div className="h-10 sm:h-12 border-b border-slate-200 flex items-center px-4 justify-between bg-white">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1.5 whitespace-nowrap"><div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div><span className="text-[8px] sm:text-[9px] xl:text-[10px] text-slate-800 font-extrabold italic tracking-wider">My Grocery Store Branch 1</span></div>
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-medium text-slate-500 whitespace-nowrap">Welcome, JUNEL</div>
                  </div>

                  {/* Terminal Body */}
                  <div className="flex-1 flex overflow-hidden">
                    {/* Center Column */}
                    <div className="flex-1 border-r border-slate-200 p-3 sm:p-5 flex flex-col min-w-0 bg-slate-50/50">
                      {/* Info Box */}
                      <div className="flex gap-4 mb-4">
                        <div className="flex-1 min-w-0 hidden sm:block">
                          <div className="text-[9px] text-slate-400 font-bold mb-1 tracking-wider uppercase">Current Cashier</div>
                          <div className="text-xs text-blue-600 font-bold">JUNEL FUENTES</div>
                        </div>
                        <div className="flex-none w-32 sm:flex-1 bg-white rounded-xl p-3 border border-slate-200 shadow-sm flex flex-col justify-center relative">
                           <span className="hidden sm:block absolute top-2 right-2 text-[8px] font-bold text-slate-400">SYSTEM TIME</span>
                           <div className="text-base sm:text-lg xl:text-xl font-black text-slate-800 leading-none mt-1">ITEM NAME</div>
                           <div className="text-base sm:text-xl xl:text-2xl font-black text-blue-600 mt-1 sm:mt-2">₱0.00</div>
                        </div>
                      </div>

                      {/* Inputs */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                         <div className="bg-white border border-slate-200 rounded-lg p-1.5 h-7 sm:h-9 hidden sm:block shadow-sm"></div>
                         <div className="bg-white border-2 border-blue-400 rounded-lg p-1.5 h-7 sm:h-9 shadow-[0_0_10px_rgba(59,130,246,0.15)] col-span-2 sm:col-span-1"></div>
                         <div className="bg-white border border-slate-200 rounded-lg p-1.5 h-7 sm:h-9 hidden sm:block shadow-sm"></div>
                      </div>

                      {/* Cart Table */}
                      <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
                        <div className="h-6 sm:h-8 border-b border-slate-100 flex items-center px-3 text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase bg-slate-50">
                           <div className="w-8 shrink-0">SKU</div>
                           <div className="flex-1 px-2">ITEM NAME</div>
                           <div className="w-12 shrink-0 text-right">PRICE</div>
                           <div className="w-8 shrink-0 text-right">QTY</div>
                        </div>
                        <div className="flex-1 flex items-center justify-center text-[10px] sm:text-xs text-slate-400 italic font-medium">
                          No items in cart
                        </div>
                      </div>
                    </div>

                    {/* Right Action Panel */}
                    <div className="w-32 sm:w-56 p-2 sm:p-4 flex flex-col bg-slate-100 shrink-0 border-l border-slate-200">
                       <div className="text-[10px] sm:text-xs font-bold text-slate-700 mb-2 sm:mb-3 flex justify-between items-center">
                         Action Panel <X className="w-3 h-3 text-slate-400"/>
                       </div>
                       
                       {/* Quick Picks */}
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 mb-3">
                         <div className="hidden sm:block h-10 bg-white shadow-sm rounded-lg border border-slate-200"></div>
                         <div className="h-8 sm:h-10 bg-blue-600 shadow-sm shadow-blue-500/30 rounded-lg border border-blue-500"></div>
                         <div className="h-8 sm:h-10 bg-blue-50 shadow-sm rounded-lg border border-blue-200"></div>
                         <div className="hidden sm:block h-10 bg-blue-600 shadow-sm shadow-blue-500/30 rounded-lg border border-blue-500"></div>
                       </div>

                       {/* Action Buttons */}
                       <div className="grid grid-cols-2 sm:grid-cols-5 gap-1 mb-3">
                         {[1,2,3,4].map(i => <div key={i} className={`h-6 sm:h-10 bg-white shadow-sm rounded border border-slate-200 ${i > 2 ? 'hidden sm:block' : ''}`}></div>)}
                         <div className="h-6 sm:h-10 bg-red-50 shadow-sm rounded border border-red-200 text-red-600 flex items-center justify-center text-[7px] sm:text-[8px] font-bold">CLEAR</div>
                       </div>

                       {/* Charge Row */}
                       <div className="flex gap-1.5 mb-3 sm:mb-4">
                         <div className="w-8 sm:w-12 bg-white shadow-sm rounded-lg border border-slate-200 flex items-center justify-center text-red-500 shrink-0"><Minus className="w-3 h-3 sm:w-4 sm:h-4"/></div>
                         <div className="flex-1 bg-emerald-500 rounded-lg border border-emerald-600 flex items-center justify-center text-white font-black tracking-wide text-[10px] sm:text-xs shadow-lg shadow-emerald-500/30">CHARGE</div>
                         <div className="w-8 sm:w-12 bg-white shadow-sm rounded-lg border border-slate-200 flex items-center justify-center text-emerald-600 shrink-0"><Plus className="w-3 h-3 sm:w-4 sm:h-4"/></div>
                       </div>

                       {/* Numpad */}
                       <div className="grid grid-cols-3 gap-1 flex-1">
                         {['7','8','9','4','5','6','1','2','3','.','0'].map(n => (
                           <div key={n} className="bg-white shadow-sm hover:bg-slate-50 transition-colors rounded-lg border border-slate-200 flex items-center justify-center text-slate-700 font-extrabold text-xs sm:text-sm">{n}</div>
                         ))}
                         <div className="bg-red-50 shadow-sm hover:bg-red-100 transition-colors rounded-lg border border-red-200 flex items-center justify-center text-red-600"><X className="w-3 h-3 sm:w-4 sm:h-4"/></div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

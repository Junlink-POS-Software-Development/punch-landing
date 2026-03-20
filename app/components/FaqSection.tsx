"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does the offline mode actually work?",
    answer: "Our Installable PWA Terminal securely caches your transactions locally on your device when the internet connection drops. The moment your connection is restored, it automatically and silently syncs all data to the cloud backoffice."
  },
  {
    question: "Can I migrate my existing products from my old POS?",
    answer: "Absolutely! We provide free data migration assistance. You can easily import your products, categories, and variants using our CSV upload tool, or our support team can handle it for you during onboarding."
  },
  {
    question: "Are there any hidden fees for technical support?",
    answer: "No. 24/7 technical support is fully included in your All-Access Pass at no extra cost. We succeed when your business succeeds."
  },
  {
    question: "Will this work with my existing hardware?",
    answer: "Punch POS is a cloud-based web application, meaning it runs smoothly on almost any modern device—iPads, Android tablets, desktop computers, and laptops. It is also compatible with standard Bluetooth/USB barcode scanners and receipt printers."
  }
];

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default

  return (
    <section id="faq" className="min-h-screen flex items-center py-24 bg-slate-900/30 relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-400">Have questions? We&apos;re here to help.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                openFaq === index ? 'border-blue-500 bg-blue-500/10' : 'border-slate-800 hover:border-slate-700 bg-slate-900/40 backdrop-blur-md'
              }`}
            >
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 focus:outline-none"
              >
                <span className="font-bold text-lg text-white leading-snug">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                )}
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                   openFaq === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

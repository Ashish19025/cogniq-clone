import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Cta() {
  return (
    <section className="bg-[#F8F9FE] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center bg-transparent gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-[#5B3EE8] p-2.5 rounded-full shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-[1.1rem] font-bold text-[#18113C]">Unlock AI Potential</h3>
              <p className="text-gray-500 text-sm">Discover how we can transform your operations</p>
            </div>
          </div>
          <a href="/services" className="px-6 py-2.5 rounded-md border border-[#D1D5DB] text-[#5B3EE8] font-semibold text-sm hover:border-[#5B3EE8] bg-white transition-all shadow-sm">
            Explore Solutions →
          </a>
        </div>
      </div>
    </section>
  );
}

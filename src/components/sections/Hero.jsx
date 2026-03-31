import React from 'react';
import { Sparkles, Zap, BrainCircuit } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
      {/* Decorative Grid and Elements */}
      <div className="absolute inset-0 bg-[#F8F9FE]/40" style={{
        backgroundImage: `linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)`,
        backgroundSize: '4rem 4rem'
      }}></div>
      
      {/* Floating Icons Background (Approximating the screenshot's floating sparkles) */}
      <div className="absolute top-24 left-1/4 w-10 h-10 bg-white rounded-full flex shadow-md items-center justify-center opacity-80 animate-pulse">
        <Sparkles className="w-5 h-5 text-[#8B5CF6]" />
      </div>
      <div className="absolute top-48 right-1/4 w-12 h-12 bg-white rounded-full flex shadow-sm items-center justify-center opacity-80 mt-12">
        <BrainCircuit className="w-5 h-5 text-[#4B28C4]" />
      </div>
      <div className="absolute bottom-32 left-[15%] w-8 h-8 bg-white rounded-full flex shadow-sm items-center justify-center opacity-70">
         <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-5xl md:text-[4rem] font-extrabold text-[#111827] mb-6 leading-[1.15] tracking-tight">
          Building <span className="text-[#8B5CF6]">Intelligent</span>, scalable AI <br className="hidden md:block" />
          solutions for the <span className="text-[#8B5CF6]">Next</span> <br className="hidden md:block" />
          <span className="text-[#8B5CF6]">Generation</span>
        </h1>
        <p className="text-lg md:text-xl text-[#4B5563] mb-10 max-w-2xl mx-auto font-medium">
          Your premier AI & Software engineering partner - transforming ideas into 
          reliable, high-performance products.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/services" className="w-full sm:w-auto px-8 py-3 rounded-md border border-[#D1D5DB] text-[#4B28C4] bg-white font-semibold text-sm hover:border-[#4B28C4] hover:bg-gray-50 transition-all shadow-sm">
            Explore our services
          </a>
          <a href="/contact" className="w-full sm:w-auto px-8 py-3 rounded-md bg-[#5B3EE8] text-white font-semibold text-sm hover:bg-[#381B94] transition-all shadow-md shadow-[#5B3EE8]/20">
            Book a Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}

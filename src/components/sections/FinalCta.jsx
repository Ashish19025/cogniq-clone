import React from 'react';
import { ArrowRight } from 'lucide-react';
import ctaBg from '../../assets/cta-bg.jpg';

export default function FinalCta() {
  return (
    <section className="bg-white py-16 pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${ctaBg})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center text-white py-20 px-6">
            <h2 className="text-3xl md:text-3xl font-bold mb-4">
              Ready to transform Your Workflow?
            </h2>
            <p className="text-gray-200 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
              Let's build a clear, actionable roadmap to solve your biggest operational challenges with AI.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#5B3EE8] text-white text-sm font-semibold hover:bg-[#381B94] transition-colors shadow-lg shadow-[#5B3EE8]/30"
            >
              Book a Strategy Call <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

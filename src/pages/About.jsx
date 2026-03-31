import React from 'react';
import { Sparkles, BrainCircuit, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[#F8F9FE]/40" style={{
          backgroundImage: `linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}></div>
        {/* Floating Icons */}
        <div className="absolute top-24 left-1/4 w-10 h-10 bg-white rounded-full flex shadow-md items-center justify-center opacity-80 animate-pulse">
            <Sparkles className="w-5 h-5 text-[#8B5CF6]" />
        </div>
        <div className="absolute top-48 right-1/4 w-8 h-8 bg-white rounded-full flex shadow-sm items-center justify-center opacity-70">
            <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
        </div>
        <div className="absolute bottom-10 left-[30%] w-6 h-6 bg-white rounded-full flex shadow-sm items-center justify-center opacity-60">
             <Sparkles className="w-3 h-3 text-[#8B5CF6]" />
        </div>
        
        <div className="relative z-10 w-full px-4 flex flex-col items-center">
          <span className="inline-block px-5 py-1.5 text-[11px] font-bold tracking-wider text-[#2B1B54] bg-[#E5E7FF] rounded-full mb-6">
            ABOUT US
          </span>
          <h1 className="text-5xl md:text-[4rem] font-extrabold text-[#4B28C4] mb-4 flex items-center justify-center gap-4">
            Cogniq AI <div className="bg-white rounded-full shadow-sm p-1.5"><BrainCircuit className="w-8 h-8 text-[#8B5CF6]" /></div>
          </h1>
          <p className="text-gray-500 italic font-medium text-lg">
            A Cogniq Labs Division
          </p>
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 border-b border-gray-100 pb-20">
          <div className="md:col-span-1">
            <h2 className="text-xl font-extrabold text-[#18113C] relative inline-block pb-3 uppercase tracking-wide">
              WHO WE ARE
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#5B3EE8]"></span>
            </h2>
          </div>
          <div className="md:col-span-2 text-gray-500 text-[15px] leading-relaxed font-medium max-w-2xl">
            <span className="text-[#4B28C4] font-bold">Cogniq AI</span> is a premier AI and engineering partner that builds intelligent, scalable software for startups and enterprises. We combine deep technical expertise with real product-building experience.
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8F9FE] rounded-4xl p-6 sm:p-10 md:p-14 flex flex-col md:flex-row items-center gap-12 shadow-sm border border-[#F3F4F6]">
          <div className="w-full md:w-1/2">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" alt="Team matching puzzle pieces" className="rounded-2xl shadow-md w-full object-cover h-70" />
          </div>
          <div className="w-full md:w-1/2">
            <span className="inline-block px-4 py-1 text-[10px] font-bold tracking-wider text-[#18113C] bg-[#E5E7FF] rounded-full mb-4 uppercase">
              OUR MISSION
            </span>
            <h3 className="text-3xl lg:text-[2.5rem] font-extrabold text-[#4B28C4] mb-6 tracking-tight">Our Mission</h3>
            <p className="text-gray-500 text-[14px] leading-[1.8]">
              To empower organizations by building intelligent technologies that drive clarity, efficiency, and long-term advantage. We believe modern businesses deserve more than "AI plugins" — they deserve custom-built, high-trust systems engineered for their vision, their workflows, and their scale.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative border-b border-gray-100 pb-28">
        <div className="flex justify-between items-end mb-16 flex-col md:flex-row gap-6">
          <div>
            <h2 className="text-xl font-extrabold text-[#18113C] relative inline-block pb-3 uppercase tracking-wide">
              WHAT WE DO
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#5B3EE8]"></span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm md:text-right max-w-sm leading-relaxed">
            We design and build. We also offer proven AI modules for support, scheduling, and inventory optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative rounded-4xl overflow-hidden group h-65 shadow-sm flex items-end p-4">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" alt="Development" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 bg-white w-full py-4 px-4 rounded-2xl text-center shadow-lg">
              <span className="text-[#18113C] font-extrabold text-[10px] tracking-widest uppercase">Custom AI Systems Development</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative rounded-4xl overflow-hidden group h-65 shadow-sm flex items-end p-4">
             <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop" alt="Platforms" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/20"></div>
             <div className="relative z-10 bg-white w-full py-4 px-4 rounded-2xl text-center shadow-lg">
              <span className="text-[#18113C] font-extrabold text-[10px] tracking-widest uppercase">Enterprise AI Platforms</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative rounded-4xl overflow-hidden group h-65 shadow-sm flex items-end p-4">
             <img src="https://images.unsplash.com/photo-1485686531765-a80a4714a66e?q=80&w=1000&auto=format&fit=crop" alt="Automation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/20"></div>
             <div className="relative z-10 bg-white w-full py-4 px-4 rounded-2xl text-center shadow-lg">
              <span className="text-[#18113C] font-extrabold text-[10px] tracking-widest uppercase">Automation & Operational Intelligence</span>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8F9FE] rounded-4xl p-10 md:p-16 border border-[#F3F4F6]">
           <h3 className="text-[17px] font-extrabold text-[#18113C] mb-4 tracking-wide">OUR APPROACH</h3>
           <p className="text-gray-500 text-[15px] leading-[1.8] max-w-4xl">
              Engineering-first, outcome-driven, and built for scale. We work in fast, collaborative cycles — turning complex ideas into practical, impactful solutions.
           </p>
        </div>
      </section>

      {/* OUR TEAM Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <h2 className="text-xl font-extrabold text-[#18113C] relative inline-block pb-3 uppercase tracking-wide mb-8">
                OUR TEAM
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#5B3EE8]"></span>
              </h2>
              <p className="text-gray-500 text-[15px] leading-[1.8] pr-8 max-w-md">
                A focused group of engineers, designers, and AI builders from Cogniq Labs dedicated to delivering high-quality software and meaningful business impact.
              </p>
          </div>
          <div className="order-1 md:order-2 h-70 rounded-4xl overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" alt="Our Team" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 pb-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-4xl overflow-hidden shadow-2xl bg-cover bg-center h-87.5 flex items-center justify-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop)` }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center text-white py-12 px-6 flex flex-col items-center">
            <h2 className="text-3xl md:text-[2.5rem] font-bold mb-4 tracking-tight">
              Cogniq AI
            </h2>
            <p className="text-gray-200 text-[13px] max-w-xs mx-auto mb-8 leading-relaxed font-medium">
              Building intelligent AI apps that transform how you interact with technology.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#5B3EE8] text-white text-[13px] font-bold hover:bg-[#381B94] transition-colors shadow-lg shadow-[#5B3EE8]/30"
            >
              Book a Strategy Call <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
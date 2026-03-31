import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import robotHand from '../../assets/robot-hand.png';

export default function About() {
  return (
    <section className="bg-[#F8F9FE] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column - Image & Decoration */}
          <div className="w-full lg:w-1/2 relative flex">
            {/* The vertical gradient bar */}
            <div className="w-16 h-80 bg-linear-to-b from-[#8B5CF6] to-[#2B1B54] rounded-sm absolute left-0 top-1/2 -translate-y-1/2 z-0 hidden md:block" style={{ marginLeft: '-15px' }}></div>
            {/* The Image */}
            <img 
              src={robotHand} 
              alt="Robotic Hand" 
              className="relative z-10 w-full md:w-[90%] md:ml-12 rounded-2xl shadow-xl object-cover" 
            />
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-[45%] flex flex-col items-start lg:pl-16">
            <span className="inline-block px-4 py-1 text-[11px] font-bold tracking-wider text-[#18113C] bg-[#E5E7FF] rounded-full mb-6">
              ABOUT US
            </span>
            <h2 className="text-[2.5rem] leading-tight font-extrabold mb-4">
              <span className="text-[#18113C]">Engineering Trust. </span>
              <span className="text-[#8B5CF6]">Delivering Intelligence.</span>
            </h2>
            <h3 className="text-3xl font-extrabold text-[#111827] mb-6">
              At Cogniq AI
            </h3>
            <p className="text-[#4B5563] text-lg leading-relaxed mb-8">
              <span className="text-[#8B5CF6] font-semibold">full-scale</span> AI systems 
              designed for clarity, transparency, and long-term growth. From 
              startups to enterprises, we partner with teams that want to 
              innovate without compromising on <span className="font-bold text-[#18113C]">quality</span>.
            </p>
            <a 
              href="/about" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#5B3EE8] text-white text-sm font-semibold hover:bg-[#381B94] transition-colors"
            >
              Know more about Us <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

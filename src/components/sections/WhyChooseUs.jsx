import React from 'react';
import { ShieldCheck, Maximize, BrainCircuit, UserCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    { icon: ShieldCheck, title: "High-Trust Engineering", description: "Research-backed methods with transparent communication." },
    { icon: Maximize, title: "Built for Scale", description: "Your product grows without breaking." },
    { icon: BrainCircuit, title: "Gen AI Expertise", description: "Deep experience with LLMs and custom AI." },
    { icon: UserCheck, title: "User-Centered Design", description: "Every feature is intuitive and purposeful." },
  ];

  return (
    <section className="bg-[#F8F9FE] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Column Text */}
          <div className="lg:col-span-1 text-left">
            <div className="mb-4">
              <h2 className="text-2xl font-extrabold text-[#18113C] relative inline-block pb-3 uppercase">
                WHY CHOOSE US
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#5B3EE8]"></span>
              </h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mt-2 pr-4">
              Passion for precision, commitment to quality.
            </p>
          </div>

          {/* Right Column Cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-5 rounded-xl flex items-start gap-4 border border-[#F3F4F6] shadow-sm">
                <div className="bg-[#5B3EE8] p-2.5 rounded-lg shrink-0">
                  <reason.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#18113C] mb-1">{reason.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

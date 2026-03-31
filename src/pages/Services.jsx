import React from 'react';
import { 
  Sparkles, 
  Settings, 
  LineChart, 
  ArrowRight,
  BrainCircuit,
  Handshake,
  Cpu,
  ScanEye,
  Activity,
  Mic,
  ArrowUpRight
} from 'lucide-react';

const Services = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[#F8F9FE]/40" style={{
          backgroundImage: `linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}></div>
        {/* Floating Icons */}
        <div className="absolute top-24 left-1/4 w-10 h-10 bg-white rounded-full flex shadow-sm items-center justify-center opacity-70">
            <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
        </div>
        <div className="absolute top-48 right-1/4 w-8 h-8 bg-white rounded-full flex shadow-sm items-center justify-center opacity-60">
            <Sparkles className="w-3 h-3 text-[#8B5CF6]" />
        </div>
        <div className="absolute bottom-20 left-[20%] w-6 h-6 bg-white rounded-full flex shadow-sm items-center justify-center opacity-50">
             <Sparkles className="w-3 h-3 text-[#8B5CF6]" />
        </div>
        <div className="absolute top-1/3 right-[15%] w-12 h-12 bg-white rounded-full flex shadow-sm items-center justify-center opacity-40">
             <Sparkles className="w-5 h-5 text-[#8B5CF6]" />
        </div>
        
        <div className="relative z-10 w-full px-4 flex flex-col items-center max-w-4xl mx-auto">
          <span className="inline-block px-5 py-1.5 text-[11px] font-bold tracking-wider text-[#4B28C4] bg-[#E5E7FF] rounded-full mb-8 uppercase">
            AI SOLUTIONS PARTNER
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-[#18113C] mb-6 leading-[1.1] tracking-tight">
            If You Can Imagine It,<br />
            <span className="text-[#4B28C4]">We Can Build It.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-[1.1rem] leading-relaxed max-w-2xl mb-10 font-medium">
            From customer service automation to predictive analytics — we don't just implement AI, we engineer <span className="text-[#18113C] font-semibold">measurable business outcomes</span> tailored to your needs.
          </p>
          <button className="bg-[#4B28C4] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#3A1E9D] transition-all flex items-center gap-2 shadow-lg shadow-indigo-200">
            Discuss Your Vision <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Why Partner with Cogniq AI */}
      <section className="py-24 bg-[#F8F9FE] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-xl font-extrabold text-[#18113C] relative inline-block pb-3 uppercase tracking-wide mb-16 text-center">
            WHY PARTNER WITH COGNIQ AI
            <span className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-[#5B3EE8]"></span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 w-full">
            {/* Card 1 */}
            <div className="bg-white rounded-4xl p-10 shadow-sm border border-[#F3F4F6] hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#4B28C4] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <BrainCircuit className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[17px] font-bold text-[#18113C] mb-3">Engineering Excellence</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                We don't use templates. Every solution is custom-engineered for your specific workflows, data, and goals. We build high-performance systems from the ground up.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-4xl p-10 shadow-sm border border-[#F3F4F6] hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#4B28C4] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <LineChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[17px] font-bold text-[#18113C] mb-3">Measurable Outcomes</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                We focus on ROI from day one. Every project is designed to deliver quantifiable business impact, from cost savings to revenue growth.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-4xl p-10 shadow-sm border border-[#F3F4F6] hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#4B28C4] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[17px] font-bold text-[#18113C] mb-3">End-to-End Partnership</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                From initial strategy to full-scale deployment and long-term optimization — we stay with you through every phase of the AI journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 pt-8 border-t border-gray-100">
          <div>
            <h2 className="text-xl font-extrabold text-[#18113C] relative inline-block pb-3 uppercase tracking-wide">
              WHAT WE BUILD
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#5B3EE8]"></span>
            </h2>
          </div>
          <p className="text-gray-500 text-[15px] md:text-right max-w-sm leading-relaxed">
            These are examples of what we deliver. Your challenge might be different — and that's exactly what we specialize in.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#F8F9FE] p-6 rounded-3xl border border-[#F3F4F6]">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4">
              <Sparkles className="w-5 h-5 text-[#4B28C4]" />
            </div>
            <h4 className="text-[14px] font-bold text-[#18113C] mb-2">Generative AI & LLMs</h4>
            <p className="text-gray-500 text-[12px] leading-relaxed">Custom RAG pipelines, fine-tuned models, and intelligent agents workflows.</p>
          </div>
          <div className="bg-[#F8F9FE] p-6 rounded-3xl border border-[#F3F4F6]">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4">
              <ScanEye className="w-5 h-5 text-[#4B28C4]" />
            </div>
            <h4 className="text-[14px] font-bold text-[#18113C] mb-2">Vision & Signal AI</h4>
            <p className="text-gray-500 text-[12px] leading-relaxed">Object detection, recognition, and complex sensor data interpretation.</p>
          </div>
          <div className="bg-[#F8F9FE] p-6 rounded-3xl border border-[#F3F4F6]">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4">
              <Activity className="w-5 h-5 text-[#4B28C4]" />
            </div>
            <h4 className="text-[14px] font-bold text-[#18113C] mb-2">Predictive Intelligence</h4>
            <p className="text-gray-500 text-[12px] leading-relaxed">Turn historic data into future predictions and inventory models.</p>
          </div>
          <div className="bg-[#F8F9FE] p-6 rounded-3xl border border-[#F3F4F6]">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4">
              <Mic className="w-5 h-5 text-[#4B28C4]" />
            </div>
            <h4 className="text-[14px] font-bold text-[#18113C] mb-2">Voice & Audio Tech</h4>
            <p className="text-gray-500 text-[12px] leading-relaxed">Natural language processing and real-time audio analysis.</p>
          </div>
        </div>

        {/* 3 Large Image Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border border-[#F3F4F6] rounded-4xl overflow-hidden shadow-sm group bg-white flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1000&auto=format&fit=crop" alt="AI Customer Service" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-[16px] font-bold text-[#18113C] mb-3">AI Customer Service</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-6 flex-1">
                Automate 80%+ of support queries while improving satisfaction.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#F8F9FE] text-[#4B28C4] text-[10px] font-bold rounded-full border border-[#E5E7FF]">24/7 Availability</span>
                <span className="px-3 py-1 bg-[#F8F9FE] text-[#4B28C4] text-[10px] font-bold rounded-full border border-[#E5E7FF]">Ticket Resolution</span>
                <span className="px-3 py-1 bg-[#F8F9FE] text-[#4B28C4] text-[10px] font-bold rounded-full border border-[#E5E7FF]">CSAT Elevation</span>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="border border-[#F3F4F6] rounded-4xl overflow-hidden shadow-sm group bg-white flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop" alt="Process Automation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-[16px] font-bold text-[#18113C] mb-3">Process Automation</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-6 flex-1">
                Eliminate manual tasks across your business to unlock true productivity.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#F8F9FE] text-[#4B28C4] text-[10px] font-bold rounded-full border border-[#E5E7FF]">RPA Integrations</span>
                <span className="px-3 py-1 bg-[#F8F9FE] text-[#4B28C4] text-[10px] font-bold rounded-full border border-[#E5E7FF]">Workflow Assembly</span>
                <span className="px-3 py-1 bg-[#F8F9FE] text-[#4B28C4] text-[10px] font-bold rounded-full border border-[#E5E7FF]">Data Processing</span>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="border border-[#F3F4F6] rounded-4xl overflow-hidden shadow-sm group bg-white flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" alt="Predictive Analytics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-[16px] font-bold text-[#18113C] mb-3">Predictive Analytics</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-6 flex-1">
                Make data-driven decisions with AI that forecasts and optimizes.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#F8F9FE] text-[#4B28C4] text-[10px] font-bold rounded-full border border-[#E5E7FF]">Data Security</span>
                <span className="px-3 py-1 bg-[#F8F9FE] text-[#4B28C4] text-[10px] font-bold rounded-full border border-[#E5E7FF]">Risk Identification</span>
                <span className="px-3 py-1 bg-[#F8F9FE] text-[#4B28C4] text-[10px] font-bold rounded-full border border-[#E5E7FF]">Smart Reporting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* These Are Just Starting Points */}
      <section className="py-24 bg-[#F8F9FE] px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[18px] font-extrabold text-[#18113C] uppercase tracking-wide mb-6">
            THESE ARE JUST STARTING POINTS
          </h2>
          <p className="text-gray-500 text-[14px] leading-relaxed max-w-2xl mx-auto mb-10">
            Every business is unique. Whether you need a custom AI agent, workflow automation, data intelligence, or something entirely new — we build it from scratch, tailored specifically to your edge cases.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Custom AI Agents', 'Workflow Automation', 'Data Analytics', 'ML Models', 'Browser Extensions', 'API Integrations'].map((tag) => (
              <span key={tag} className="px-5 py-2.5 bg-white border border-[#E5E7EB] text-[#18113C] text-[12px] font-semibold rounded-full shadow-sm hover:border-[#4B28C4] transition-colors cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-xl font-extrabold text-[#18113C] relative inline-block pb-3 uppercase tracking-wide text-center">
            HOW WE WORK
            <span className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-[#5B3EE8]"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-[#F8F9FE] p-8 rounded-3xl border border-[#F3F4F6] text-center">
            <div className="text-4xl font-extrabold text-[#4B28C4] mb-4">01</div>
            <h4 className="text-[15px] font-bold text-[#18113C] mb-2">Discovery</h4>
            <p className="text-gray-500 text-[12px] leading-relaxed">We audit your systems and map out high-ROI AI opportunities.</p>
          </div>
          {/* Step 2 */}
          <div className="bg-[#F8F9FE] p-8 rounded-3xl border border-[#F3F4F6] text-center">
            <div className="text-4xl font-extrabold text-[#4B28C4] mb-4">02</div>
            <h4 className="text-[15px] font-bold text-[#18113C] mb-2">Strategy</h4>
            <p className="text-gray-500 text-[12px] leading-relaxed">Designing the architecture and picking the right models for your data.</p>
          </div>
          {/* Step 3 */}
          <div className="bg-[#F8F9FE] p-8 rounded-3xl border border-[#F3F4F6] text-center">
            <div className="text-4xl font-extrabold text-[#4B28C4] mb-4">03</div>
            <h4 className="text-[15px] font-bold text-[#18113C] mb-2">Build</h4>
            <p className="text-gray-500 text-[12px] leading-relaxed">Agile development cycles with continuous testing and feedback.</p>
          </div>
          {/* Step 4 */}
          <div className="bg-[#F8F9FE] p-8 rounded-3xl border border-[#F3F4F6] text-center">
            <div className="text-4xl font-extrabold text-[#4B28C4] mb-4">04</div>
            <h4 className="text-[15px] font-bold text-[#18113C] mb-2">Scale</h4>
            <p className="text-gray-500 text-[12px] leading-relaxed">Deployment, monitoring, and ongoing optimization for growth.</p>
          </div>
        </div>
      </section>

      {/* Explore Our Services */}
      <section className="py-16 bg-[#F8F9FE] px-4 sm:px-6 lg:px-8 text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[18px] font-extrabold text-[#18113C] uppercase tracking-wide mb-10">
            EXPLORE OUR SERVICES
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Customer Support AI', 'Voice AI', 'Workflow Automation', 'Fraud Prevention', 'Custom AI Agents', 'Predictive Analytics', 'Custom AI Development', 'AI Integrations'].map((service) => (
              <a key={service} href="#" className="px-10 py-3 bg-white border border-[#E5E7EB] text-[#18113C] text-[13px] font-semibold rounded-2xl shadow-sm hover:border-[#4B28C4] hover:text-[#4B28C4] transition-all flex items-center gap-2">
                {service} 
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 pb-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-4xl overflow-hidden shadow-2xl bg-cover bg-center h-100 flex items-center justify-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop)` }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center text-white py-12 px-6 flex flex-col items-center">
            <h2 className="text-3xl md:text-[2.5rem] font-bold mb-4 tracking-tight">
              Ready to Build AI That Actually Works?
            </h2>
            <p className="text-gray-200 text-[14px] max-w-lg mx-auto mb-8 leading-relaxed font-medium">
              Stop settling for generic solutions. Let's discuss your unique challenges and build something remarkable together.
            </p>
            <button className="bg-[#5B3EE8] hover:bg-[#4B28C4] text-white px-8 py-3.5 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/30">
              Book Your Strategy Call <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
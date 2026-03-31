import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Bot,
  BrainCircuit,
  LineChart,
  Code
} from 'lucide-react';

const OurLab = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">    
        {/* Floating Icons Background */}
        <div className="absolute top-24 left-1/4 w-10 h-10 bg-white rounded-full flex shadow-sm items-center justify-center opacity-70">
            <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
        </div>
        <div className="absolute top-48 right-1/4 w-8 h-8 bg-white rounded-full flex shadow-sm items-center justify-center opacity-60">
            <Sparkles className="w-3 h-3 text-[#8B5CF6]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16 pt-10">
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-wider text-[#4B28C4] bg-[#E5E7FF] rounded-full mb-6 uppercase">
              OUR LAB
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-[#18113C] mb-6 leading-[1.1] tracking-tight">
              Our In-House AI<br/>
              <span className="text-[#4B28C4]">Development</span> Lab
            </h1>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-4">
              We build advanced <span className="text-[#4B28C4] font-semibold">AI solutions</span> alongside our consulting work. Our lab gives us the freedom to experiment, validate new ideas, and develop practical tools that show how our engineering translates into real-world impact.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-8">
              This is where we build, test, and learn - turning <span className="text-[#4B28C4] font-semibold">innovation</span> into usable products for our clients.
            </p>
            <button className="bg-[#4B28C4] text-white px-7 py-3.5 rounded-full font-semibold hover:bg-[#3A1E9D] transition-all flex items-center gap-2 shadow-lg shadow-indigo-200 text-sm">
              Explore Our Projects <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-3">
              <div className="rounded-4xl overflow-hidden h-100">
                 <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop" alt="AI Robot Hand on Keyboard" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Floating UI Elements on the image */}
            <div className="absolute top-10 -left-6 w-12 h-12 bg-[#18113C] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="absolute top-8 -right-6 w-12 h-12 bg-[#18113C] rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
              <LineChart className="w-6 h-6 text-white" />
            </div>
            <div className="absolute bottom-12 -right-6 w-12 h-12 bg-[#18113C] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12">
              <ArrowRight className="w-6 h-6 text-white transform -rotate-45" />
            </div>
            <div className="absolute bottom-6 -left-4 w-12 h-12 bg-[#18113C] rounded-2xl flex items-center justify-center shadow-lg transform rotate-6">
              <Code className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Lab Projects */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <h2 className="text-[18px] font-extrabold text-[#18113C] relative inline-block pb-3 uppercase tracking-wide mb-4">
          FEATURED LAB PROJECTS
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#5B3EE8]"></span>
        </h2>
        <p className="text-gray-500 text-[14px] leading-relaxed mb-24 max-w-2xl">
          Real products developed inside Cogniq Labs — proving our hands-on approach to AI engineering, automation, and applied machine intelligence.
        </p>

        {/* Project 1: PostGenius */}
        <div className="flex flex-col items-center text-center mb-32">
          <h3 className="text-3xl font-extrabold text-[#18113C] mb-6">PostGenius</h3>
          <p className="text-gray-500 text-[14px] leading-relaxed max-w-3xl mb-12">
            A sophisticated multi-modal AI content engine that automates entire content strategies. PostGenius demonstrates our ability to build complex AI systems that understand brand voice and generate contextually relevant content at scale.
          </p>
          <span className="inline-block px-4 py-1.5 text-[11px] font-bold text-[#18113C] bg-white border border-[#E5E7EB] rounded-full shadow-sm mb-12 uppercase tracking-wide">
            Key Capabilities
          </span>
          
          <div className="grid md:grid-cols-3 gap-6 w-full mb-12">
             {/* Capability 1 */}
             <div className="relative rounded-3xl overflow-hidden h-55 shadow-sm group">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Dashboard" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
               <div className="absolute bottom-4 left-4 right-4 bg-white py-2 px-3 rounded-xl text-center shadow-md">
                 <span className="text-[#18113C] font-bold text-[10px] uppercase tracking-wider">AI Personalized Outreach</span>
               </div>
             </div>
             {/* Capability 2 */}
             <div className="relative rounded-3xl overflow-hidden h-55 shadow-sm group">
               <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop" alt="Calendar" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
               <div className="absolute bottom-4 left-4 right-4 bg-white py-2 px-3 rounded-xl text-center shadow-md">
                 <span className="text-[#18113C] font-bold text-[10px] uppercase tracking-wider">Business Schedule Integration</span>
               </div>
             </div>
             {/* Capability 3 */}
             <div className="relative rounded-3xl overflow-hidden h-55 shadow-sm group">
               <img src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1000&auto=format&fit=crop" alt="Content" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
               <div className="absolute bottom-4 left-4 right-4 bg-white py-2 px-3 rounded-xl text-center shadow-md">
                 <span className="text-[#18113C] font-bold text-[10px] uppercase tracking-wider">Content Source Generation</span>
               </div>
             </div>
          </div>
          <button className="bg-[#5B3EE8] hover:bg-[#4B28C4] text-white px-8 py-3.5 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/30 text-sm">
            Try PostGenius For Free <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Project 2: JobMail AI */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-3xl font-extrabold text-[#18113C] mb-6">JobMail AI</h3>
          <p className="text-gray-500 text-[14px] leading-relaxed max-w-3xl mb-12">
            An intelligent Chrome extension showcasing our expertise in browser automation and highly personalized AI generation. JobMail AI integrates seamlessly with platforms like LinkedIn to understand context and create tailored outreach for specific use cases.
          </p>
          <span className="inline-block px-4 py-1.5 text-[11px] font-bold text-[#18113C] bg-white border border-[#E5E7EB] rounded-full shadow-sm mb-12 uppercase tracking-wide">
            Key Capabilities
          </span>
          
          <div className="grid md:grid-cols-3 gap-6 w-full mb-12">
             {/* Capability 1 */}
             <div className="relative rounded-3xl overflow-hidden h-55 shadow-sm group">
               <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1000&auto=format&fit=crop" alt="Email" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
               <div className="absolute bottom-4 left-4 right-4 bg-white py-2 px-3 rounded-xl text-center shadow-md">
                 <span className="text-[#18113C] font-bold text-[10px] uppercase tracking-wider">AI Personalized Email Generation</span>
               </div>
             </div>
             {/* Capability 2 */}
             <div className="relative rounded-3xl overflow-hidden h-55 shadow-sm group">
               <img src="https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=1000&auto=format&fit=crop" alt="LinkedIn" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
               <div className="absolute bottom-4 left-4 right-4 bg-white py-2 px-3 rounded-xl text-center shadow-md">
                 <span className="text-[#18113C] font-bold text-[10px] uppercase tracking-wider">Seamless LinkedIn Integration</span>
               </div>
             </div>
             {/* Capability 3 */}
             <div className="relative rounded-3xl overflow-hidden h-55 shadow-sm group">
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" alt="Success" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
               <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
               <div className="absolute bottom-4 left-4 right-4 bg-white py-2 px-3 rounded-xl text-center shadow-md">
                 <span className="text-[#18113C] font-bold text-[10px] uppercase tracking-wider">Accelerated Interview And Outreach Success</span>
               </div>
             </div>
          </div>
          <button className="bg-[#5B3EE8] hover:bg-[#4B28C4] text-white px-8 py-3.5 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/30 text-sm">
            Try JobMail AI Free <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Next-Gen AI Solutions */}
      <section className="py-24 bg-[#F8F9FE] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[18px] font-extrabold text-[#18113C] relative inline-block pb-3 uppercase tracking-wide mb-4">
            NEXT-GEN AI SOLUTIONS
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#5B3EE8]"></span>
          </h2>
          <p className="text-gray-500 text-[14px] leading-relaxed mb-16 max-w-2xl">
            AI solutions currently in development — designed to transform how you work, scale, and grow.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Solution Card 1 */}
            <div className="bg-white rounded-4xl overflow-hidden shadow-sm border border-[#F3F4F6] flex flex-col group hover:shadow-md transition-shadow">
              <div className="relative h-55 overflow-hidden bg-[#18113C]">
                 <img src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1000&auto=format&fit=crop" alt="AI Network" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 text-[10px] font-bold bg-white text-[#18113C] rounded-full shadow-sm">Upcoming Beta</span>
                 </div>
                 <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-extrabold text-white mb-1">AI Sales Agent</h3>
                 </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-gray-500 text-[13px] leading-[1.8] mb-8 pb-8 border-b border-gray-100">
                  Empower your sales team with an AI assistant that automates lead research, crafts targeted outreach, and provides real-time sales intelligence.
                </p>
                
                <h4 className="text-[12px] font-extrabold text-[#18113C] uppercase tracking-wide mb-6">What our Agents Do</h4>
                <ul className="space-y-6 flex-1">
                  <li className="flex gap-4">
                    <div className="mt-0.5"><CheckCircle2 className="w-5 h-5 text-[#5B3EE8]" /></div>
                    <div>
                      <h5 className="text-[14px] font-bold text-[#18113C] mb-1">Automated Prospect Profiling & Research</h5>
                      <p className="text-gray-500 text-[12px] leading-relaxed">Instantly gather detailed prospect data, interests, and behavior across web and social.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="mt-0.5"><CheckCircle2 className="w-5 h-5 text-[#5B3EE8]" /></div>
                    <div>
                      <h5 className="text-[14px] font-bold text-[#18113C] mb-1">Sales Workflow Automation Boosters</h5>
                      <p className="text-gray-500 text-[12px] leading-relaxed">Streamline your sales funnel by automating repetitive follow-ups and CRM updates.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="mt-0.5"><CheckCircle2 className="w-5 h-5 text-[#5B3EE8]" /></div>
                    <div>
                      <h5 className="text-[14px] font-bold text-[#18113C] mb-1">Intelligent Lead Prioritization (Scorin)</h5>
                      <p className="text-gray-500 text-[12px] leading-relaxed">Leverage predictive routing to identify and rank leads with the highest commercial potential.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution Card 2 */}
             <div className="bg-white rounded-4xl overflow-hidden shadow-sm border border-[#F3F4F6] flex flex-col group hover:shadow-md transition-shadow">
              <div className="relative h-55 overflow-hidden bg-[#18113C]">
                 <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" alt="Code Matrix" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" style={{ filter: 'hue-rotate(-45deg) saturate(2)' }} />
                 <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 text-[10px] font-bold bg-white text-[#18113C] rounded-full shadow-sm">Under Development</span>
                 </div>
                 <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-extrabold text-white mb-1">AI Workflow Engine</h3>
                 </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-gray-500 text-[13px] leading-[1.8] mb-8 pb-8 border-b border-gray-100">
                  Automate complex business processes with intelligent workflows that adapt and optimize themselves based on your patterns and preferences.
                </p>
                
                <h4 className="text-[12px] font-extrabold text-[#18113C] uppercase tracking-wide mb-6">What our Agents Do</h4>
                <ul className="space-y-6 flex-1">
                  <li className="flex gap-4">
                    <div className="mt-0.5"><CheckCircle2 className="w-5 h-5 text-[#5B3EE8]" /></div>
                    <div>
                      <h5 className="text-[14px] font-bold text-[#18113C] mb-1">Smart Process Automation</h5>
                      <p className="text-gray-500 text-[12px] leading-relaxed">Identify and eliminate redundant tasks within workflows that adapt to your business rules.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="mt-0.5"><CheckCircle2 className="w-5 h-5 text-[#5B3EE8]" /></div>
                    <div>
                      <h5 className="text-[14px] font-bold text-[#18113C] mb-1">Multi-App Integration Hub</h5>
                      <p className="text-gray-500 text-[12px] leading-relaxed">Seamlessly connect and deliver actions across your entire software ecosystem.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="mt-0.5"><CheckCircle2 className="w-5 h-5 text-[#5B3EE8]" /></div>
                    <div>
                      <h5 className="text-[14px] font-bold text-[#18113C] mb-1">Performance Optimization</h5>
                      <p className="text-gray-500 text-[12px] leading-relaxed">Gain deep insights via real-time tracking of efficiency gains and process improvements.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 pb-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-4xl overflow-hidden shadow-2xl bg-cover bg-center h-87.5 flex items-center justify-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop)` }}>
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 text-center text-white py-12 px-6 flex flex-col items-center">
            <h2 className="text-3xl md:text-[2.2rem] font-bold mb-4 tracking-tight leading-tight max-w-2xl">
              Apply Our Innovation to Your Business. Bring Our Expertise to Your Challenge
            </h2>
            <p className="text-gray-300 text-[13px] max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
              The same innovation that powers our internal lab projects can be applied to your business. If you have a unique challenge or want a custom AI solution, we're ready to build something remarkable together.
            </p>
            <button className="bg-[#5B3EE8] hover:bg-[#4B28C4] text-white px-8 py-3.5 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/30 text-sm">
              Start your AI Journey <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurLab;
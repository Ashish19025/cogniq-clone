import React from 'react';
import { Phone, Calendar, Package, Code, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    { 
      icon: Phone, 
      title: "AI-Powered Customer Service", 
      description: "Automate 80% of routine queries and turn your support center into a revenue driver." 
    },
    { 
      icon: Calendar, 
      title: "Automated Scheduling & Operations", 
      description: "Eliminate no-shows and recover thousands in lost revenue with intelligent automation." 
    },
    { 
      icon: Package, 
      title: "Intelligent Inventory Management", 
      description: "Prevent stockouts and make data-driven decisions with predictive forecasting." 
    },
    { 
      icon: Code, 
      title: "Micro Tools & Extensions", 
      description: "Lightweight tools powered by AI to boost productivity." 
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-[#18113C] relative inline-block pb-3">
              OUR SERVICES
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#5B3EE8]"></span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg">Solve your biggest challenges with end-to-end AI solutions.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-[#F8F9FE] p-8 rounded-xl border border-[#F3F4F6] transition-all hover:bg-[#F2F4FD]">
              <div className="flex flex-col gap-4 mb-3">
                <div className="bg-white w-12 h-12 flex items-center justify-center rounded-lg shadow-sm">
                  <service.icon className="w-6 h-6 text-[#5B3EE8]" />
                </div>
                <h3 className="text-[1.1rem] font-bold text-[#18113C]">{service.title}</h3>
              </div>
              <p className="text-gray-500 text-[15px] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/services" className="inline-flex items-center gap-2 font-semibold text-[#5B3EE8] hover:text-[#381B94] transition-colors">
            View all Services <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

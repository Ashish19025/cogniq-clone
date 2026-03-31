import React from 'react';
import process1 from '../../assets/process1.jpg';
import process2 from '../../assets/process2.jpg';
import process3 from '../../assets/process3.jpg';
import process4 from '../../assets/process4.jpg';

export default function Process() {
  const steps = [
    { number: "01", title: "Discovery & Strategy", description: "Understand challenges and design a strategic AI roadmap.", image: process1 },
    { number: "02", title: "Design & Prototype", description: "Detailed wireframes and interactive prototypes.", image: process2 },
    { number: "03", title: "Development & Testing", description: "Rigorous testing and continuous collaboration.", image: process3 },
    { number: "04", title: "Launch & Growth", description: "Deploy and optimize for continued success.", image: process4 },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
          <div>
            <div className="mb-2">
              <h2 className="text-2xl font-extrabold text-[#18113C] relative inline-block pb-3 uppercase">
                OUR PROCESS
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#5B3EE8]"></span>
              </h2>
            </div>
          </div>
          <p className="text-gray-500 text-sm">From concept to creation, seamlessly.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative rounded-2xl overflow-hidden group h-64 shadow-sm">
              <img src={step.image} alt={step.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60"></div>
              
              <div className="absolute top-5 left-5">
                <span className="text-sm font-bold bg-white text-[#18113C] px-3 py-1.5 rounded-full inline-block shadow-md">
                  {step.number}
                </span>
              </div>
              
              <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-200 text-sm line-clamp-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

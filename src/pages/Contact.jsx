import React, { useState } from 'react';
import { Sparkles, ArrowRight, ChevronDown } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add real submission logic later
  };

  return (
    <div className="bg-white min-h-screen pb-32">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden flex flex-col items-center text-center">
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
        
        <div className="relative z-10 w-full px-4 flex flex-col items-center max-w-4xl mx-auto pt-8">
          <span className="inline-block px-5 py-2 text-[10px] font-bold tracking-wider text-[#4B28C4] bg-[#E5E7FF] rounded-full mb-6 uppercase">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-[#4B28C4] mb-6 leading-tight tracking-tight">
            Reach out to us
          </h1>
          <p className="text-gray-500 text-[15px] md:text-[16px] leading-[1.8] max-w-2xl font-medium italic">
            Ready to build something amazing? Share your vision and let's create the perfect AI solutions together. We'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-2">
        <div className="bg-[#F8F9FE] rounded-4xl p-4 md:p-6 shadow-sm border border-[#F3F4F6] flex flex-col md:flex-row gap-8 lg:gap-14">
            
          {/* Left Side: Image */}
          <div className="w-full md:w-[45%]">
            <div className="rounded-3xl overflow-hidden h-full min-h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="AI Microchip Circuit" 
                className="w-full h-full object-cover"
                style={{ filter: 'hue-rotate(240deg) saturate(1.5)' }} 
              />
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-[55%] flex flex-col justify-center py-8 pr-4 lg:pr-10">
            <h2 className="text-[22px] font-extrabold text-[#18113C] uppercase tracking-wide relative inline-block pb-4 mb-2">
              HAVE A PROJECT IN MIND OR NEED MORE INFO?
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#4B28C4]"></span>
            </h2>
            <p className="text-gray-500 text-[14px] font-medium leading-relaxed mb-10 mt-4">
              Fill out the form below and our team will get back to you shortly
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name" 
                  className="w-full px-5 py-4 rounded-xl border border-[#E5E7EB] bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-[#4B28C4]/20 focus:border-[#4B28C4] transition-all"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email" 
                  className="w-full px-5 py-4 rounded-xl border border-[#E5E7EB] bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-[#4B28C4]/20 focus:border-[#4B28C4] transition-all"
                  required
                />
              </div>
              <div className="relative">
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-[#E5E7EB] bg-white text-[14px] text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-[#4B28C4]/20 focus:border-[#4B28C4] transition-all cursor-pointer"
                  required
                >
                  <option value="" disabled hidden>Select your subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="project">New Project</option>
                  <option value="support">Support</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none text-gray-400">
                  <ChevronDown className="w-4 h-4 text-[#4B28C4]" />
                </div>
              </div>
              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or question..." 
                  rows="4"
                  className="w-full px-5 py-4 rounded-xl border border-[#E5E7EB] bg-white text-[14px] focus:outline-none focus:ring-2 focus:ring-[#4B28C4]/20 focus:border-[#4B28C4] transition-all resize-none h-32"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#5B3EE8] hover:bg-[#4B28C4] text-white py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 shadow-sm text-[14px] mt-4"
              >
                Submit <ArrowRight className="w-4 h-4 font-normal" />
              </button>


              <div className="text-center mt-6">
                <p className="text-[12px] text-gray-500 font-medium tracking-wide">
                  Prefer email? <a href="mailto:xyz@gmail.com" className="text-[#5B3EE8] hover:underline font-bold">xyz@gmail.com</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

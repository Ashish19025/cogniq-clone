import React from 'react';
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1000&auto=format&fit=crop',
    date: 'March 15, 2026',
    tags: ['AI', 'VOICE AGENTS', 'LOCAL BUSINESS'],
    title: 'Zero Missed Calls: How AI Voice Agents Are Scaling Local Service Businesses',
    description: 'Discover how home service businesses, medical practices, and local agencies are using AI voice assistants to handle inbound calls 24/7.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1000&auto=format&fit=crop',
    date: 'March 12, 2026',
    tags: ['AI', 'CHATBOTS', 'CUSTOMER SERVICE'],
    title: 'AI Customer Service Chatbots: The Complete Guide for Digital Native Brands',
    description: 'Learn how AI customer service chatbots help digital native brands handle surge volumes, assist human agents, and improve CSAT scores.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    date: 'March 10, 2026',
    tags: ['AI', 'WORKFLOW AUTOMATION'],
    title: 'AI Workflow Automation: The Complete Guide for Digital Agencies',
    description: 'Learn how AI workflow automation transforms digital marketing agencies, reduces manual tasks, improves efficiency, and helps scale operations.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop',
    date: 'March 8, 2026',
    tags: ['AI', 'AGENTS', 'INTEGRATION'],
    title: 'Building Custom AI Agents for Your Business: A Complete Walkthrough',
    description: 'Learn how to build custom AI agents for your business. This guide covers everything from understanding AI agents to deployment.',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop',
    date: 'March 6, 2026',
    tags: ['AI', 'HEALTHCARE', 'APPOINTMENTS'],
    title: 'How AI Prevents No-Shows and Saves Your Business Thousands',
    description: 'No-shows cost businesses thousands monthly. Learn how AI-powered reminder systems, predictive analysis, and smart scheduling help prevent missed appointments.',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1485686531765-a80a4714a66e?q=80&w=1000&auto=format&fit=crop',
    date: 'March 2, 2026',
    tags: ['AI', 'AUTOMATION', 'WORKFLOW'],
    title: 'Automate Your Workflow with AI: A Practical Guide',
    description: 'Discover how to automate your workflow with AI and transform your agency operations, saving hours every week while delivering better results.',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?q=80&w=1000&auto=format&fit=crop',
    date: 'February 28, 2026',
    tags: ['AI', 'CUSTOMER SUPPORT', 'AUTOMATION'],
    title: 'How AI Customer Support Automation Saves Agencies 20+ Hours a Week',
    description: 'Discover how AI customer support automation helps agencies save time, improve ticket resolution rates, and elevate client satisfaction securely.',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop',
    date: 'February 22, 2026',
    tags: ['AI', 'AGENTS', 'AUTOMATION'],
    title: 'Building Your First AI Agent: A Step-by-Step Guide for 2026',
    description: 'Ready to build your first AI agent? This comprehensive guide walks you through the process from concept to deployment.',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop',
    date: 'February 15, 2026',
    tags: ['AI', 'PHONE RECEPTIONIST'],
    title: 'AI Phone Receptionist: Complete Guide for Small Businesses',
    description: 'Everything you need to know about AI phone receptionists for small business. Includes pricing, productivity benefits, and setup.',
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1000&auto=format&fit=crop',
    date: 'February 12, 2026',
    tags: ['AI', 'CLOUDBOT', 'TUTORIAL'],
    title: 'How to Install and Customize CloudBot for Your Business in 2026',
    description: 'A step-by-step guide to installing, configuring, and customizing CloudBot (OpenChat) for your business. From self-hosting to custom prompt engineering.',
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop',
    date: 'February 5, 2026',
    tags: ['AI', 'CUSTOMER SERVICE', 'PRICING'],
    title: 'How Much Does AI Customer Service Cost in 2026? Complete Breakdown',
    description: 'A comprehensive guide to AI customer service pricing in 2026. Learn the real costs of SaaS solutions vs custom AI development, with ROI examples.',
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1000&auto=format&fit=crop',
    date: 'November 12, 2025',
    tags: ['AI AUTOMATION', 'BUSINESS OPERATIONS'],
    title: 'How AI is Transforming Business Operations in 2026: A Complete View',
    description: 'Discover how artificial intelligence is revolutionizing business operations in 2026. Learn about AI automation, customer service bots, and predictive analytics.',
  }
];

export default function Blogs() {
  return (
    <div className="bg-white min-h-screen pb-32">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden flex flex-col items-center text-center">
        {/* Floating Icons */}
        <div className="absolute top-24 left-1/4 w-10 h-10 bg-white rounded-full flex shadow-sm items-center justify-center opacity-70">
            <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
        </div>
        <div className="absolute top-48 right-1/4 w-8 h-8 bg-white rounded-full flex shadow-sm items-center justify-center opacity-60">
            <Sparkles className="w-3 h-3 text-[#8B5CF6]" />
        </div>
        
        <div className="relative z-10 w-full px-4 flex flex-col items-center max-w-4xl mx-auto pt-8">
          <span className="inline-block px-5 py-2 text-[10px] font-bold tracking-wider text-[#4B28C4] bg-[#E5E7FF] rounded-full mb-6 uppercase">
            Blog & Insights
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#4B28C4] mb-6 leading-tight tracking-tight">
            Latest from Cogniq AI
          </h1>
          <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed max-w-2xl font-medium">
            Insights, updates, and deep dives into how AI is transforming business operations.
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-4xl overflow-hidden shadow-sm border border-[#F3F4F6] group hover:shadow-md transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-white text-[#18113C] text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {blog.date}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="text-[#5B3EE8] bg-[#F8F9FE] px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase border border-[#E5E7FF]">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-[17px] font-bold text-[#18113C] mb-3 leading-snug group-hover:text-[#4B28C4] transition-colors line-clamp-3">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-[13px] leading-[1.8] mb-6 line-clamp-3 flex-1">
                  {blog.description}
                </p>
                <div className="mt-auto">
                    <a href="#" className="inline-flex items-center gap-1.5 text-[#5B3EE8] text-[12px] font-bold hover:gap-2 transition-all uppercase tracking-wide">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 pt-8 gap-4">
          <p className="text-[13px] text-gray-500 font-medium">Page 1 of 3</p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-[13px] font-semibold text-gray-400 flex items-center gap-1 hover:text-[#18113C] transition-colors disabled:opacity-50" disabled>
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            <button className="w-9 h-9 rounded-xl bg-[#4B28C4] text-white text-[13px] font-bold flex items-center justify-center shadow-sm">
              1
            </button>
            <button className="w-9 h-9 rounded-xl bg-[#F8F9FE] text-[#18113C] text-[13px] font-bold flex items-center justify-center hover:bg-[#E5E7FF] transition-colors">
              2
            </button>
            <button className="w-9 h-9 rounded-xl bg-[#F8F9FE] text-[#18113C] text-[13px] font-bold flex items-center justify-center hover:bg-[#E5E7FF] transition-colors">
              3
            </button>
            <button className="px-4 py-2 text-[13px] font-semibold text-[#18113C] flex items-center gap-1 hover:text-[#4B28C4] transition-colors border-gray-500 bg-gray-100 rounded-xl hover:bg-gray-200">
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

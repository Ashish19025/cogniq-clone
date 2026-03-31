import React from 'react';
import { BrainCircuit } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1C1C1E] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <BrainCircuit className="w-8 h-8 text-[#8B5CF6]" />
              <span className="text-xl font-bold tracking-tight text-white">Cogniq AI</span>
            </div>
            <p className="text-gray-400 text-xs mb-6">A Cogniq Labs Device</p>
            <p className="text-gray-400 text-sm mb-6 max-w-xs leading-relaxed">
              Building intelligent AI apps that transform how you interact with technology.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#8B5CF6] hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" className="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" aria-label="Github" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#8B5CF6] hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#8B5CF6] hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-white text-sm">Company</h4>
            <ul className="space-y-4 text-xs font-medium text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-white text-sm">AI Solutions</h4>
            <ul className="space-y-4 text-xs font-medium text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Custom AI Agents</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Voice AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Support AI</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-white text-sm">Services</h4>
            <ul className="space-y-4 text-xs font-medium text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Workflow Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Predictive Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors inline-flex items-center gap-1">All Services →</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white text-sm">Products</h4>
            <ul className="space-y-4 text-xs font-medium text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">AI Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">JOB MATE</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Freelance AI</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© 2024 Cogniq AI. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms of service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

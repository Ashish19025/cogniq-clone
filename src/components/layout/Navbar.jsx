import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrainCircuit, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinkClass = (path) => {
    return `text-sm font-semibold transition-colors ${
      isActive(path) ? 'text-[#8B5CF6]' : 'text-gray-600 hover:text-[#4B28C4]'
    }`;
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <BrainCircuit className="w-8 h-8 text-[#4B28C4]" />
            <span className="text-xl font-extrabold tracking-tight text-[#2B1B54]">Cogniq AI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/about" className={navLinkClass('/about')}>About Us</Link>
            <Link to="/services" className={navLinkClass('/services')}>Services</Link>
            <Link to="/our-lab" className={navLinkClass('/our-lab')}>Our Lab</Link>
            <Link to="/blogs" className={navLinkClass('/blogs')}>Blogs</Link>
            <Link to="/contact" className="px-5 py-2.5 rounded-lg bg-[#4B28C4] text-white font-semibold text-sm hover:bg-[#381B94] transition-all">
              Contact Us
            </Link>
          </div>

          <button 
            className="md:hidden p-2 text-gray-600 hover:text-[#4B28C4] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-4 shadow-lg">
          <Link to="/" className={`block font-semibold ${isActive('/') ? 'text-[#8B5CF6]' : 'text-gray-600 hover:text-[#4B28C4]'}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className={`block font-semibold ${isActive('/about') ? 'text-[#8B5CF6]' : 'text-gray-600 hover:text-[#4B28C4]'}`} onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/services" className={`block font-semibold ${isActive('/services') ? 'text-[#8B5CF6]' : 'text-gray-600 hover:text-[#4B28C4]'}`} onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/our-lab" className={`block font-semibold ${isActive('/our-lab') ? 'text-[#8B5CF6]' : 'text-gray-600 hover:text-[#4B28C4]'}`} onClick={() => setIsMenuOpen(false)}>Our Lab</Link>
          <Link to="/blogs" className={`block font-semibold ${isActive('/blogs') ? 'text-[#8B5CF6]' : 'text-gray-600 hover:text-[#4B28C4]'}`} onClick={() => setIsMenuOpen(false)}>Blogs</Link>
          <Link to="/contact" className="block px-4 py-3 mt-4 text-center rounded-lg bg-[#4B28C4] text-white font-semibold shadow-md" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

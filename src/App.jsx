import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import OurLab from './pages/OurLab';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <div className="bg-cogniq-bg font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/our-lab" element={<OurLab />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


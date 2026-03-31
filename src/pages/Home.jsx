import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Process from '../components/sections/Process';
import Cta from '../components/sections/Cta';
import FinalCta from '../components/sections/FinalCta';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Cta />
      <FinalCta />
    </>
  );
}


import React, { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Reviews from '@/components/Reviews';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(true);
  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation isOpen={isMenuOpen} onClose={handleMenuClose} />
      <Header onMenuToggle={handleMenuToggle} />
      <Hero />
      <Intro />
      <Services />
      <WhyUs />
      <Reviews />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

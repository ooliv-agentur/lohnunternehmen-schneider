
import React, { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import NewHero from '@/components/NewHero';
import NewIntro from '@/components/NewIntro';
import NewServices from '@/components/NewServices';
import NewTrust from '@/components/NewTrust';
import MachineGallery from '@/components/MachineGallery';
import NewReviews from '@/components/NewReviews';
import NewContact from '@/components/NewContact';
import NewFooter from '@/components/NewFooter';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(true);
  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation isOpen={isMenuOpen} onClose={handleMenuClose} />
      <Header onMenuToggle={handleMenuToggle} />
      <NewHero />
      <NewIntro />
      <NewServices />
      <NewTrust />
      <MachineGallery />
      <NewReviews />
      <NewContact />
      <NewFooter />
    </div>
  );
};

export default Index;

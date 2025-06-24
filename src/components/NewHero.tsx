
import React from 'react';
import { Button } from '@/components/ui/button';

const NewHero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center bg-gray-50 overflow-hidden">
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-4xl space-y-12">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
              Spezialtechnik für Baumarbeiten, Forstpflege & Landwirtschaft
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl">
              Zertifizierte Fachkräfte im Westerwald – seit 2004
            </p>
          </div>
          
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-12 py-6 rounded-lg"
            >
              Jetzt Angebot anfordern
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;

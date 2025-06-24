
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-100 overflow-hidden">
      {/* Background image placeholder - now with better visual treatment */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-green-200/40 to-gray-200/30"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-4xl space-y-12">
          {/* Small intro line */}
          <div className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg">
            Seit 2004 im Westerwald
          </div>
          
          {/* Simplified headline */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-gray-900">
              <span className="block text-green-700">Professionelle</span>
              <span className="block text-gray-900">Baumarbeiten</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed max-w-3xl">
              Spezialtechnik für Fällung, Forstpflege & EPS-Bekämpfung
            </p>
          </div>
          
          {/* Clear CTA separation */}
          <div className="space-y-6 pt-8">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white text-xl px-12 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Jetzt Kontakt aufnehmen
            </Button>
            
            <div className="text-gray-600 text-lg font-medium">
              Kostenlose Beratung & Erstbesichtigung
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

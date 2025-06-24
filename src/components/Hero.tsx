
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-100 overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-green-200/40 to-gray-200/30"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-4xl space-y-16">
          {/* Strong bold statement as H1 */}
          <div className="space-y-8">
            <h1 className="text-7xl md:text-9xl font-black leading-tight text-gray-900">
              <span className="block text-green-700">Sicher.</span>
              <span className="block text-gray-900">Zertifiziert.</span>
              <span className="block text-green-600">Einsatzbereit.</span>
            </h1>
          </div>

          {/* Simplified supporting text */}
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed max-w-2xl">
              Professionelle Baumarbeiten im Westerwald seit 2004
            </p>
            
            <div className="inline-block px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-lg">
              Spezialtechnik für Fällung & Forstpflege
            </div>
          </div>
          
          {/* Clear CTA */}
          <div className="space-y-6 pt-8">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white text-xl px-12 py-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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

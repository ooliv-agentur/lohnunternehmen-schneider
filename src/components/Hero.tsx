
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden">
      {/* Light background with subtle nature-inspired gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent z-10"></div>
      
      {/* Optional background image placeholder - light and subtle */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-green-100/30 to-gray-100/20"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-4xl space-y-12">
          {/* Small intro line */}
          <div className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg">
            Seit 2004 im Westerwald
          </div>
          
          {/* Main headline - simplified and bold */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-gray-900">
              <span className="block text-green-700">Sicher. Zertifiziert.</span>
              <span className="block text-gray-900">Einsatzbereit.</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed max-w-3xl">
              Spezialtechnik für Baumarbeiten, Forstpflege & Landwirtschaft
            </p>
          </div>
          
          {/* CTA Section with proper spacing */}
          <div className="space-y-4 pt-8">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white text-xl px-12 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Jetzt unverbindlich Angebot anfordern
            </Button>
            
            {/* Secondary info - smaller and below button */}
            <div className="text-gray-500 text-base">
              Kostenlose Besichtigung & Erstberatung
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
      {/* Full-width background image placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-cover bg-center bg-gray-700">
        {/* Image placeholder - will be replaced with authentic forestry/machinery images */}
        <div className="w-full h-full bg-gradient-to-br from-green-800/30 to-gray-800/50 flex items-center justify-end pr-20">
          <div className="text-white/20 text-right">
            <div className="text-6xl font-light mb-4">MASCHINENPARK</div>
            <div className="text-2xl">IM EINSATZ</div>
          </div>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-2 bg-green-600 text-white text-sm font-medium rounded mb-8">
            Seit 2004 im Westerwald
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
            <span className="block">Spezialtechnik für</span>
            <span className="block text-green-400">Baumarbeiten, Forst</span>
            <span className="block">& Landwirtschaft</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-200 mb-4 font-light">
            Sicher. Zertifiziert. Einsatzbereit im Westerwald.
          </p>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl">
            Ihr Partner für professionelle Baumarbeiten, EPS-Bekämpfung und Spezialmaschinen – 
            für Kommunen, Landwirte und Forstämter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white text-xl px-10 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Jetzt unverbindlich Angebot anfordern
            </Button>
            <div className="text-gray-300 text-sm pt-2">
              Kostenlose Besichtigung & Erstberatung
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

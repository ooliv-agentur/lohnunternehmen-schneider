
import React from 'react';
import { TreePine, Wrench, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 to-transparent"></div>
      <div className="absolute top-32 right-20 w-40 h-40 border-2 border-green-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 left-32 w-28 h-28 border border-green-400 rotate-45 opacity-25"></div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 pt-20">
        <div className="inline-block px-6 py-3 bg-green-600 text-white rounded-full text-sm font-semibold mb-10 shadow-lg">
          Seit über 20 Jahren im Westerwald zwischen Köln und Frankfurt
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold mb-10 leading-tight text-gray-900 tracking-tight">
          Wir wissen, wie man
          <span className="block text-green-700">20 Meter hohe Fichten</span>
          <span className="block text-gray-900">sicher fällt.</span>
        </h1>
        
        <p className="text-2xl md:text-3xl mb-10 text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
          Und warum Blühstreifen Arten retten. Professionelle Baumarbeiten & Spezialtechnik aus dem Westerwald.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-green-700 hover:bg-green-800 text-white text-xl px-12 py-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Anfrage starten – ohne Schnickschnack
          </Button>
          <div className="text-green-700 font-medium bg-green-50 px-6 py-3 rounded-full border border-green-200">
            Kostenlose Erstberatung & Besichtigung
          </div>
        </div>

        {/* Enhanced Image Placeholder */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-green-100 via-white to-green-50 rounded-3xl h-96 flex items-center justify-center border-2 border-green-200 shadow-2xl overflow-hidden">
            <div className="text-center">
              <div className="flex justify-center space-x-6 mb-6">
                <TreePine className="h-20 w-20 text-green-500" />
                <Wrench className="h-20 w-20 text-green-600" />
                <Shield className="h-20 w-20 text-green-700" />
              </div>
              <span className="text-green-700 text-2xl font-bold block mb-2">Waldarbeiten & Maschinen im Einsatz</span>
              <div className="text-green-600 font-medium">Authentische Bilder folgen – hier wird Ihr Maschinenpark präsentiert</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { TreePine, Wrench, Shield, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 to-transparent"></div>
      <div className="absolute top-32 right-20 w-40 h-40 border-2 border-green-300 rounded-full opacity-20"></div>
      <div className="absolute bottom-40 left-32 w-28 h-28 border border-green-400 rotate-45 opacity-25"></div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 pt-20">
        <div className="inline-block px-6 py-3 bg-green-600 text-white rounded-full text-sm font-semibold mb-10 shadow-lg">
          Seit 2004 im Westerwald
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-10 leading-tight text-gray-900 tracking-tight">
          <span className="block text-green-700">Sicher. Flexibel.</span>
          <span className="block text-gray-900">Spezialisiert auf</span>
          <span className="block text-green-700">Baumarbeiten & Technik</span>
          <span className="block text-2xl md:text-3xl font-light text-gray-600 mt-6">im Forst</span>
        </h1>
        
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          Ihr Partner für Baumarbeiten, EPS-Bekämpfung und Spezialmaschinen – 
          für Kommunen, Landwirte und Forstämter.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-green-700 hover:bg-green-800 text-white text-xl px-12 py-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Jetzt Angebot anfordern
          </Button>
          <Button 
            variant="outline"
            size="lg" 
            className="border-green-600 text-green-700 hover:bg-green-50 text-xl px-12 py-8 rounded-2xl border-2"
          >
            Kostenlose Vor-Ort-Besichtigung
          </Button>
        </div>

        {/* Hero Image Placeholder */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-green-100 via-white to-green-50 rounded-3xl h-96 flex items-center justify-center border-2 border-green-200 shadow-2xl overflow-hidden">
            <div className="text-center">
              <div className="flex justify-center space-x-8 mb-6">
                <TreePine className="h-16 w-16 text-green-600" />
                <Wrench className="h-16 w-16 text-green-700" />
                <Shield className="h-16 w-16 text-green-800" />
              </div>
              <span className="text-green-700 text-xl font-bold block mb-2">Professionelle Waldarbeiten im Einsatz</span>
              <div className="text-green-600 font-medium">Maschinenpark & Spezialtechnik</div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

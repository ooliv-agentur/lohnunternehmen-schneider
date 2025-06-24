
import React from 'react';
import { TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-transparent"></div>
      <div className="absolute top-20 right-10 w-32 h-32 border-2 border-green-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 border border-green-300 opacity-30"></div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20">
        <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8">
          Seit über 20 Jahren im Westerwald
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight text-gray-900 tracking-tight">
          Im Einsatz für Natur,
          <span className="block text-green-700">Landschaft & Sicherheit</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto font-light">
          Professionelle Baumarbeiten & Spezialtechnik aus dem Westerwald
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-6 rounded-xl shadow-lg"
          >
            Jetzt unverbindlich Angebot anfordern
          </Button>
          <div className="text-sm text-gray-500">
            Kostenlose Erstberatung & Besichtigung
          </div>
        </div>

        {/* Image Placeholder - Stylized */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center border border-gray-300 shadow-lg">
            <div className="text-center">
              <TreePine className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <span className="text-gray-500 text-lg font-medium">Waldarbeiten & Maschinen im Einsatz</span>
              <div className="text-sm text-gray-400 mt-2">Authentische Bilder folgen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

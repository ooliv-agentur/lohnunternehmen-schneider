
import React from 'react';
import { Button } from '@/components/ui/button';

const NewHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-100 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-100 via-green-50/30 to-gray-200/40"></div>
      </div>

      <div className="relative z-20 w-full mx-auto px-4 sm:px-6 py-32">
        <div className="max-w-5xl space-y-8 sm:space-y-12">
          {/* Main H1 claim */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight text-gray-900">
              <span className="block text-green-700">Sicher.</span>
              <span className="block text-gray-900">Zertifiziert.</span>
              <span className="block text-green-600">Einsatzbereit.</span>
            </h1>
          </div>

          {/* H2 with regional focus */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-lg sm:text-2xl md:text-4xl text-gray-800 font-light leading-relaxed max-w-4xl">
              Baumarbeiten & Spezialtechnik im Westerwald – seit 2004
            </h2>
          </div>
          
          {/* Clear CTAs */}
          <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-6">
            <div className="flex flex-col gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Spezialtechnik für Fällung & Forstpflege
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="w-full sm:w-auto border-2 border-green-600 text-green-700 hover:bg-green-50 text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 rounded-xl transition-all duration-300"
              >
                Jetzt Kontakt aufnehmen
              </Button>
            </div>
            
            <div className="text-gray-600 text-base sm:text-lg font-medium">
              Kostenlose Beratung & Erstbesichtigung
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;

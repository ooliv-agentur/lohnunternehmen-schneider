
import React from 'react';
import { Button } from '@/components/ui/button';

const NewHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-50 via-white to-gray-100/50"></div>
      </div>

      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 py-32">
        <div className="text-center space-y-8 sm:space-y-12">
          {/* Main H1 claim */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight text-gray-900 max-w-4xl mx-auto">
              Spezialtechnik für Baumarbeiten & Forstpflege
            </h1>
          </div>

          {/* H2 subheadline */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-3xl md:text-4xl text-gray-800 font-light leading-relaxed max-w-3xl mx-auto">
              Sicher. Zertifiziert. Einsatzbereit. Seit 2004 im Westerwald.
            </h2>
          </div>
          
          {/* Optional description */}
          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
              Professionelle Lösungen für Kommunen, Landwirte & Forstämter.
            </p>
          </div>
          
          {/* Clear CTAs */}
          <div className="space-y-6 pt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Jetzt Kontakt aufnehmen
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-6 rounded-lg transition-all duration-300"
              >
                Kostenlose Erstberatung sichern
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;

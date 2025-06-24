
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

const NewContact: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white">
      <div className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Jetzt Kontakt aufnehmen
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-2xl lg:max-w-3xl mx-auto">
          Rufen Sie uns an oder schreiben Sie uns – wir beraten Sie ehrlich & erstellen ein Angebot.
        </p>
        
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
          >
            Jetzt Kontakt aufnehmen
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center group">
            <Phone className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-green-400 mb-3 sm:mb-4" />
            <p className="font-semibold text-lg sm:text-xl text-white group-hover:text-green-400 transition-colors">02662 / 948186</p>
            <p className="text-gray-400 text-sm sm:text-base">Festnetz</p>
          </div>
          
          <div className="flex flex-col items-center group">
            <Phone className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-green-400 mb-3 sm:mb-4" />
            <p className="font-semibold text-lg sm:text-xl text-white group-hover:text-green-400 transition-colors">0170 / 9091450</p>
            <p className="text-gray-400 text-sm sm:text-base">Mobil</p>
          </div>
          
          <div className="flex flex-col items-center group sm:col-span-2 lg:col-span-1">
            <Mail className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-green-400 mb-3 sm:mb-4" />
            <p className="font-semibold text-base sm:text-lg text-white group-hover:text-green-400 transition-colors break-all text-center">info@lohnunternehmen-schneider.de</p>
            <p className="text-gray-400 text-sm sm:text-base">E-Mail</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContact;

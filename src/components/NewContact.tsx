
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

const NewContact: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Jetzt Kontakt aufnehmen
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Rufen Sie uns an oder schreiben Sie uns – wir beraten Sie ehrlich & erstellen ein Angebot.
        </p>
        
        <div className="mb-12">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-12 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Jetzt Kontakt aufnehmen
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center group">
            <Phone className="h-8 w-8 text-green-400 mb-4" />
            <p className="font-semibold text-xl text-white group-hover:text-green-400 transition-colors">02662 / 948186</p>
            <p className="text-gray-400">Festnetz</p>
          </div>
          
          <div className="flex flex-col items-center group">
            <Phone className="h-8 w-8 text-green-400 mb-4" />
            <p className="font-semibold text-xl text-white group-hover:text-green-400 transition-colors">0170 / 9091450</p>
            <p className="text-gray-400">Mobil</p>
          </div>
          
          <div className="flex flex-col items-center group">
            <Mail className="h-8 w-8 text-green-400 mb-4" />
            <p className="font-semibold text-lg text-white group-hover:text-green-400 transition-colors break-all">info@lohnunternehmen-schneider.de</p>
            <p className="text-gray-400">E-Mail</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContact;

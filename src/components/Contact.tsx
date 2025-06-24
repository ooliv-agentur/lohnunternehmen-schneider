
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Anfrage starten – ohne Schnickschnack
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Rufen Sie uns an oder schreiben Sie uns. Wir erstellen Ihnen ein maßgeschneidertes Angebot – ehrlich, schnell, direkt.
        </p>
        
        <div className="mb-10">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Jetzt Kontakt aufnehmen
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          <div className="flex items-center group">
            <Phone className="h-5 w-5 text-green-400 mr-3" />
            <div className="text-left">
              <p className="font-semibold text-lg text-white group-hover:text-green-400 transition-colors">02662 / 948186</p>
              <p className="text-gray-400 text-sm">Festnetz</p>
            </div>
          </div>
          
          <div className="flex items-center group">
            <Phone className="h-5 w-5 text-green-400 mr-3" />
            <div className="text-left">
              <p className="font-semibold text-lg text-white group-hover:text-green-400 transition-colors">0170 / 9091450</p>
              <p className="text-gray-400 text-sm">Mobil</p>
            </div>
          </div>
          
          <div className="flex items-center group">
            <Mail className="h-5 w-5 text-green-400 mr-3" />
            <div className="text-left">
              <p className="font-semibold text-lg text-white group-hover:text-green-400 transition-colors">info@lohnunternehmen-schneider.de</p>
              <p className="text-gray-400 text-sm">E-Mail</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

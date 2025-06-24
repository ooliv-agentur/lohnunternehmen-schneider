
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-32 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-8">
          Anfrage starten – ohne Schnickschnack
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Rufen Sie uns an oder schreiben Sie uns. Wir erstellen Ihnen ein maßgeschneidertes Angebot – ehrlich, schnell, direkt.
        </p>
        
        <div className="mb-12">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white text-xl px-12 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Jetzt Kontakt aufnehmen
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="flex items-center group">
            <Phone className="h-6 w-6 text-green-400 mr-3" />
            <div className="text-left">
              <p className="font-bold text-xl text-white group-hover:text-green-400 transition-colors">02661 / 123456</p>
              <p className="text-gray-400">Festnetz</p>
            </div>
          </div>
          
          <div className="flex items-center group">
            <Phone className="h-6 w-6 text-green-400 mr-3" />
            <div className="text-left">
              <p className="font-bold text-xl text-white group-hover:text-green-400 transition-colors">0171 / 1234567</p>
              <p className="text-gray-400">Mobil</p>
            </div>
          </div>
          
          <div className="flex items-center group">
            <Mail className="h-6 w-6 text-green-400 mr-3" />
            <div className="text-left">
              <p className="font-bold text-lg text-white group-hover:text-green-400 transition-colors">info@schneider-lohnunternehmen.de</p>
              <p className="text-gray-400">E-Mail</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

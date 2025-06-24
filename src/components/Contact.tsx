
import React from 'react';
import { Button } from '@/components/ui/button';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Jetzt unverbindlich Angebot anfordern
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Rufen Sie uns an oder schreiben Sie uns. Wir beraten Sie gerne und erstellen 
          Ihnen ein maßgeschneidertes Angebot für Ihr Projekt.
        </p>
        
        <div className="mb-12">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-12 py-6 rounded-xl">
            Kontakt aufnehmen
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-semibold text-xl text-white mb-1">02661 / 123456</p>
            <p className="text-gray-400">Festnetz</p>
          </div>
          <div>
            <p className="font-semibold text-xl text-white mb-1">0171 / 1234567</p>
            <p className="text-gray-400">Mobil</p>
          </div>
          <div>
            <p className="font-semibold text-xl text-white mb-1">info@schneider-lohnunternehmen.de</p>
            <p className="text-gray-400">E-Mail</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

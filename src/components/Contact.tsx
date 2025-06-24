
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-32 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-8">
          Anfrage starten – ohne Schnickschnack
        </h2>
        <p className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
          Rufen Sie uns an, schreiben Sie uns oder kommen Sie vorbei. 
          Wir beraten Sie ehrlich und erstellen Ihnen ein Angebot, das passt.
        </p>
        
        <div className="mb-16">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white text-2xl px-16 py-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Jetzt Kontakt aufnehmen
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto mb-16">
          <div className="group">
            <Phone className="h-8 w-8 text-green-400 mx-auto mb-4" />
            <p className="font-bold text-2xl text-white mb-2 group-hover:text-green-400 transition-colors">02661 / 123456</p>
            <p className="text-gray-400 text-lg">Festnetz</p>
          </div>
          <div className="group">
            <Phone className="h-8 w-8 text-green-400 mx-auto mb-4" />
            <p className="font-bold text-2xl text-white mb-2 group-hover:text-green-400 transition-colors">0171 / 1234567</p>
            <p className="text-gray-400 text-lg">Mobil – auch am Wochenende</p>
          </div>
          <div className="group">
            <Mail className="h-8 w-8 text-green-400 mx-auto mb-4" />
            <p className="font-bold text-xl text-white mb-2 group-hover:text-green-400 transition-colors break-all">info@schneider-lohnunternehmen.de</p>
            <p className="text-gray-400 text-lg">E-Mail</p>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl mx-auto">
          <MapPin className="h-8 w-8 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Sebastian Schneider Lohnunternehmen</h3>
          <p className="text-gray-300 text-lg mb-2">Auf dem Röfel 6</p>
          <p className="text-gray-300 text-lg">57629 Merkelbach</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

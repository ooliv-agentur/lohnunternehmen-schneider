
import React from 'react';
import { Clock, Award, TreePine, Users } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Deshalb beauftragen uns Kommunen, Landwirte & Forstämter
          </h2>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Weil wir effizient, flexibel und mit zertifizierter Technik arbeiten.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-green-100 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <Clock className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Effiziente Umsetzung</h3>
            <p className="text-gray-600 leading-relaxed">
              Ohne lange Wartezeiten – mit eigenem Maschinenpark sofort einsatzbereit.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-green-100 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Zertifizierte Qualität</h3>
            <p className="text-gray-600 leading-relaxed">
              European Tree Worker-Zertifizierung und fachgerechte Ausbildung aller Mitarbeiter.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-green-100 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <TreePine className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Spezialtechnik</h3>
            <p className="text-gray-600 leading-relaxed">
              Moderne Ausrüstung für schwierige Einsätze in Hanglagen und Wohngebieten.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-green-100 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-green-200 transition-colors">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Persönliche Beratung</h3>
            <p className="text-gray-600 leading-relaxed">
              Kostenlose Vor-Ort-Besichtigung und maßgeschneiderte Lösungen für Ihr Projekt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

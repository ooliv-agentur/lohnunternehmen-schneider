
import React from 'react';
import { CheckCircle, Users, Wrench } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Maschinenpark & Team
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Unser Maschinenpark im Einsatz – modern, leistungsstark, bereit.
          </p>
        </div>

        {/* Large Image Placeholder */}
        <div className="bg-gradient-to-r from-green-100 to-gray-100 rounded-2xl p-16 mb-12 text-center border border-green-200">
          <div className="max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Wrench className="h-12 w-12 text-green-600" />
            </div>
            <p className="text-lg text-gray-700 font-medium">
              Hier folgt eine echte Fotobühne mit Maschinen und Team im Einsatz
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Moderne Ausstattung</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Spezialtechnik und Fahrzeuge für jeden Einsatz – von der Baumfällung bis zur Geländebearbeitung.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Erfahrenes Team</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Qualifizierte Fachkräfte mit langjähriger Praxis in anspruchsvollen Projekten.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Wrench className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Vollservice</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Komplette Projektabwicklung aus einer Hand – von der Planung bis zur Umsetzung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

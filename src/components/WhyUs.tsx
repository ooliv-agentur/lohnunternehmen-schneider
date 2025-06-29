
import React from 'react';
import { BadgeCheck, Shield, Tractor } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-lg text-gray-600 mb-4 font-medium">Verlässlichkeit seit 2004</p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Seit über 20 Jahren im Einsatz für
            <span className="block text-green-700">Sicherheit, Nachhaltigkeit & Artenvielfalt</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="text-center group">
            <div className="bg-white p-10 rounded-2xl shadow-sm mb-8 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
              <BadgeCheck className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">20+ Jahre Erfahrung</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Seit 2004 als Familienbetrieb etabliert. Zwischen Köln und Frankfurt verwurzelt, 
                deutschlandweit im Einsatz.
              </p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white p-10 rounded-2xl shadow-sm mb-8 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
              <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Zertifizierte Fachkräfte</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                European Tree Workers und Spezialisten nach höchsten Sicherheitsstandards. 
                Dort arbeiten, wo andere nicht können.
              </p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white p-10 rounded-2xl shadow-sm mb-8 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
              <Tractor className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Eigener Maschinenpark</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Umfangreiche, moderne Ausstattung für effiziente Projektumsetzung. 
                Keine Wartezeiten, keine Kompromisse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

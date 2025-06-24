
import React from 'react';
import { Shield, Wrench, Tractor, TreePine } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Deshalb beauftragen uns Kommunen, 
            <span className="block text-green-700">Landwirte und Forstämter</span>
          </h2>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Über 20 Jahre Erfahrung treffen auf modernste Technik und zertifizierte Fachkräfte – 
            das macht den Unterschied.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
              <span className="text-green-800 font-bold text-2xl">20+</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Jahre Erfahrung</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Seit 2004 als Familienbetrieb etabliert. Zwischen Köln und Frankfurt verwurzelt, 
              deutschlandweit im Einsatz.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-10 w-10 text-green-800" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Zertifizierte Fachkräfte</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              European Tree Workers und Spezialisten nach höchsten Sicherheitsstandards. 
              Dort arbeiten, wo andere nicht können.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
              <Wrench className="h-10 w-10 text-green-800" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Eigener Maschinenpark</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Umfangreiche, moderne Ausstattung für effiziente Projektumsetzung. 
              Keine Wartezeiten, keine Kompromisse.
            </p>
          </div>
        </div>

        {/* Enhanced Team Image Placeholder */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 via-white to-green-100 rounded-3xl h-96 flex items-center justify-center border-2 border-green-200 shadow-2xl overflow-hidden">
            <div className="text-center">
              <div className="flex justify-center space-x-8 mb-8">
                <Tractor className="h-16 w-16 text-green-500" />
                <TreePine className="h-16 w-16 text-green-600" />
                <Shield className="h-16 w-16 text-green-700" />
              </div>
              <span className="text-green-700 text-2xl font-bold block mb-3">Team & Maschinenpark</span>
              <div className="text-green-600 font-medium text-lg">
                Hier präsentieren wir Ihnen unser Team und unsere Ausstattung
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

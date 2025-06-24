
import React from 'react';
import { Shield, Wrench, Tractor, TreePine } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Warum Sebastian Schneider Lohnunternehmen?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Über 20 Jahre Erfahrung treffen auf modernste Technik und zertifizierte Fachkräfte
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-green-700 font-bold text-xl">20+</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Jahre Erfahrung</h3>
            <p className="text-gray-600">Seit 2004 als Familienbetrieb im Westerwald zwischen Köln und Frankfurt etabliert.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-green-700" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Zertifizierte Fachkräfte</h3>
            <p className="text-gray-600">European Tree Workers und Spezialisten nach höchsten Sicherheitsstandards.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wrench className="h-8 w-8 text-green-700" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Eigener Maschinenpark</h3>
            <p className="text-gray-600">Umfangreiche, moderne Ausstattung für effiziente Projektumsetzung.</p>
          </div>
        </div>

        {/* Team Image Placeholder */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-80 flex items-center justify-center border border-gray-300 shadow-lg overflow-hidden">
            <div className="text-center">
              <div className="flex justify-center space-x-4 mb-4">
                <Tractor className="h-12 w-12 text-gray-400" />
                <TreePine className="h-12 w-12 text-gray-400" />
                <Shield className="h-12 w-12 text-gray-400" />
              </div>
              <span className="text-gray-500 text-lg font-medium">Team & Maschinenpark</span>
              <div className="text-sm text-gray-400 mt-2">Authentische Bilder in Vorbereitung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

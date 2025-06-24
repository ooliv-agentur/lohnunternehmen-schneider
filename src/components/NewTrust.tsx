
import React from 'react';
import { BadgeCheck, Shield, Tractor } from 'lucide-react';

const NewTrust: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Verlässlichkeit seit 2004
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="text-center group">
            <div className="bg-gray-50 p-12 rounded-2xl mb-8 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 h-80 flex flex-col justify-center">
              <BadgeCheck className="h-16 w-16 text-green-600 mx-auto mb-8" />
              <h3 className="text-2xl font-bold mb-6 text-gray-900">20+ Jahre Erfahrung im Westerwald</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Regional verwurzelt – zwischen Köln, Frankfurt & dem Westerwald
              </p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-gray-50 p-12 rounded-2xl mb-8 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 h-80 flex flex-col justify-center">
              <Shield className="h-16 w-16 text-green-600 mx-auto mb-8" />
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Zertifizierte Fachkräfte</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                European Tree Worker, FLL-Baumkontrolleur, DFSZ
              </p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-gray-50 p-12 rounded-2xl mb-8 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 h-80 flex flex-col justify-center">
              <Tractor className="h-16 w-16 text-green-600 mx-auto mb-8" />
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Eigener Maschinenpark</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Effiziente Umsetzung ohne Leerlauf & Wartezeiten
              </p>
            </div>
          </div>
        </div>

        {/* Certification bar */}
        <div className="bg-green-50 rounded-2xl p-8 text-center border border-green-100">
          <div className="flex items-center justify-center space-x-8 text-gray-700">
            <span className="font-bold text-gray-900 text-lg">Zertifiziert:</span>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <BadgeCheck className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium">DFSZ</span>
            </div>
            <span className="text-gray-400">·</span>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <BadgeCheck className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium">FLL Baumkontrolleur</span>
            </div>
            <span className="text-gray-400">·</span>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <BadgeCheck className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium">European Tree Worker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewTrust;


import React from 'react';
import { TreePine, Shield, Tractor, Leaf, Wrench } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-lg text-gray-500 mb-4 font-medium">Was wir anbieten</p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Unsere Einsatzbereiche
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Spezialisiert, zertifiziert und mit modernster Technik
          </p>
        </div>
        
        {/* Improved service grid with better SEO focus */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="group cursor-pointer bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-green-600 p-4 rounded-xl">
                <TreePine className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700">
                Baumfällung mit Seilklettertechnik
              </h3>
            </div>
            <p className="text-gray-700 mb-3 text-lg">
              Zertifizierte Spezialfällungen in schwierigem Gelände
            </p>
            <div className="text-green-700 font-medium">→ Mehr erfahren</div>
          </div>

          <div className="group cursor-pointer bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-green-600 p-4 rounded-xl">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700">
                EPS-Bekämpfung
              </h3>
            </div>
            <p className="text-gray-700 mb-3 text-lg">
              Professionelle Eichenprozessionsspinner-Entfernung
            </p>
            <div className="text-green-700 font-medium">→ Mehr erfahren</div>
          </div>

          <div className="group cursor-pointer bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-green-600 p-4 rounded-xl">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700">
                Forstdienstleistungen
              </h3>
            </div>
            <p className="text-gray-700 mb-3 text-lg">
              Holzrückung und Lichtraumprofilschnitt
            </p>
            <div className="text-green-700 font-medium">→ Mehr erfahren</div>
          </div>

          <div className="group cursor-pointer bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-green-600 p-4 rounded-xl">
                <Tractor className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700">
                Landwirtschaftliche Arbeiten
              </h3>
            </div>
            <p className="text-gray-700 mb-3 text-lg">
              Mähwerke, Rundballenpressen & Gülleausbringung
            </p>
            <div className="text-green-700 font-medium">→ Mehr erfahren</div>
          </div>
          
          <div className="group cursor-pointer bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-green-600 p-4 rounded-xl">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700">
                Natur- & Artenschutz
              </h3>
            </div>
            <p className="text-gray-700 mb-3 text-lg">
              Krötenzäune, Brutplattformen & Wiesenpflege
            </p>
            <div className="text-green-700 font-medium">→ Mehr erfahren</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

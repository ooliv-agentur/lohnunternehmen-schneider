
import React from 'react';
import { TreePine, Shield, Wrench, Tractor, Leaf } from 'lucide-react';

const NewServices: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unsere Einsatzbereiche
          </h2>
          <p className="text-xl text-gray-600">
            Spezialisiert, zertifiziert und mit modernster Technik
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group cursor-pointer bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-600 p-4 rounded-xl">
                <TreePine className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                  Spezialfällung & Seilklettertechnik
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Für schwierige Lagen & große Höhen
                </p>
              </div>
            </div>
            <div className="text-green-700 font-medium text-sm">→ Mehr erfahren</div>
          </div>

          <div className="group cursor-pointer bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-600 p-4 rounded-xl">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                  EPS-Bekämpfung
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Sicher & zertifiziert gegen Eichenprozessionsspinner
                </p>
              </div>
            </div>
            <div className="text-green-700 font-medium text-sm">→ Mehr erfahren</div>
          </div>

          <div className="group cursor-pointer bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-600 p-4 rounded-xl">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                  Forstdienstleistungen
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Holzrückung & Lichtraumprofilschnitt
                </p>
              </div>
            </div>
            <div className="text-green-700 font-medium text-sm">→ Mehr erfahren</div>
          </div>

          <div className="group cursor-pointer bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-600 p-4 rounded-xl">
                <Tractor className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                  Landwirtschaftliche Arbeiten
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Mähwerke, Ballenpressen & Ausbringung
                </p>
              </div>
            </div>
            <div className="text-green-700 font-medium text-sm">→ Mehr erfahren</div>
          </div>

          <div className="group cursor-pointer bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-600 p-4 rounded-xl">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                  Natur- & Artenschutz
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Wiesenpflege, Amphibienschutz & Blühstreifen
                </p>
              </div>
            </div>
            <div className="text-green-700 font-medium text-sm">→ Mehr erfahren</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewServices;

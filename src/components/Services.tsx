
import React from 'react';
import { TreePine, Shield, Tractor, Leaf, Wrench } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Unsere Einsatzbereiche
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Spezialisiert, zertifiziert und mit modernster Technik
          </p>
        </div>
        
        {/* Unified Service Grid - All equally weighted */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="group cursor-pointer bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-600 p-4 rounded-xl">
                <TreePine className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700">
                Spezialfällungen & Seilklettertechnik
              </h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg">
              Für gefährliche Lagen, große Höhen und sensibles Gelände
            </p>
            <div className="space-y-2">
              <div className="text-green-700">• Zertifiziert & ausgebildet</div>
              <div className="text-green-700">• Hanglagen & Wohngebiete</div>
              <div className="text-green-700">• Spezialtechnik</div>
            </div>
          </div>

          <div className="group cursor-pointer bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-600 p-4 rounded-xl">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700">
                EPS-Bekämpfung
              </h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg">
              Sichere Entfernung von Eichenprozessionsspinnern
            </p>
            <div className="space-y-2">
              <div className="text-green-700">• Zertifizierte Schädlingsbekämpfung</div>
              <div className="text-green-700">• Schutz für Menschen & Natur</div>
            </div>
          </div>

          <div className="group cursor-pointer bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-600 p-4 rounded-xl">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700">
                Forstdienstleistungen
              </h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg">
              Von der Rückung bis zum Lichtraumprofilschnitt
            </p>
            <div className="space-y-2">
              <div className="text-green-700">• Rückung & Holztransport</div>
              <div className="text-green-700">• Forstpflege & Lichtraumprofil</div>
            </div>
          </div>

          <div className="group cursor-pointer bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-600 p-4 rounded-xl">
                <Tractor className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700">
                Landwirtschaft
              </h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg">
              Verlässlich, wenn's schnell gehen muss
            </p>
            <div className="space-y-2">
              <div className="text-green-700">• Mähwerke & Rundballenpressen</div>
              <div className="text-green-700">• Gülle- & Düngerausbringung</div>
            </div>
          </div>
          
          <div className="group cursor-pointer bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-600 p-4 rounded-xl">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700">
                Natur- & Artenschutz
              </h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg">
              Wenn Technik Natur bewahrt
            </p>
            <div className="space-y-2">
              <div className="text-green-700">• Krötenzäune & Brutplattformen</div>
              <div className="text-green-700">• Wiesenpflege & Amphibienschutz</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

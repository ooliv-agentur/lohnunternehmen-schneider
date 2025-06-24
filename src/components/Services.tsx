
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
        
        {/* Main Service - Full Width */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-16 border border-green-200">
            <div className="flex items-center space-x-12">
              <div className="bg-green-600 p-8 rounded-3xl shadow-lg">
                <TreePine className="h-16 w-16 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-4xl font-bold mb-6 text-gray-900">Spezialfällungen & Seilklettertechnik</h3>
                <p className="text-xl text-gray-800 mb-8">
                  Für gefährliche Lagen, große Höhen und sensibles Gelände
                </p>
                <div className="flex flex-wrap gap-6">
                  <span className="text-green-700 font-medium">• Zertifiziert & ausgebildet</span>
                  <span className="text-green-700 font-medium">• Hanglagen & Wohngebiete</span>
                  <span className="text-green-700 font-medium">• Spezialtechnik</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="group cursor-pointer">
            <div className="flex items-start space-x-8 p-8 rounded-2xl hover:bg-gray-50 transition-colors">
              <Shield className="h-12 w-12 text-green-600 mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-700">EPS-Bekämpfung</h3>
                <p className="text-gray-700 mb-4 text-lg">
                  Sichere Entfernung von Eichenprozessionsspinnern
                </p>
                <div className="space-y-2">
                  <div className="text-green-700">• Zertifizierte Schädlingsbekämpfung</div>
                  <div className="text-green-700">• Schutz für Menschen & Natur</div>
                  <div className="text-green-700">• Einsatzbereit im Westerwald</div>
                </div>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="flex items-start space-x-8 p-8 rounded-2xl hover:bg-gray-50 transition-colors">
              <Wrench className="h-12 w-12 text-green-600 mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-700">Forstdienstleistungen</h3>
                <p className="text-gray-700 mb-4 text-lg">
                  Von der Rückung bis zum Lichtraumprofilschnitt
                </p>
                <div className="space-y-2">
                  <div className="text-green-700">• Rückung & Holztransport</div>
                  <div className="text-green-700">• Einschlag & Sortierung</div>
                  <div className="text-green-700">• Forstpflege & Lichtraumprofil</div>
                </div>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="flex items-start space-x-8 p-8 rounded-2xl hover:bg-gray-50 transition-colors">
              <Tractor className="h-12 w-12 text-green-600 mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-700">Landwirtschaft</h3>
                <p className="text-gray-700 mb-4 text-lg">
                  Verlässlich, wenn's schnell gehen muss
                </p>
                <div className="space-y-2">
                  <div className="text-green-700">• Mähwerke, Schwader & Wender</div>
                  <div className="text-green-700">• Rundballenpressen</div>
                  <div className="text-green-700">• Gülle- & Düngerausbringung</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="group cursor-pointer">
            <div className="flex items-start space-x-8 p-8 rounded-2xl hover:bg-gray-50 transition-colors">
              <Leaf className="h-12 w-12 text-green-600 mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-700">Natur- & Artenschutz</h3>
                <p className="text-gray-700 mb-4 text-lg">
                  Wenn Technik Natur bewahrt
                </p>
                <div className="space-y-2">
                  <div className="text-green-700">• Krötenzäune & Brutplattformen</div>
                  <div className="text-green-700">• Wiesenpflege & Mähgutübertragung</div>
                  <div className="text-green-700">• Insektenhotels & Amphibienschutz</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

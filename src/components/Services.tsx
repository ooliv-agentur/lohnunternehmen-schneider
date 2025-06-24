
import React from 'react';
import { TreePine, Shield, Tractor, Leaf, Wrench } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Unsere Einsatzbereiche
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Spezialisiert, zertifiziert und mit modernster Technik – für Kommunen, Landwirte und Forstämter.
          </p>
        </div>
        
        {/* Main Service Card */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-12 border-2 border-green-200 shadow-lg">
            <div className="flex items-start space-x-8">
              <div className="bg-green-600 p-6 rounded-2xl shadow-lg">
                <TreePine className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Spezialfällungen & Seilklettertechnik</h3>
                <p className="text-gray-800 mb-8 text-xl leading-relaxed">
                  Für gefährliche Lagen, große Höhen und sensibles Gelände.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">Zertifiziert & ausgebildet</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">Auch in Hanglagen & Wohngebieten</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">Technik für schwierige Einsätze</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start space-x-6">
              <Shield className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">EPS-Bekämpfung</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Sichere Entfernung von Eichenprozessionsspinnern.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Zertifizierte Schädlingsbekämpfung</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Schutz für Menschen & Natur</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Einsatzbereit im ganzen Westerwald</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start space-x-6">
              <Wrench className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Forstdienstleistungen</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Von der Rückung bis zum Lichtraumprofilschnitt.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Rückung & Holztransport</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Einschlag & Sortierung</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Forstpflege & Lichtraumprofil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start space-x-6">
              <Tractor className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Landwirtschaftliche Arbeiten</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Verlässlich, wenn's schnell gehen muss.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Mähwerke, Schwader & Wender</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Rundballenpressen & Schleppe</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Gülle- & Düngerausbringung</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start space-x-6">
              <Leaf className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Natur- & Artenschutz</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Wenn Technik Natur bewahrt.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Krötenzäune & Brutplattformen</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Wiesenpflege & Mähgutübertragung</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-600 text-sm">Insektenhotels & Amphibienschutz</span>
                  </div>
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

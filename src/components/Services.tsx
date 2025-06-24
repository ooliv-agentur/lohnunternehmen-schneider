
import React from 'react';
import { TreePine, Shield, Tractor, Leaf } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-6">
            Unsere Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Fünf Leistungsbereiche
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jeder Bereich erhält eine eigene Unterseite mit detaillierten Informationen, 
            Referenzen und direkten Kontaktmöglichkeiten.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Baumarbeiten - Featured */}
          <div className="lg:col-span-2 bg-green-50 rounded-2xl p-8 border border-green-100">
            <div className="flex items-start space-x-6">
              <div className="bg-green-200 p-4 rounded-xl">
                <TreePine className="h-8 w-8 text-green-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Baumarbeiten & Baumpflege</h3>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Sicher. Zertifiziert. Seiltechnik & Spezialmaschinen. 
                  Professionelle Baumfällungen und Kroneneinkürzungen mit modernster Technik und European Tree Worker-Zertifizierung.
                </p>
                <div className="flex items-center text-green-700 font-semibold">
                  <span>→ Zur Detailseite</span>
                  <span className="ml-3 text-xs bg-green-100 px-3 py-1 rounded-full">Konzept in Arbeit</span>
                </div>
              </div>
            </div>
          </div>

          {/* EPS-Bekämpfung */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-green-200 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-xl">
                <Shield className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">EPS-Bekämpfung</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Spezialisierte Beseitigung durch zertifizierte Fachkräfte. 
                  Sicher und umweltschonend.
                </p>
                <div className="text-gray-600 font-medium text-sm">
                  → Zur Detailseite
                </div>
              </div>
            </div>
          </div>

          {/* Forstdienstleistungen */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-green-200 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-xl">
                <TreePine className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Forstdienstleistungen</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Holzeinschlag, Rückung und Lichtraumprofile mit eigenem Maschinenpark. 
                  Effizient und nachhaltig.
                </p>
                <div className="text-gray-600 font-medium text-sm">
                  → Zur Detailseite
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Tractor className="h-6 w-6 text-gray-600" />
              <h4 className="font-bold text-lg">Landwirtschaftliche Arbeiten</h4>
            </div>
            <p className="text-gray-600">Mäharbeiten, Heuwenden und Ballenpressen mit professioneller Technik.</p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Leaf className="h-6 w-6 text-gray-600" />
              <h4 className="font-bold text-lg">Natur- & Artenschutz</h4>
            </div>
            <p className="text-gray-600">Blühstreifen, Nistkästen und ökologische Pflegemaßnahmen für die Artenvielfalt.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

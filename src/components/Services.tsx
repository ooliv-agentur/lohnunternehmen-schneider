
import React from 'react';
import { TreePine, Shield, Tractor, Leaf } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-block px-6 py-3 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-8">
            Was wir können – und wie wir es machen
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Fünf Leistungsbereiche
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Jeder Bereich mit detaillierten Informationen, Referenzen und direkten Kontaktmöglichkeiten.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          <div className="lg:col-span-2 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-10 border-2 border-green-200 shadow-lg">
            <div className="flex items-start space-x-8">
              <div className="bg-green-600 p-6 rounded-2xl shadow-lg">
                <TreePine className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Baumarbeiten & Baumpflege</h3>
                <p className="text-gray-800 mb-8 text-xl leading-relaxed">
                  <strong>Sicher. Zertifiziert. Seiltechnik & Spezialmaschinen.</strong><br />
                  Professionelle Baumfällungen und Kroneneinkürzungen mit modernster Technik und European Tree Worker-Zertifizierung. 
                  Wir arbeiten dort, wo andere aufhören müssen.
                </p>
                <div className="flex items-center text-green-700 font-bold text-lg">
                  <span>→ Zur Detailseite</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start space-x-6">
              <div className="bg-gray-100 p-4 rounded-2xl">
                <Shield className="h-8 w-8 text-gray-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">EPS-Bekämpfung</h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  <strong>Spezialisierte Beseitigung durch zertifizierte Fachkräfte.</strong><br />
                  Sicher und umweltschonend – wenn der Eichenprozessionsspinner zum Problem wird.
                </p>
                <div className="text-green-700 font-semibold">
                  → Zur Detailseite
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start space-x-6">
              <div className="bg-gray-100 p-4 rounded-2xl">
                <TreePine className="h-8 w-8 text-gray-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Forstdienstleistungen</h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  <strong>Holzeinschlag, Rückung und Lichtraumprofile</strong> mit eigenem Maschinenpark. 
                  Effizient und nachhaltig – vom Kleinwald bis zum Großauftrag.
                </p>
                <div className="text-green-700 font-semibold">
                  → Zur Detailseite
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
            <div className="flex items-center space-x-4 mb-6">
              <Tractor className="h-8 w-8 text-green-600" />
              <h4 className="font-bold text-2xl text-gray-900">Landwirtschaftliche Arbeiten</h4>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>Mäharbeiten, Heuwenden und Ballenpressen</strong> mit professioneller Technik. 
              Wenn die Zeit drängt, sind wir da.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
            <div className="flex items-center space-x-4 mb-6">
              <Leaf className="h-8 w-8 text-green-600" />
              <h4 className="font-bold text-2xl text-gray-900">Natur- & Artenschutz</h4>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>Blühstreifen, Nistkästen und ökologische Pflegemaßnahmen</strong> für die Artenvielfalt. 
              Weil Technik und Natur zusammengehören.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

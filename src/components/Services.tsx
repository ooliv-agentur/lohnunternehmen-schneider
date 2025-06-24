
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
                  <strong>Sicher. Erfahren. Zertifiziert.</strong><br />
                  Wir fällen 20 Meter hohe Fichten auch in schwierigem Gelände – mit modernster Technik, Seilklettertechnik und European Tree Worker-Zertifizierung. Ob Problembaum, Kronenpflege oder Gefahrfällung: Wir arbeiten präzise und auf höchstem Sicherheitsniveau.
                </p>
                <div className="mb-6">
                  <ul className="text-gray-700 text-lg space-y-2">
                    <li>• Spezialtechnik & Seiltechnik</li>
                    <li>• Gefahrenfällungen & Baumpflege</li>
                    <li>• Arbeiten in Wohngebieten & Hanglagen</li>
                  </ul>
                </div>
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
                  <strong>Spezialeinsätze gegen den Eichenprozessionsspinner.</strong><br />
                  Wir beseitigen EPS-Nester fachgerecht, umweltverträglich und sicher – mit ausgebildeten Fachkräften, PSA und Absaugtechnik. Für Kommunen, Schulen und Betriebe im Westerwald und darüber hinaus.
                </p>
                <div className="mb-4">
                  <ul className="text-gray-600 text-base space-y-1">
                    <li>• Zertifizierte Schädlingsbekämpfung</li>
                    <li>• Schutz für Menschen, Tiere & Natur</li>
                    <li>• Einsatzbereit im ganzen Westerwald</li>
                  </ul>
                </div>
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
                  <strong>Von der Rückung bis zum Lichtraumprofilschnitt.</strong><br />
                  Wir arbeiten für private Waldbesitzer, Kommunen und Forstämter: effizient, termintreu und mit eigenem Maschinenpark. Vom Holzeinschlag bis zur Waldpflege übernehmen wir alle forstwirtschaftlichen Arbeiten.
                </p>
                <div className="mb-4">
                  <ul className="text-gray-600 text-base space-y-1">
                    <li>• Rückung & Holztransport</li>
                    <li>• Einschlag & Sortierung</li>
                    <li>• Forstpflege & Lichtraumprofil</li>
                  </ul>
                </div>
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
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              <strong>Verlässlich, wenn's schnell gehen muss.</strong><br />
              Heuernte, Mäharbeiten, Ballenpressen oder Streuen – wir unterstützen regionale Landwirte mit Technik und Tatkraft. Flexibel einsetzbar, auch kurzfristig.
            </p>
            <div className="mb-4">
              <ul className="text-gray-600 text-base space-y-1">
                <li>• Mähwerke, Schwader & Wender</li>
                <li>• Rundballenpressen & Schleppe</li>
                <li>• Gülle- & Düngerausbringung</li>
              </ul>
            </div>
            <div className="text-green-700 font-semibold">
              → Zur Detailseite
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
            <div className="flex items-center space-x-4 mb-6">
              <Leaf className="h-8 w-8 text-green-600" />
              <h4 className="font-bold text-2xl text-gray-900">Natur- & Artenschutz</h4>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              <strong>Wenn Technik Natur bewahrt.</strong><br />
              Wir schaffen Lebensräume: mit Blühstreifen, Nistkästen, Biotoppflege und ökologischer Mahd. Für Artenvielfalt, Biodiversität und echte Nachhaltigkeit.
            </p>
            <div className="mb-4">
              <ul className="text-gray-600 text-base space-y-1">
                <li>• Krötenzäune & Brutplattformen</li>
                <li>• Wiesenpflege & Mähgutübertragung</li>
                <li>• Insektenhotels & Amphibienschutz</li>
              </ul>
            </div>
            <div className="text-green-700 font-semibold">
              → Zur Detailseite
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

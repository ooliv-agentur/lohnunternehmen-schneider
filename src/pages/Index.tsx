import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Fullscreen Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
          {/* Close Button */}
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 p-3 hover:bg-gray-50 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-900" />
          </button>

          <div className="max-w-4xl mx-auto px-8 text-center">
            {/* Main Navigation */}
            <nav className="space-y-12">
              <div className="text-6xl font-light text-gray-900 mb-16">
                Navigation
              </div>
              
              <div className="space-y-8">
                <div className="text-4xl font-light text-gray-900 hover:text-gray-600 transition-colors cursor-pointer">
                  Startseite
                </div>
                
                <div className="space-y-6">
                  <div className="text-4xl font-light text-gray-900 hover:text-gray-600 transition-colors cursor-pointer">
                    Leistungen
                  </div>
                  <div className="space-y-3 text-2xl text-gray-600">
                    <div className="hover:text-gray-900 transition-colors cursor-pointer">Baumarbeiten & Baumpflege</div>
                    <div className="hover:text-gray-900 transition-colors cursor-pointer">EPS-Bekämpfung</div>
                    <div className="hover:text-gray-900 transition-colors cursor-pointer">Forstdienstleistungen</div>
                    <div className="hover:text-gray-900 transition-colors cursor-pointer">Landwirtschaft</div>
                    <div className="hover:text-gray-900 transition-colors cursor-pointer">Natur- & Artenschutz</div>
                  </div>
                </div>
                
                <div className="text-4xl font-light text-gray-900 hover:text-gray-600 transition-colors cursor-pointer">
                  Über uns
                </div>
                
                <div className="text-4xl font-light text-gray-900 hover:text-gray-600 transition-colors cursor-pointer">
                  Kontakt
                </div>
              </div>
            </nav>

            {/* Strategic Context */}
            <div className="mt-20 pt-8 border-t border-gray-200">
              <p className="text-lg text-gray-500 italic max-w-2xl mx-auto">
                Diese Website ist ein strategischer Prototyp im Rahmen eines geplanten Website-Relaunchs. 
                Die hier gezeigte Struktur bildet das Fundament für eine moderne, SEO-optimierte Website mit detaillierten Unterseiten.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Header with Burger Menu */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-gray-900">
            Sebastian Schneider Lohnunternehmen
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="border border-gray-300"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6 text-gray-900" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-100 text-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gray-200 border border-gray-300 flex items-center justify-center">
          <span className="text-gray-600 text-lg font-mono">[Bild hier: Waldarbeiten/Maschinen im Einsatz]</span>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Seit über 20 Jahren im Einsatz für Natur, Landschaft und Sicherheit.
            <span className="block text-2xl md:text-3xl mt-4 font-normal text-gray-700">
              Ihr zertifiziertes Lohnunternehmen für Baumarbeiten, Forstpflege & Spezialtechnik im Westerwald
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Professionelle Baumpflege, EPS-Bekämpfung, Forstdienstleistungen und landwirtschaftliche Arbeiten mit eigenem Maschinenpark und zertifizierten Fachkräften.
          </p>
          <Button 
            size="lg" 
            className="bg-gray-900 text-white hover:bg-gray-800 text-lg px-8 py-6 border border-gray-900"
          >
            Jetzt unverbindlich Kontakt aufnehmen
          </Button>
        </div>
      </section>

      {/* Service Teasers */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unsere Leistungsbereiche
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Jeder Bereich wird in der finalen Website eine eigene Unterseite mit detaillierten Informationen, Referenzen und Kontaktmöglichkeiten erhalten.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Baumarbeiten Teaser */}
            <div className="border border-gray-300 bg-white">
              <div className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-200 border border-gray-300 flex items-center justify-center">
                    <span className="text-xs text-gray-500 font-mono">[Icon]</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Baumarbeiten & Baumpflege</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Professionelle Baumfällungen, Kroneneinkürzungen und Baumpflege mit Seilklettertechnik. Wir arbeiten nach den neuesten Standards der Baumpflege und mit modernster Technik für maximale Sicherheit.
                    </p>
                    <div className="text-gray-600 font-medium text-sm flex items-center">
                      <span>→ Zur Detailseite</span>
                      <span className="ml-2 text-xs bg-gray-100 px-2 py-1 border border-gray-300">(in Vorbereitung)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* EPS-Bekämpfung Teaser */}
            <div className="border border-gray-300 bg-white">
              <div className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-200 border border-gray-300 flex items-center justify-center">
                    <span className="text-xs text-gray-500 font-mono">[Icon]</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">EPS-Bekämpfung</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Spezialisierte Beseitigung von Eichenprozessionsspinner-Nestern durch zertifizierte Fachkräfte. Sicher, umweltschonend und nachhaltig für den Schutz von Mensch und Natur.
                    </p>
                    <div className="text-gray-600 font-medium text-sm flex items-center">
                      <span>→ Zur Detailseite</span>
                      <span className="ml-2 text-xs bg-gray-100 px-2 py-1 border border-gray-300">(in Vorbereitung)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Forstdienstleistungen Teaser */}
            <div className="border border-gray-300 bg-white">
              <div className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-200 border border-gray-300 flex items-center justify-center">
                    <span className="text-xs text-gray-500 font-mono">[Icon]</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Forstdienstleistungen</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Holzeinschlag, Rückung und Lichtraumprofilschnitte mit eigenem Maschinenpark. Effiziente Forstwirtschaft nach modernsten ökologischen und wirtschaftlichen Gesichtspunkten.
                    </p>
                    <div className="text-gray-600 font-medium text-sm flex items-center">
                      <span>→ Zur Detailseite</span>
                      <span className="ml-2 text-xs bg-gray-100 px-2 py-1 border border-gray-300">(in Vorbereitung)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Landwirtschaft Teaser */}
            <div className="border border-gray-300 bg-white">
              <div className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-200 border border-gray-300 flex items-center justify-center">
                    <span className="text-xs text-gray-500 font-mono">[Icon]</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Landwirtschaftliche Arbeiten</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Mäharbeiten, Heuwenden, Schwaden und Ballenpressen für landwirtschaftliche Betriebe. Zuverlässige Unterstützung in der Saison mit professioneller Technik.
                    </p>
                    <div className="text-gray-600 font-medium text-sm flex items-center">
                      <span>→ Zur Detailseite</span>
                      <span className="ml-2 text-xs bg-gray-100 px-2 py-1 border border-gray-300">(in Vorbereitung)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services Preview */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-8">Weitere Spezialbereiche</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white border border-gray-300">
                <div className="w-12 h-12 bg-gray-200 border border-gray-300 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xs text-gray-500 font-mono">[Icon]</span>
                </div>
                <h4 className="font-bold mb-2">Natur- & Artenschutz</h4>
                <p className="text-sm text-gray-600">Anlage von Blühstreifen, Installation von Nistkästen und ökologische Pflegemaßnahmen für den Erhalt der Artenvielfalt.</p>
              </div>
              <div className="p-6 bg-white border border-gray-300">
                <div className="w-12 h-12 bg-gray-200 border border-gray-300 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xs text-gray-500 font-mono">[Icon]</span>
                </div>
                <h4 className="font-bold mb-2">Entsorgung & Häckseln</h4>
                <p className="text-sm text-gray-600">Wurzelstockfräsen, Holzhäckseln und fachgerechte Entsorgung von Grünschnitt und Gehölzabfällen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Bewertungen Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Das sagen unsere Kunden
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Echte Bewertungen von zufriedenen Kunden aus Google My Business
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bewertung 1 */}
            <div className="p-6 text-center bg-white border border-gray-300">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Gute Arbeit. Pünktlich und zuverlässig."
              </p>
              <p className="font-semibold text-gray-900">Sabine W.</p>
              <p className="text-sm text-gray-500">Google Bewertung</p>
            </div>

            {/* Bewertung 2 */}
            <div className="p-6 text-center bg-white border border-gray-300">
              <div className="flex justify-center mb-4">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
                <span className="text-gray-300 text-xl">★</span>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "🚜"
              </p>
              <p className="font-semibold text-gray-900">Chris</p>
              <p className="text-sm text-gray-500">Google Bewertung</p>
            </div>

            {/* Bewertung 3 */}
            <div className="p-6 text-center bg-white border border-gray-300">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "⭐⭐⭐⭐⭐"
              </p>
              <p className="font-semibold text-gray-900">Markus Franzl</p>
              <p className="text-sm text-gray-500">Google Bewertung</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Weitere Bewertungen und Details finden Sie in unserem Google My Business Profil
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section - Preview for "Über uns" Page */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Warum Sebastian Schneider Lohnunternehmen?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Über 20 Jahre Erfahrung, zertifizierte Fachkräfte und modernste Technik für Ihre Projekte
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gray-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Über 20 Jahre Erfahrung</h3>
                    <p className="text-gray-600">Seit 2004 sind wir im Westerwald zwischen Köln und Frankfurt als Familienbetrieb tätig und haben uns durch Qualität und Zuverlässigkeit einen Namen gemacht.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gray-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Zertifizierte Fachkräfte</h3>
                    <p className="text-gray-600">Unser Team besteht aus European Tree Workers und anderen zertifizierten Spezialisten, die nach höchsten Sicherheitsstandards arbeiten.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gray-400 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Eigener Maschinenpark</h3>
                    <p className="text-gray-600">Mit unserem umfangreichen, modernen Maschinenpark können wir auch große Projekte effizient und termingerecht umsetzen.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-200 border border-gray-300 h-96 w-full flex items-center justify-center">
                <span className="text-gray-600 text-lg font-mono">[Bild hier: Team/Maschinenpark]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Jetzt Kontakt aufnehmen
          </h2>
          <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
            Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir beraten Sie gerne und erstellen Ihnen ein unverbindliches Angebot.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 bg-gray-400"></div>
              <div className="text-left">
                <p className="font-medium text-gray-900">02661 / 123456</p>
                <p className="text-sm text-gray-600">Festnetz</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 bg-gray-400"></div>
              <div className="text-left">
                <p className="font-medium text-gray-900">0171 / 1234567</p>
                <p className="text-sm text-gray-600">Mobil</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 bg-gray-400"></div>
              <div className="text-left">
                <p className="font-medium text-gray-900">info@schneider-lohnunternehmen.de</p>
                <p className="text-sm text-gray-600">E-Mail</p>
              </div>
            </div>
          </div>
          
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white border border-gray-900">
            Zur Kontaktseite
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sebastian Schneider Lohnunternehmen</h3>
              <p className="text-gray-400 mb-4">
                Sebastian Schneider<br />
                Musterstraße 123<br />
                56789 Westerwald
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <p className="text-gray-400 text-sm mb-2">
                Tel: 02661 / 123456
              </p>
              <p className="text-gray-400 text-sm mb-2">
                Mobil: 0171 / 1234567
              </p>
              <p className="text-gray-400 text-sm">
                info@schneider-lohnunternehmen.de
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Sebastian Schneider Lohnunternehmen
              </p>
              <div className="text-gray-500 text-xs text-center md:text-right">
                <p className="italic mb-1">
                  Website-Prototyp durch ooliv Werbeagentur
                </p>
                <p>
                  Finaler Relaunch mit vollständiger Website-Struktur geplant
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;


import React, { useState } from 'react';
import { Menu, X, TreePine, Shield, Wrench, Tractor, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Big Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 p-4 hover:bg-gray-50 rounded-full transition-colors"
          >
            <X className="h-8 w-8 text-gray-800" />
          </button>

          <div className="max-w-6xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Navigation Structure */}
              <div>
                <div className="text-5xl font-light text-gray-900 mb-12 tracking-tight">
                  Navigation
                </div>
                
                <nav className="space-y-8">
                  <div className="text-3xl font-light text-gray-900 hover:text-green-600 transition-colors cursor-pointer border-b border-transparent hover:border-green-200 pb-2">
                    Startseite
                  </div>
                  
                  <div className="space-y-6">
                    <div className="text-3xl font-light text-gray-900 hover:text-green-600 transition-colors cursor-pointer border-b border-transparent hover:border-green-200 pb-2">
                      Leistungen
                    </div>
                    <div className="ml-8 space-y-4 text-xl text-gray-600">
                      <div className="flex items-center space-x-3 hover:text-green-700 transition-colors cursor-pointer">
                        <TreePine className="h-5 w-5" />
                        <span>Baumarbeiten & Baumpflege</span>
                      </div>
                      <div className="flex items-center space-x-3 hover:text-green-700 transition-colors cursor-pointer">
                        <Shield className="h-5 w-5" />
                        <span>EPS-Bekämpfung</span>
                      </div>
                      <div className="flex items-center space-x-3 hover:text-green-700 transition-colors cursor-pointer">
                        <TreePine className="h-5 w-5" />
                        <span>Forstdienstleistungen</span>
                      </div>
                      <div className="flex items-center space-x-3 hover:text-green-700 transition-colors cursor-pointer">
                        <Tractor className="h-5 w-5" />
                        <span>Landwirtschaft</span>
                      </div>
                      <div className="flex items-center space-x-3 hover:text-green-700 transition-colors cursor-pointer">
                        <Leaf className="h-5 w-5" />
                        <span>Natur- & Artenschutz</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-3xl font-light text-gray-900 hover:text-green-600 transition-colors cursor-pointer border-b border-transparent hover:border-green-200 pb-2">
                    Über uns
                  </div>
                  
                  <div className="text-3xl font-light text-gray-900 hover:text-green-600 transition-colors cursor-pointer border-b border-transparent hover:border-green-200 pb-2">
                    Kontakt
                  </div>
                </nav>
              </div>

              {/* Strategic Context */}
              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">
                  Strategischer Prototyp
                </h3>
                <p className="text-green-700 leading-relaxed mb-6">
                  Diese Website zeigt die geplante Struktur und Nutzerführung für Ihren modernen Webauftritt. 
                  Jeder Bereich wird individuell ausgearbeitet und mit echten Inhalten gefüllt.
                </p>
                <div className="text-sm text-green-600 font-medium">
                  → Basis für die gemeinsame Weiterentwicklung
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modern Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-gray-900">
            Sebastian Schneider Lohnunternehmen
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="border border-gray-200 hover:border-green-300 hover:bg-green-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </Button>
        </div>
      </header>

      {/* Hero Section - Emotionalized */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-transparent"></div>
        <div className="absolute top-20 right-10 w-32 h-32 border-2 border-green-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 border border-green-300 opacity-30"></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-8">
            Seit über 20 Jahren im Westerwald
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight text-gray-900 tracking-tight">
            Im Einsatz für Natur,
            <span className="block text-green-700">Landschaft & Sicherheit</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto font-light">
            Professionelle Baumarbeiten & Spezialtechnik aus dem Westerwald
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-6 rounded-xl shadow-lg"
            >
              Jetzt unverbindlich Angebot anfordern
            </Button>
            <div className="text-sm text-gray-500">
              Kostenlose Erstberatung & Besichtigung
            </div>
          </div>

          {/* Image Placeholder - Stylized */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center border border-gray-300 shadow-lg">
              <div className="text-center">
                <TreePine className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <span className="text-gray-500 text-lg font-medium">Waldarbeiten & Maschinen im Einsatz</span>
                <div className="text-sm text-gray-400 mt-2">Authentische Bilder folgen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Redesigned with Visual Impact */}
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

      {/* Reviews - Emotionalized */}
      <section className="py-24 bg-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Das sagen unsere Kunden
            </h2>
            <p className="text-xl text-gray-600">
              Echte Bewertungen aus Google My Business
            </p>
          </div>
          
          {/* Featured Review */}
          <div className="bg-white rounded-2xl p-8 mb-8 border border-green-100 shadow-lg">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-2xl">★</span>
              ))}
            </div>
            <blockquote className="text-2xl text-gray-700 text-center italic mb-6 font-light">
              "Gute Arbeit. Pünktlich und zuverlässig."
            </blockquote>
            <div className="text-center">
              <p className="font-semibold text-gray-900 text-lg">Sabine W.</p>
              <p className="text-gray-500">Google Bewertung</p>
            </div>
          </div>

          {/* Additional Reviews */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex justify-center mb-4">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
                <span className="text-gray-300 text-xl">★</span>
              </div>
              <p className="text-gray-600 mb-4 text-center text-2xl">🚜</p>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Chris</p>
                <p className="text-sm text-gray-500">Google Bewertung</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 text-center text-xl">⭐⭐⭐⭐⭐</p>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Markus Franzl</p>
                <p className="text-sm text-gray-500">Google Bewertung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Benefit Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Warum Sebastian Schneider Lohnunternehmen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Über 20 Jahre Erfahrung treffen auf modernste Technik und zertifizierte Fachkräfte
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-700 font-bold text-xl">20+</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Jahre Erfahrung</h3>
              <p className="text-gray-600">Seit 2004 als Familienbetrieb im Westerwald zwischen Köln und Frankfurt etabliert.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Zertifizierte Fachkräfte</h3>
              <p className="text-gray-600">European Tree Workers und Spezialisten nach höchsten Sicherheitsstandards.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Eigener Maschinenpark</h3>
              <p className="text-gray-600">Umfangreiche, moderne Ausstattung für effiziente Projektumsetzung.</p>
            </div>
          </div>

          {/* Team Image Placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-80 flex items-center justify-center border border-gray-300 shadow-lg overflow-hidden">
              <div className="text-center">
                <div className="flex justify-center space-x-4 mb-4">
                  <Tractor className="h-12 w-12 text-gray-400" />
                  <TreePine className="h-12 w-12 text-gray-400" />
                  <Shield className="h-12 w-12 text-gray-400" />
                </div>
                <span className="text-gray-500 text-lg font-medium">Team & Maschinenpark</span>
                <div className="text-sm text-gray-400 mt-2">Authentische Bilder in Vorbereitung</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Clear CTA Focus */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Jetzt unverbindlich Angebot anfordern
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Rufen Sie uns an oder schreiben Sie uns. Wir beraten Sie gerne und erstellen 
            Ihnen ein maßgeschneidertes Angebot für Ihr Projekt.
          </p>
          
          <div className="mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-12 py-6 rounded-xl">
              Kontakt aufnehmen
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-semibold text-xl text-white mb-1">02661 / 123456</p>
              <p className="text-gray-400">Festnetz</p>
            </div>
            <div>
              <p className="font-semibold text-xl text-white mb-1">0171 / 1234567</p>
              <p className="text-gray-400">Mobil</p>
            </div>
            <div>
              <p className="font-semibold text-xl text-white mb-1">info@schneider-lohnunternehmen.de</p>
              <p className="text-gray-400">E-Mail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Sebastian Schneider Lohnunternehmen</h3>
              <p className="text-gray-400">
                Sebastian Schneider · Musterstraße 123 · 56789 Westerwald
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <div className="bg-green-900/30 px-4 py-2 rounded-lg mb-2">
                <p className="text-green-300 text-sm font-medium">
                  Strategischer Website-Prototyp
                </p>
              </div>
              <p className="text-gray-500 text-sm">
                Konzeption durch ooliv Werbeagentur · Relaunch 2025
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 mt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Sebastian Schneider Lohnunternehmen
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;


import React, { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Burger Menu */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-green-800">
            Lohnunternehmen Schneider
          </div>
          
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-green-50">
                <Menu className="h-6 w-6 text-green-800" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md bg-green-800 text-white">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold">Navigation</h2>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:bg-green-700"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                
                <nav className="flex flex-col space-y-3 flex-1">
                  <div className="text-lg py-3 px-4 rounded bg-green-700/50">
                    → Startseite
                  </div>
                  
                  <div>
                    <div className="text-lg py-3 px-4 rounded hover:bg-green-700 transition-colors cursor-pointer">
                      → Leistungen
                    </div>
                    <div className="ml-6 space-y-2 mt-2">
                      <div className="text-sm py-2 px-4 text-green-200 hover:bg-green-700 rounded cursor-pointer">
                        ↳ Baumarbeiten & Baumpflege
                      </div>
                      <div className="text-sm py-2 px-4 text-green-200 hover:bg-green-700 rounded cursor-pointer">
                        ↳ EPS-Bekämpfung
                      </div>
                      <div className="text-sm py-2 px-4 text-green-200 hover:bg-green-700 rounded cursor-pointer">
                        ↳ Forstdienstleistungen
                      </div>
                      <div className="text-sm py-2 px-4 text-green-200 hover:bg-green-700 rounded cursor-pointer">
                        ↳ Landwirtschaft
                      </div>
                      <div className="text-sm py-2 px-4 text-green-200 hover:bg-green-700 rounded cursor-pointer">
                        ↳ Natur- & Artenschutz
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-lg py-3 px-4 rounded hover:bg-green-700 transition-colors cursor-pointer">
                    → Über uns
                  </div>
                  <div className="text-lg py-3 px-4 rounded hover:bg-green-700 transition-colors cursor-pointer">
                    → Kontakt
                  </div>
                </nav>
                
                <div className="mt-auto pt-6 border-t border-green-700">
                  <p className="text-sm text-green-200 italic mb-2">
                    Diese Seite ist ein erster Prototyp im Rahmen eines Website-Relaunchs durch die ooliv Werbeagentur.
                  </p>
                  <p className="text-xs text-green-300">
                    Weitere Inhalte und Unterseiten folgen.
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Seit über 20 Jahren im Einsatz für
            <span className="block text-green-200">Natur, Landschaft und Sicherheit</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 font-light">
            Baumarbeiten • Landschaftspflege • Forstdienstleistungen • Landwirtschaft
          </p>
          <Button 
            size="lg" 
            className="bg-white text-green-800 hover:bg-green-50 text-lg px-8 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Jetzt Kontakt aufnehmen
          </Button>
          
          <div className="mt-12 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <p className="text-green-100 text-sm italic">
              Diese Website zeigt ein Beispiel dafür, wie Ihr neuer digitaler Auftritt aussehen könnte.
            </p>
          </div>
        </div>
      </section>

      {/* Service Teasers - Structured for Future Individual Pages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unsere Leistungsbereiche
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Jeder Bereich wird eine eigene Seite mit detaillierten Informationen, 
              Referenzen und spezifischen Kontaktmöglichkeiten erhalten.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Baumarbeiten Teaser */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-600">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🌳</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Baumarbeiten & Baumpflege</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Professionelle Baumfällungen, Pflege nach ZTV-Baumpflege und Seilklettertechnik für schwer zugängliche Bereiche. 
                      Mit Spezialtechnik wie Seilwinde und Fällkeilen sowie Einbau von Kronensicherungen.
                    </p>
                    <div className="text-green-600 font-medium text-sm flex items-center">
                      <span>Zur Detailseite →</span>
                      <span className="ml-2 text-xs bg-green-100 px-2 py-1 rounded">(in Vorbereitung)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* EPS-Bekämpfung Teaser */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-500">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🐛</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">EPS-Bekämpfung</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Fachgerechte Entfernung von Eichenprozessionsspinner durch zertifizierte Fachkräfte. 
                      Inklusive Absaugung, Schutzkleidung und Verklebung der Raupenhaare.
                    </p>
                    <div className="text-orange-600 font-medium text-sm flex items-center">
                      <span>Zur Detailseite →</span>
                      <span className="ml-2 text-xs bg-orange-100 px-2 py-1 rounded">(in Vorbereitung)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Forstdienstleistungen Teaser */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🌲</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Forstdienstleistungen</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Holzeinschlag, Rückung und Lichtraumprofilschnitt. Bankett- und Grabenpflege, 
                      Kulturpflege sowie Seilwindenarbeiten mit professionellem Equipment.
                    </p>
                    <div className="text-blue-600 font-medium text-sm flex items-center">
                      <span>Zur Detailseite →</span>
                      <span className="ml-2 text-xs bg-blue-100 px-2 py-1 rounded">(in Vorbereitung)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Landwirtschaft Teaser */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-yellow-600">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🚜</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Landwirtschaftliche Unterstützung</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Umfassende Unterstützung für Westerwälder Landwirte mit Mähwerk, Heuwender, 
                      Schwader, Ballenpresse und Düngerstreuer sowie Bodenpflege.
                    </p>
                    <div className="text-yellow-600 font-medium text-sm flex items-center">
                      <span>Zur Detailseite →</span>
                      <span className="ml-2 text-xs bg-yellow-100 px-2 py-1 rounded">(in Vorbereitung)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services Preview */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Weitere Spezialbereiche</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <div className="text-3xl mb-4">🦋</div>
                <h4 className="font-bold mb-2">Natur- & Artenschutz</h4>
                <p className="text-sm text-gray-600">Blühstreifen, Nistkästen, Biotoppflege und Amphibienschutzzäune</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border">
                <div className="text-3xl mb-4">🪓</div>
                <h4 className="font-bold mb-2">Entsorgung & Häckseln</h4>
                <p className="text-sm text-gray-600">Wurzelstockfräsen, Holzhäckseln und nachhaltige Verwertung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section - Preview for "Über uns" Page */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Über Lohnunternehmen Schneider
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ein Einblick in unser Familienunternehmen – die vollständige Geschichte und Details 
              finden Sie auf der künftigen "Über uns"-Seite.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Über 20 Jahre Erfahrung</h3>
                    <p className="text-gray-600">Familiengeführtes Unternehmen mit bewährter Expertise im Westerwald</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Zertifiziert & geschult</h3>
                    <p className="text-gray-600">ZTV-Baumpflege, DFSZ-zertifiziert, modernste Sicherheitstechnik</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Eigener Maschinenpark</h3>
                    <p className="text-gray-600">Von Hubarbeitsbühne bis Seilklettertechnik – alles aus einer Hand</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  Mehr über unsere Geschichte, das Team und unsere Philosophie 
                  erfahren Sie auf der künftigen "Über uns"-Seite.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Professionelle Waldarbeiten" 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-green-600/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview - Will become full contact page */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Kontakt & Anfrage
          </h2>
          <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
            Sprechen Sie uns direkt an oder nutzen Sie künftig das ausführliche Kontaktformular 
            auf der separaten Kontaktseite.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            (Vollständiges Kontaktformular, Anfahrtskarte und Öffnungszeiten folgen auf eigener Seite)
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6 text-green-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">02662 948186</p>
                <p className="text-sm text-gray-600">Festnetz</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6 text-green-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">0170 9091450</p>
                <p className="text-sm text-gray-600">Mobil</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6 text-green-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">E-Mail</p>
                <p className="text-sm text-gray-600">info@lohnunternehmen-schneider.de</p>
              </div>
            </div>
          </div>
          
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            Zur Kontaktseite →
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Lohnunternehmen Schneider</h3>
              <p className="text-gray-400 mb-4">
                Sebastian Schneider<br />
                Auf dem Röffel 6<br />
                57629 Merkelbach
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Schnellkontakt</h4>
              <p className="text-gray-400 text-sm mb-2">
                Tel: 02662 948186
              </p>
              <p className="text-gray-400 text-sm mb-2">
                Mobil: 0170 9091450
              </p>
              <p className="text-gray-400 text-sm">
                info@lohnunternehmen-schneider.de
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Website-Struktur</h4>
              <div className="space-y-2 text-sm">
                <div className="text-gray-400">Impressum (geplant)</div>
                <div className="text-gray-400">Datenschutz (geplant)</div>
                <div className="text-gray-400">Sitemap (geplant)</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Lohnunternehmen Schneider. Alle Rechte vorbehalten.
              </p>
              <div className="text-gray-500 text-xs text-center md:text-right">
                <p className="italic mb-1">
                  Website-Prototyp in Entwicklung durch ooliv Werbeagentur
                </p>
                <p>
                  Ausbau zu vollständiger Website mit Unterseiten geplant
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

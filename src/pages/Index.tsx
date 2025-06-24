
import React, { useState } from 'react';
import { Phone, Mail, Menu, X, Star } from 'lucide-react';
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
          <div className="font-bold text-xl text-gray-800">
            [Firmen-Logo hier]
          </div>
          
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-gray-50">
                <Menu className="h-6 w-6 text-gray-800" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md bg-gray-800 text-white">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold">Navigation</h2>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:bg-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                
                <nav className="flex flex-col space-y-3 flex-1">
                  <div className="text-lg py-3 px-4 rounded bg-gray-700/50">
                    → Startseite
                  </div>
                  
                  <div>
                    <div className="text-lg py-3 px-4 rounded hover:bg-gray-700 transition-colors cursor-pointer">
                      → Leistungen
                    </div>
                    <div className="ml-6 space-y-2 mt-2">
                      <div className="text-sm py-2 px-4 text-gray-200 hover:bg-gray-700 rounded cursor-pointer">
                        ↳ Baumarbeiten & Baumpflege
                      </div>
                      <div className="text-sm py-2 px-4 text-gray-200 hover:bg-gray-700 rounded cursor-pointer">
                        ↳ EPS-Bekämpfung
                      </div>
                      <div className="text-sm py-2 px-4 text-gray-200 hover:bg-gray-700 rounded cursor-pointer">
                        ↳ Forstdienstleistungen
                      </div>
                      <div className="text-sm py-2 px-4 text-gray-200 hover:bg-gray-700 rounded cursor-pointer">
                        ↳ Landwirtschaft
                      </div>
                      <div className="text-sm py-2 px-4 text-gray-200 hover:bg-gray-700 rounded cursor-pointer">
                        ↳ Natur- & Artenschutz
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-lg py-3 px-4 rounded hover:bg-gray-700 transition-colors cursor-pointer">
                    → Über uns
                  </div>
                  <div className="text-lg py-3 px-4 rounded hover:bg-gray-700 transition-colors cursor-pointer">
                    → Kontakt
                  </div>
                </nav>
                
                <div className="mt-auto pt-6 border-t border-gray-700">
                  <p className="text-sm text-gray-200 italic mb-2">
                    Diese Seite ist ein erster Prototyp im Rahmen eines Website-Relaunchs durch die ooliv Werbeagentur.
                  </p>
                  <p className="text-xs text-gray-300">
                    Weitere Inhalte und Unterseiten folgen.
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-100 text-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600 text-lg">[Hero-Bild kommt hier hin - Waldarbeiten/Maschinen]</span>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            [Hauptüberschrift hier]
            <span className="block text-gray-600">[Subline folgt]</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            [Leistungsübersicht • Kurzbeschreibung • USP]
          </p>
          <Button 
            size="lg" 
            className="bg-gray-600 text-white hover:bg-gray-700 text-lg px-8 py-6 rounded"
          >
            [CTA-Button Text]
          </Button>
          
          <div className="mt-12 p-4 bg-white/80 rounded border border-gray-200">
            <p className="text-gray-600 text-sm italic">
              [Hinweistext für Prototyp-Status]
            </p>
          </div>
        </div>
      </section>

      {/* Service Teasers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              [Überschrift Leistungsbereiche]
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              [Einleitungstext für Leistungen - erklärt Struktur für spätere Unterseiten]
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Baumarbeiten Teaser */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-gray-400">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500">[Icon]</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">[Baumarbeiten & Baumpflege]</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      [Textabschnitt für Baumarbeiten - Professional Baumfällungen, Pflege, Seilklettertechnik etc.]
                    </p>
                    <div className="text-gray-600 font-medium text-sm flex items-center">
                      <span>[Link zur Detailseite]</span>
                      <span className="ml-2 text-xs bg-gray-100 px-2 py-1 rounded">(in Vorbereitung)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* EPS-Bekämpfung Teaser */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-gray-400">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500">[Icon]</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">[EPS-Bekämpfung]</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      [Textabschnitt für EPS-Bekämpfung - Eichenprozessionsspinner, zertifizierte Fachkräfte etc.]
                    </p>
                    <div className="text-gray-600 font-medium text-sm flex items-center">
                      <span>[Link zur Detailseite]</span>
                      <span className="ml-2 text-xs bg-gray-100 px-2 py-1 rounded">(in Vorbereitung)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Forstdienstleistungen Teaser */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-gray-400">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500">[Icon]</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">[Forstdienstleistungen]</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      [Textabschnitt für Forstwirtschaft - Holzeinschlag, Rückung, Lichtraumprofilschnitt etc.]
                    </p>
                    <div className="text-gray-600 font-medium text-sm flex items-center">
                      <span>[Link zur Detailseite]</span>
                      <span className="ml-2 text-xs bg-gray-100 px-2 py-1 rounded">(in Vorbereitung)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Landwirtschaft Teaser */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-gray-400">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500">[Icon]</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900">[Landwirtschaftliche Unterstützung]</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      [Textabschnitt für Landwirtschaft - Mähwerk, Heuwender, Schwader, Ballenpresse etc.]
                    </p>
                    <div className="text-gray-600 font-medium text-sm flex items-center">
                      <span>[Link zur Detailseite]</span>
                      <span className="ml-2 text-xs bg-gray-100 px-2 py-1 rounded">(in Vorbereitung)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services Preview */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-8">[Weitere Spezialbereiche]</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded border">
                <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center mx-auto mb-4">
                  <span className="text-xs text-gray-500">[Icon]</span>
                </div>
                <h4 className="font-bold mb-2">[Natur- & Artenschutz]</h4>
                <p className="text-sm text-gray-600">[Kurzbeschreibung - Blühstreifen, Nistkästen etc.]</p>
              </div>
              <div className="p-6 bg-white rounded border">
                <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center mx-auto mb-4">
                  <span className="text-xs text-gray-500">[Icon]</span>
                </div>
                <h4 className="font-bold mb-2">[Entsorgung & Häckseln]</h4>
                <p className="text-sm text-gray-600">[Kurzbeschreibung - Wurzelstockfräsen, Holzhäckseln etc.]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Bewertungen Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              [Kundenstimmen & Bewertungen]
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [Einleitungstext zu Google-Bewertungen und Kundenzufriedenheit]
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bewertung 1 */}
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "[Kundenzitat hier - Gute Arbeit. Pünktlich und zuverlässig.]"
                </p>
                <p className="font-semibold text-gray-900">Sabine W.</p>
                <p className="text-sm text-gray-500">Google Bewertung</p>
              </CardContent>
            </Card>

            {/* Bewertung 2 */}
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="w-5 h-5 text-gray-300" />
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "[Bewertung ohne Text - nur Sterne-Rating]"
                </p>
                <p className="font-semibold text-gray-900">Chris</p>
                <p className="text-sm text-gray-500">Google Bewertung</p>
              </CardContent>
            </Card>

            {/* Bewertung 3 */}
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "[5-Sterne Bewertung ohne Textkommentar]"
                </p>
                <p className="font-semibold text-gray-900">Markus Franzl</p>
                <p className="text-sm text-gray-500">Google Bewertung</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              [Link zu allen Google-Bewertungen] • [Durchschnittsbewertung anzeigen]
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section - Preview for "Über uns" Page */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              [Über uns - Überschrift hier]
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              [Einleitungstext für Über uns Sektion - Verweis auf künftige Unterseite]
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">[USP 1 - Erfahrung]</h3>
                    <p className="text-gray-600">[Beschreibung Erfahrung und Familienunternehmen]</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">[USP 2 - Zertifizierung]</h3>
                    <p className="text-gray-600">[Beschreibung Zertifikate und Sicherheit]</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">[USP 3 - Maschinenpark]</h3>
                    <p className="text-gray-600">[Beschreibung eigene Technik und Ausstattung]</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white rounded border">
                <p className="text-sm text-gray-600 italic">
                  [Hinweis auf künftige Über uns-Seite mit mehr Details]
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-300 rounded h-96 w-full flex items-center justify-center">
                <span className="text-gray-600 text-lg">[Bild Team/Maschinenpark hier]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            [Kontakt & Anfrage - Überschrift]
          </h2>
          <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto">
            [Einleitungstext Kontakt - Verweis auf künftige Kontaktseite]
          </p>
          <p className="text-sm text-gray-500 mb-8">
            [Hinweis auf Kontaktformular und erweiterte Kontaktoptionen]
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6 text-gray-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">[Telefonnummer 1]</p>
                <p className="text-sm text-gray-600">Festnetz</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6 text-gray-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">[Telefonnummer 2]</p>
                <p className="text-sm text-gray-600">Mobil</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6 text-gray-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">[E-Mail]</p>
                <p className="text-sm text-gray-600">[E-Mail Adresse]</p>
              </div>
            </div>
          </div>
          
          <Button size="lg" className="bg-gray-600 hover:bg-gray-700 text-white">
            [Button zur Kontaktseite]
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">[Firmenname]</h3>
              <p className="text-gray-400 mb-4">
                [Name Inhaber]<br />
                [Adresse Zeile 1]<br />
                [Adresse Zeile 2]
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">[Schnellkontakt]</h4>
              <p className="text-gray-400 text-sm mb-2">
                [Tel: Nummer]
              </p>
              <p className="text-gray-400 text-sm mb-2">
                [Mobil: Nummer]
              </p>
              <p className="text-gray-400 text-sm">
                [E-Mail Adresse]
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">[Website-Struktur]</h4>
              <div className="space-y-2 text-sm">
                <div className="text-gray-400">[Impressum] (geplant)</div>
                <div className="text-gray-400">[Datenschutz] (geplant)</div>
                <div className="text-gray-400">[Sitemap] (geplant)</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                [Copyright-Text hier]
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

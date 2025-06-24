
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
                
                <nav className="flex flex-col space-y-4 flex-1">
                  <a href="#" className="text-lg py-3 px-4 rounded hover:bg-green-700 transition-colors">
                    → Startseite
                  </a>
                  <a href="#" className="text-lg py-3 px-4 rounded hover:bg-green-700 transition-colors">
                    → Leistungen
                  </a>
                  <a href="#" className="text-lg py-3 px-4 rounded hover:bg-green-700 transition-colors">
                    → Über uns
                  </a>
                  <a href="#" className="text-lg py-3 px-4 rounded hover:bg-green-700 transition-colors">
                    → Referenzen
                  </a>
                  <a href="#" className="text-lg py-3 px-4 rounded hover:bg-green-700 transition-colors">
                    → Kontakt
                  </a>
                </nav>
                
                <div className="mt-auto pt-6 border-t border-green-700">
                  <p className="text-sm text-green-200 italic">
                    Diese Website wird aktuell für Sie vorbereitet von der ooliv Werbeagentur
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

      {/* Services Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professionelle Lösungen für Baum, Forst und Landschaft – 
              mit eigenem Maschinenpark und über 20 Jahren Erfahrung
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">🌳</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Baumarbeiten</h3>
                <p className="text-gray-600 mb-4">
                  Fällungen, Pflege nach ZTV-Baumpflege, Seilklettertechnik
                </p>
                <div className="text-green-600 font-medium text-sm">
                  Mehr erfahren →
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">🌲</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Forstpflege</h3>
                <p className="text-gray-600 mb-4">
                  Holzeinschlag, Rückung, Lichtraumprofilschnitt
                </p>
                <div className="text-green-600 font-medium text-sm">
                  Mehr erfahren →
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">🚜</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Landwirtschaft</h3>
                <p className="text-gray-600 mb-4">
                  Unterstützung für Landwirte, Mähwerk, Ballenpresse
                </p>
                <div className="text-green-600 font-medium text-sm">
                  Mehr erfahren →
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">🦋</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Artenschutz</h3>
                <p className="text-gray-600 mb-4">
                  Blühstreifen, Nistkästen, Biotoppflege
                </p>
                <div className="text-green-600 font-medium text-sm">
                  Mehr erfahren →
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">🐛</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">EPS-Bekämpfung</h3>
                <p className="text-gray-600 mb-4">
                  Eichenprozessionsspinner fachgerecht entfernen
                </p>
                <div className="text-green-600 font-medium text-sm">
                  Mehr erfahren →
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">🪓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Entsorgung</h3>
                <p className="text-gray-600 mb-4">
                  Häckseln, Wurzelstockfräsen, Brennholz
                </p>
                <div className="text-green-600 font-medium text-sm">
                  Mehr erfahren →
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Warum Lohnunternehmen Schneider?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Über 20 Jahre Erfahrung</h3>
                    <p className="text-gray-600">Familiengeführtes Unternehmen mit bewährter Expertise</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Zertifiziert & geschult</h3>
                    <p className="text-gray-600">ZTV-Baumpflege, DFSZ-zertifiziert, modernste Technik</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Eigener Maschinenpark</h3>
                    <p className="text-gray-600">Von Hubarbeitsbühne bis Seilklettertechnik</p>
                  </div>
                </div>
              </div>
              
              <Button className="mt-8 bg-green-600 hover:bg-green-700 text-white">
                Mehr über uns erfahren
              </Button>
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

      {/* Contact Teaser */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Sprechen wir über Ihr Projekt
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Sie möchten Bäume pflegen, Flächen bearbeiten oder benötigen Hilfe bei landwirtschaftlichen Arbeiten? 
            Dann freuen wir uns über Ihre Anfrage.
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
            Kontaktformular öffnen
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
              <h4 className="font-semibold mb-4">Kontakt</h4>
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
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm block">Impressum</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm block">Datenschutz</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Lohnunternehmen Schneider. Alle Rechte vorbehalten.
            </p>
            <p className="text-gray-500 text-xs mt-2 italic">
              Website-Konzept in Vorbereitung durch ooliv Werbeagentur
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

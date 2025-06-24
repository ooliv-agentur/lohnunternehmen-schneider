
import React from 'react';
import { Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
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
            onClick={() => scrollToSection('kontakt')}
          >
            Jetzt Kontakt aufnehmen
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/80" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Familiengeführt, erfahren, bestens ausgestattet
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Seit über zwei Jahrzehnten stehen wir als Lohnunternehmen Schneider für präzise, 
                sichere und professionelle Arbeiten rund um Baum, Natur und Landschaft.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ob im Forst, in der kommunalen Pflege oder in der Landwirtschaft – mit unserem 
                eigenen Maschinenpark und einem erfahrenen Team erledigen wir Aufträge schnell, 
                effizient und verantwortungsbewusst.
              </p>
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Zertifiziert & geschult:</h3>
                <p className="text-green-700">
                  Wir arbeiten nach den Richtlinien der ZTV-Baumpflege, sind DFSZ-zertifiziert 
                  und setzen modernste Technik ein – von der Hubarbeitsbühne bis zur Seilklettertechnik.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Waldarbeiten" 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Unsere Leistungen
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Baumarbeiten */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🌳</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Baumarbeiten & Baumpflege</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Baumfällungen mit Spezialtechnik</li>
                  <li>• Pflege nach ZTV-Baumpflege</li>
                  <li>• Seilklettertechnik</li>
                  <li>• Kronensicherungen</li>
                </ul>
              </CardContent>
            </Card>

            {/* Artenschutz */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🦋</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Natur- & Artenschutz</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Blühstreifen & Mähgutübertragung</li>
                  <li>• Nistkästen & Insektenhotels</li>
                  <li>• Amphibienschutzzäune</li>
                  <li>• Biotop- & Gewässerpflege</li>
                </ul>
              </CardContent>
            </Card>

            {/* Forstpflege */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🌲</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Forstpflege & Holzarbeiten</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Holzeinschlag & Rückung</li>
                  <li>• Bankett- & Grabenpflege</li>
                  <li>• Lichtraumprofilschnitt</li>
                  <li>• Kulturpflege & Gatterbau</li>
                </ul>
              </CardContent>
            </Card>

            {/* Landwirtschaft */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🚜</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Landwirtschaftliche Dienstleistungen</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Unterstützung für Landwirte</li>
                  <li>• Mähwerk, Heuwender, Schwader</li>
                  <li>• Ballenpresse, Düngerstreuer</li>
                  <li>• Bodenpflege & Wiesenschleppen</li>
                </ul>
              </CardContent>
            </Card>

            {/* Schädlingsbekämpfung */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🐛</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Eichenprozessionsspinner-Bekämpfung</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Fachgerechte Entfernung</li>
                  <li>• Absaugung & Schutzkleidung</li>
                  <li>• Verklebung der Raupenhaare</li>
                  <li>• Zertifiziertes Personal</li>
                </ul>
              </CardContent>
            </Card>

            {/* Häckseln */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🪓</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Häckseln, Entsorgung, Wurzelstockfräsen</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Holzhäckseln & Abtransport</li>
                  <li>• Wurzelstockentfernung</li>
                  <li>• Brennholzaufbereitung</li>
                  <li>• Individuelle Weiterverwendung</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontakt</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Sie möchten Bäume pflegen, Flächen bearbeiten oder benötigen Hilfe bei landwirtschaftlichen Arbeiten?
              Dann freuen wir uns über Ihre Anfrage:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Baum- und Landschaftspflege Schneider
              </h3>
              <div className="space-y-4 mb-8">
                <p className="text-lg font-medium text-gray-900">Sebastian Schneider</p>
                <p className="text-gray-700">Auf dem Röffel 6<br />57629 Merkelbach</p>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Telefon: 02662 948186</p>
                    <p className="text-gray-700">Mobil: 0170 9091450</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-600" />
                  <a 
                    href="mailto:info@lohnunternehmen-schneider.de" 
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    info@lohnunternehmen-schneider.de
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Kontaktformular</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" type="text" required />
                    </div>
                    <div>
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Betreff</Label>
                    <Input id="subject" type="text" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Nachricht *</Label>
                    <Textarea id="message" rows={4} required />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox id="privacy" />
                    <Label htmlFor="privacy" className="text-sm text-gray-600">
                      Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu. *
                    </Label>
                  </div>
                  
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Nachricht senden
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Lohnunternehmen Schneider</h3>
              <p className="text-gray-400">
                Professionelle Baum- und Landschaftspflege im Westerwald seit über 20 Jahren.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <p className="text-gray-400 text-sm">
                Auf dem Röffel 6<br />
                57629 Merkelbach<br />
                Tel: 02662 948186
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

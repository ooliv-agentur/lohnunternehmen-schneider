
import React from 'react';
import { X, TreePine, Shield, Leaf, Tractor, Phone, ArrowRight, Users, Award } from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const einsatzbereiche = [
    {
      title: 'Baumarbeiten & Baumpflege',
      description: 'Zertifizierte Fällungen & Pflege mit Spezialtechnik',
      icon: TreePine
    },
    {
      title: 'EPS-Bekämpfung',
      description: 'Sichere Entfernung von Eichenprozessionsspinnern',
      icon: Shield
    },
    {
      title: 'Forstdienstleistungen',
      description: 'Holzeinschlag, Rückung, Lichtraumprofile',
      icon: TreePine
    },
    {
      title: 'Landwirtschaftliche Unterstützung',
      description: 'Mähwerke, Heuwender, Ballenpressen',
      icon: Tractor
    },
    {
      title: 'Natur- & Artenschutz',
      description: 'Blühstreifen, Nistkästen, ökologische Pflege',
      icon: Leaf
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 p-3 hover:bg-gray-100 rounded-full transition-colors group z-10"
      >
        <X className="h-6 w-6 text-gray-700 group-hover:text-gray-900" />
      </button>

      <div className="min-h-screen flex">
        {/* Left Column - Navigation */}
        <div className="w-3/5 px-16 py-20 bg-gray-50">
          <div className="max-w-xl">
            {/* Main Navigation */}
            <div className="mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-2">
                Navigation
              </h2>
              <div className="w-16 h-0.5 bg-green-600 mb-12"></div>
              
              <nav className="space-y-8">
                <div className="text-2xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer pb-2 border-b border-transparent hover:border-green-200">
                  Startseite
                </div>
                
                {/* Einsatzbereiche Section */}
                <div>
                  <div className="text-2xl font-light text-gray-900 mb-6 pb-2">
                    Einsatzbereiche
                  </div>
                  <div className="ml-6 space-y-4">
                    {einsatzbereiche.map((bereich, index) => (
                      <div key={index} className="flex items-start space-x-4 hover:text-green-800 transition-colors cursor-pointer group py-2">
                        <bereich.icon className="h-5 w-5 text-green-600 group-hover:text-green-800 mt-1 flex-shrink-0" />
                        <div>
                          <div className="text-lg font-medium text-gray-900 group-hover:text-green-800">
                            {bereich.title}
                          </div>
                          <div className="text-sm text-gray-600 group-hover:text-green-700">
                            {bereich.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-2xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer pb-2 border-b border-transparent hover:border-green-200">
                  Über uns
                </div>
                
                <div className="text-2xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer pb-2 border-b border-transparent hover:border-green-200">
                  Referenzen & Projekte
                </div>
                
                <div className="text-2xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer pb-2 border-b border-transparent hover:border-green-200">
                  Angebot anfordern
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Right Column - Context & CTA */}
        <div className="w-2/5 px-12 py-20 bg-green-50 relative">
          <div className="max-w-sm">
            <div className="mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Sebastian Schneider
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Professionelle Baum- und Forstarbeiten aus dem Westerwald. 
                Seit über 20 Jahren im Einsatz für Natur, Landschaft und Sicherheit.
              </p>
              
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-3">
                  <Award className="w-4 h-4 text-green-600" />
                  <span>Zertifizierte Fachkräfte</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Tractor className="w-4 h-4 text-green-600" />
                  <span>Eigener Maschinenpark</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-4 h-4 text-green-600" />
                  <span>Kostenlose Erstberatung</span>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-green-100">
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                Jetzt Angebot anfordern
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Unverbindliche Beratung & Kostenvoranschlag
              </p>
              <button className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 group">
                <Phone className="h-4 w-4" />
                <span>Kontakt aufnehmen</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

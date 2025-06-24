
import React from 'react';
import { X, TreePine, Shield, Tractor, Leaf } from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <button 
        onClick={onClose}
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
  );
};

export default Navigation;

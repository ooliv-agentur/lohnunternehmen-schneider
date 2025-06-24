
import React from 'react';
import { X, TreePine, Shield, Tractor, Leaf, Wrench } from 'lucide-react';

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
        className="absolute top-8 right-8 p-4 hover:bg-green-50 rounded-full transition-colors group"
      >
        <X className="h-8 w-8 text-green-700 group-hover:text-green-900" />
      </button>

      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Navigation Structure */}
          <div className="text-center lg:text-left">
            <div className="text-6xl font-light text-gray-900 mb-16 tracking-tight">
              Navigation
            </div>
            
            <nav className="space-y-10">
              <div className="text-4xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer pb-3 border-b border-transparent hover:border-green-200">
                Startseite
              </div>
              
              <div className="space-y-8">
                <div className="text-4xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer pb-3 border-b border-transparent hover:border-green-200">
                  Was wir können
                </div>
                <div className="ml-8 space-y-6 text-xl text-gray-700">
                  <div className="flex items-center space-x-4 hover:text-green-800 transition-colors cursor-pointer group">
                    <TreePine className="h-6 w-6 text-green-600 group-hover:text-green-800" />
                    <span>Baumarbeiten & Baumpflege</span>
                  </div>
                  <div className="flex items-center space-x-4 hover:text-green-800 transition-colors cursor-pointer group">
                    <Shield className="h-6 w-6 text-green-600 group-hover:text-green-800" />
                    <span>EPS-Bekämpfung</span>
                  </div>
                  <div className="flex items-center space-x-4 hover:text-green-800 transition-colors cursor-pointer group">
                    <TreePine className="h-6 w-6 text-green-600 group-hover:text-green-800" />
                    <span>Forstdienstleistungen</span>
                  </div>
                  <div className="flex items-center space-x-4 hover:text-green-800 transition-colors cursor-pointer group">
                    <Tractor className="h-6 w-6 text-green-600 group-hover:text-green-800" />
                    <span>Landwirtschaft</span>
                  </div>
                  <div className="flex items-center space-x-4 hover:text-green-800 transition-colors cursor-pointer group">
                    <Leaf className="h-6 w-6 text-green-600 group-hover:text-green-800" />
                    <span>Natur- & Artenschutz</span>
                  </div>
                </div>
              </div>
              
              <div className="text-4xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer pb-3 border-b border-transparent hover:border-green-200">
                Über uns
              </div>
              
              <div className="text-4xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer pb-3 border-b border-transparent hover:border-green-200">
                Anfrage starten
              </div>
            </nav>
          </div>

          {/* Strategic Context - Enhanced */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-3xl border border-green-200 shadow-lg">
            <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
              Strategischer Website-Prototyp
            </div>
            <h3 className="text-3xl font-bold text-green-900 mb-6">
              Ihre neue Online-Präsenz entsteht
            </h3>
            <p className="text-green-800 leading-relaxed mb-8 text-lg">
              Diese Website zeigt, wie Ihre neue Online-Präsenz strukturiert sein wird – mit echten Inhalten, modernen Seiten und Platz für Ihre Expertise. Jeder Bereich wird individuell ausgearbeitet und mit authentischen Inhalten gefüllt.
            </p>
            <div className="bg-white/60 p-4 rounded-xl">
              <div className="text-green-700 font-semibold mb-2">
                → Basis für die gemeinsame Weiterentwicklung
              </div>
              <div className="text-green-600 text-sm">
                Gestalten Sie sie mit uns!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

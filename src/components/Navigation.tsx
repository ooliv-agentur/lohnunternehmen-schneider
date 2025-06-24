
import React from 'react';
import { X } from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  return (
    <div 
      className={`fixed inset-0 z-50 bg-white transition-all duration-500 ease-in-out ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      {/* Close button - positioned to match header menu button */}
      <button 
        onClick={onClose}
        className="fixed top-4 right-6 p-4 hover:bg-gray-50 rounded-full transition-all duration-200 group z-10"
      >
        <X className="h-6 w-6 text-green-700 group-hover:text-green-800 transition-colors" />
      </button>

      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-4xl mx-auto w-full">
          <nav className="space-y-16">
            {/* Hauptnavigation */}
            <div className="space-y-6">
              <div className="text-4xl md:text-5xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight leading-tight">
                Startseite
              </div>
              
              <div className="text-4xl md:text-5xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight leading-tight">
                Über uns
              </div>
              
              <div className="text-4xl md:text-5xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight leading-tight">
                Maschinenpark
              </div>
              
              <div className="text-4xl md:text-5xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight leading-tight">
                Kontakt
              </div>
            </div>

            {/* Separator */}
            <div className="w-full h-px bg-gray-200"></div>
            
            {/* Einsatzbereiche */}
            <div className="space-y-6">
              <div className="text-2xl md:text-3xl font-light text-gray-500 tracking-tight mb-8">
                Einsatzbereiche
              </div>
              
              <div className="space-y-4 ml-4">
                <div className="text-xl md:text-2xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-2 tracking-tight">
                  Baumarbeiten & Baumpflege
                </div>
                <div className="text-xl md:text-2xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-2 tracking-tight">
                  EPS-Bekämpfung
                </div>
                <div className="text-xl md:text-2xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-2 tracking-tight">
                  Forstdienstleistungen
                </div>
                <div className="text-xl md:text-2xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-2 tracking-tight">
                  Landwirtschaftliche Arbeiten
                </div>
                <div className="text-xl md:text-2xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-2 tracking-tight">
                  Natur- & Artenschutz
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

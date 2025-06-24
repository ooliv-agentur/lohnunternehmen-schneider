
import React from 'react';
import { X } from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const einsatzbereiche = [
    'Baumarbeiten & Baumpflege',
    'EPS-Bekämpfung',
    'Forstdienstleistungen',
    'Landwirtschaftliche Arbeiten',
    'Natur- & Artenschutz'
  ];

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <button 
        onClick={onClose}
        className="absolute top-12 right-12 p-4 hover:bg-gray-50 rounded-full transition-colors group z-10"
      >
        <X className="h-10 w-10 text-gray-800 group-hover:text-gray-900" />
      </button>

      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-5xl mx-auto w-full">
          <nav className="space-y-20">
            {/* Hauptnavigation */}
            <div className="space-y-8">
              <div className="text-7xl md:text-9xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight leading-none">
                Startseite
              </div>
              
              <div className="text-7xl md:text-9xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight leading-none">
                Über uns
              </div>
              
              <div className="text-7xl md:text-9xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight leading-none">
                Maschinenpark
              </div>
              
              <div className="text-7xl md:text-9xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight leading-none">
                Kontakt
              </div>
            </div>

            {/* Separator */}
            <div className="w-full h-px bg-gray-200"></div>
            
            {/* Einsatzbereiche */}
            <div className="space-y-8">
              <div className="text-4xl md:text-5xl font-light text-gray-500 tracking-tight mb-12">
                Einsatzbereiche
              </div>
              
              <div className="space-y-6">
                {einsatzbereiche.map((bereich, index) => (
                  <div key={index} className="text-3xl md:text-4xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-3 tracking-tight">
                    {bereich}
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

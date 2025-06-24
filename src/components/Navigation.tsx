
import React from 'react';
import { X } from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const leistungen = [
    'Baumarbeiten & Baumpflege',
    'EPS-Bekämpfung',
    'Forstdienstleistungen',
    'Landwirtschaft',
    'Natur- & Artenschutz'
  ];

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 p-4 hover:bg-gray-100 rounded-full transition-colors group z-10"
      >
        <X className="h-8 w-8 text-gray-800 group-hover:text-gray-900" />
      </button>

      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-8">
          <nav className="space-y-12">
            <div className="text-6xl md:text-8xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight">
              Startseite
            </div>
            
            <div>
              <div className="text-6xl md:text-8xl font-light text-gray-900 mb-8 tracking-tight">
                Leistungen
              </div>
              <div className="ml-8 space-y-4">
                {leistungen.map((leistung, index) => (
                  <div key={index} className="text-2xl md:text-3xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-2">
                    {leistung}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-6xl md:text-8xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight">
              Über uns
            </div>
            
            <div className="text-6xl md:text-8xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight">
              Kontakt
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

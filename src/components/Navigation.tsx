
import React from 'react';
import { X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      {/* Close button */}
      <button 
        onClick={onClose}
        className="fixed top-4 right-6 p-4 hover:bg-gray-50 rounded-full transition-all duration-200 group z-10"
      >
        <X className="h-6 w-6 text-green-700 group-hover:text-green-800 transition-colors" />
      </button>

      <div className="min-h-screen flex items-center justify-between px-8 max-w-6xl mx-auto">
        {/* Main Navigation */}
        <div className="flex-1">
          <nav className="space-y-8">
            <div className="space-y-4">
              <div className="text-4xl md:text-5xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight">
                Startseite
              </div>
              
              <div className="text-4xl md:text-5xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight">
                Über uns
              </div>
              
              <div className="text-4xl md:text-5xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight">
                Maschinenpark
              </div>
              
              <div className="text-4xl md:text-5xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight">
                Einsatzbereiche
              </div>
            </div>

            {/* Sub-services */}
            <div className="ml-8 space-y-3">
              <div className="text-xl md:text-2xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-1">
                Baumpflege & Fällung
              </div>
              <div className="text-xl md:text-2xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-1">
                EPS-Bekämpfung
              </div>
              <div className="text-xl md:text-2xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-1">
                Forstdienstleistungen
              </div>
              <div className="text-xl md:text-2xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-1">
                Landwirtschaft
              </div>
              <div className="text-xl md:text-2xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-1">
                Artenschutz
              </div>
            </div>

            <div className="pt-8">
              <div className="text-4xl md:text-5xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight">
                Kontakt
              </div>
            </div>
          </nav>
        </div>

        {/* Contact Info Block */}
        <div className="flex-1 max-w-md ml-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Direkter Kontakt
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-900">02662 / 948186</p>
                  <p className="text-gray-600 text-sm">Festnetz</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-900">0170 / 9091450</p>
                  <p className="text-gray-600 text-sm">Mobil</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              Jetzt anrufen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

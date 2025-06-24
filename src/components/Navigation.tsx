
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
      {/* Close button - fixed position */}
      <button 
        onClick={onClose}
        className="fixed top-3 right-4 sm:top-4 sm:right-4 p-3 sm:p-4 hover:bg-gray-50 rounded-full transition-all duration-300 group z-50"
      >
        <X className="h-5 w-5 sm:h-6 sm:w-6 text-green-700 group-hover:text-green-800 transition-colors" />
      </button>

      <div className="min-h-screen flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 sm:px-8 max-w-6xl mx-auto overflow-hidden pt-16 lg:pt-0">
        {/* Main Navigation */}
        <div className="flex-1 lg:max-w-lg">
          <nav className="space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight py-1">
                Startseite
              </div>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight py-1">
                Über uns
              </div>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight py-1">
                Maschinenpark
              </div>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight py-1">
                Einsatzbereiche
              </div>
            </div>

            {/* Sub-services */}
            <div className="ml-4 sm:ml-6 space-y-1 sm:space-y-2">
              <div className="text-base sm:text-lg lg:text-xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-1">
                Baumpflege & Fällung
              </div>
              <div className="text-base sm:text-lg lg:text-xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-1">
                EPS-Bekämpfung
              </div>
              <div className="text-base sm:text-lg lg:text-xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-1">
                Forstdienstleistungen
              </div>
              <div className="text-base sm:text-lg lg:text-xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-1">
                Landwirtschaft
              </div>
              <div className="text-base sm:text-lg lg:text-xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-1">
                Artenschutz
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight py-1">
                Kontakt
              </div>
            </div>
          </nav>
        </div>

        {/* Contact Info Block */}
        <div className="flex-1 lg:max-w-md lg:ml-16 mt-8 lg:mt-0">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Direkter Kontakt
            </h3>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">02662 / 948186</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Festnetz</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">0170 / 9091450</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Mobil</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base">
              Jetzt anrufen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;


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
      {/* Close button - positioned exactly like burger button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="fixed top-6 right-6 border border-green-200 hover:border-green-400 hover:bg-green-50 transition-all duration-300 z-50"
        onClick={onClose}
      >
        <X className="h-6 w-6 text-green-700" />
      </Button>

      <div className="min-h-screen flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden pt-20 lg:pt-0">
        {/* Main Navigation */}
        <div className="flex-1 mb-8 lg:mb-0">
          <nav className="space-y-6">
            <div className="space-y-3">
              <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight">
                Startseite
              </div>
              
              <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight">
                Über uns
              </div>
              
              <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight">
                Maschinenpark
              </div>
              
              <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight">
                Einsatzbereiche
              </div>
            </div>

            {/* Sub-services */}
            <div className="ml-6 space-y-2">
              <div className="text-base md:text-lg lg:text-xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-1">
                Baumpflege & Fällung
              </div>
              <div className="text-base md:text-lg lg:text-xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-1">
                EPS-Bekämpfung
              </div>
              <div className="text-base md:text-lg lg:text-xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-1">
                Forstdienstleistungen
              </div>
              <div className="text-base md:text-lg lg:text-xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-1">
                Landwirtschaft
              </div>
              <div className="text-base md:text-lg lg:text-xl font-light text-gray-700 hover:text-green-700 transition-colors cursor-pointer py-1">
                Artenschutz
              </div>
            </div>

            <div className="pt-6">
              <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer tracking-tight">
                Kontakt
              </div>
            </div>
          </nav>
        </div>

        {/* Contact Info Block - now stacks below on mobile */}
        <div className="w-full lg:flex-1 lg:max-w-md lg:ml-16">
          <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
              Direkter Kontakt
            </h3>
            
            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
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

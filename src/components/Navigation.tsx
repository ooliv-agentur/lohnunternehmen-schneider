
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
      className={`fixed inset-0 z-50 bg-white transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <button 
        onClick={onClose}
        className="fixed top-4 right-4 p-4 hover:bg-gray-100 rounded-full transition-all duration-300 z-50"
      >
        <X className="h-6 w-6 text-gray-700" />
      </button>

      <div className="min-h-screen flex items-center justify-between px-8 max-w-6xl mx-auto">
        <div className="flex-1">
          <nav className="space-y-8">
            <div className="space-y-4">
              <div className="text-3xl md:text-4xl font-light text-gray-900 hover:text-green-600 transition-colors cursor-pointer">
                Startseite
              </div>
              
              <div className="text-3xl md:text-4xl font-light text-gray-900 hover:text-green-600 transition-colors cursor-pointer">
                Über uns
              </div>
              
              <div className="text-3xl md:text-4xl font-light text-gray-900 hover:text-green-600 transition-colors cursor-pointer">
                Einsatzbereiche
              </div>
              
              <div className="text-3xl md:text-4xl font-light text-gray-900 hover:text-green-600 transition-colors cursor-pointer">
                Maschinenpark
              </div>
              
              <div className="text-3xl md:text-4xl font-light text-gray-900 hover:text-green-600 transition-colors cursor-pointer">
                Kontakt
              </div>
            </div>
          </nav>
        </div>

        <div className="flex-1 max-w-md ml-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
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

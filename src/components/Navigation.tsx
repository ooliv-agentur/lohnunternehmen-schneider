
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
        className="absolute top-8 right-8 p-4 hover:bg-green-50 rounded-full transition-colors group"
      >
        <X className="h-8 w-8 text-green-700 group-hover:text-green-900" />
      </button>

      <div className="max-w-4xl mx-auto px-8 w-full text-center">
        <div className="text-6xl font-light text-gray-900 mb-16 tracking-tight">
          Navigation
        </div>
        
        <nav className="space-y-12">
          <div className="text-5xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer pb-4 border-b border-transparent hover:border-green-200">
            Startseite
          </div>
          
          <div className="space-y-10">
            <div className="text-5xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer pb-4 border-b border-transparent hover:border-green-200">
              Leistungen
            </div>
            <div className="ml-12 space-y-8 text-2xl text-gray-700">
              <div className="flex items-center space-x-6 hover:text-green-800 transition-colors cursor-pointer group">
                <TreePine className="h-8 w-8 text-green-600 group-hover:text-green-800" />
                <span>Baumarbeiten & Baumpflege</span>
              </div>
              <div className="flex items-center space-x-6 hover:text-green-800 transition-colors cursor-pointer group">
                <Shield className="h-8 w-8 text-green-600 group-hover:text-green-800" />
                <span>EPS-Bekämpfung</span>
              </div>
              <div className="flex items-center space-x-6 hover:text-green-800 transition-colors cursor-pointer group">
                <TreePine className="h-8 w-8 text-green-600 group-hover:text-green-800" />
                <span>Forstdienstleistungen</span>
              </div>
              <div className="flex items-center space-x-6 hover:text-green-800 transition-colors cursor-pointer group">
                <Tractor className="h-8 w-8 text-green-600 group-hover:text-green-800" />
                <span>Landwirtschaft</span>
              </div>
              <div className="flex items-center space-x-6 hover:text-green-800 transition-colors cursor-pointer group">
                <Leaf className="h-8 w-8 text-green-600 group-hover:text-green-800" />
                <span>Natur- & Artenschutz</span>
              </div>
            </div>
          </div>
          
          <div className="text-5xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer pb-4 border-b border-transparent hover:border-green-200">
            Über uns
          </div>
          
          <div className="text-5xl font-light text-gray-900 hover:text-green-700 transition-colors cursor-pointer pb-4 border-b border-transparent hover:border-green-200">
            Kontakt
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;


import React from 'react';
import { BadgeCheck } from 'lucide-react';

const NewFooter: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Sebastian Schneider Lohnunternehmen</h3>
          <p className="text-gray-600 mb-2">
            Sebastian Schneider · Auf dem Röfel 6 · 57629 Merkelbach
          </p>
          <p className="text-gray-600">
            info@lohnunternehmen-schneider.de
          </p>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
            <p className="text-gray-500 text-sm">
              © 2025 Sebastian Schneider Lohnunternehmen
            </p>
            <div className="flex space-x-1 text-gray-500 text-sm">
              <span className="hover:text-green-600 cursor-pointer">Impressum</span>
              <span>·</span>
              <span className="hover:text-green-600 cursor-pointer">Datenschutz</span>
            </div>
          </div>
          
          {/* Certification line */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-wrap items-center justify-center space-x-4 text-gray-600 text-sm">
              <span className="font-medium text-gray-900">Zertifiziert:</span>
              <div className="flex items-center space-x-2">
                <BadgeCheck className="w-4 h-4 text-green-600" />
                <span>DFSZ</span>
              </div>
              <span className="text-gray-400">·</span>
              <div className="flex items-center space-x-2">
                <BadgeCheck className="w-4 h-4 text-green-600" />
                <span>FLL Baumkontrolleur</span>
              </div>
              <span className="text-gray-400">·</span>
              <div className="flex items-center space-x-2">
                <BadgeCheck className="w-4 h-4 text-green-600" />
                <span>European Tree Worker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;

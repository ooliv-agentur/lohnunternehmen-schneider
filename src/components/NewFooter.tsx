
import React from 'react';

const NewFooter: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold mb-2">Sebastian Schneider</h3>
          <p className="text-gray-600 mb-1">
            Auf dem Röfel 6 · 57629 Merkelbach
          </p>
          <p className="text-gray-600">
            info@lohnunternehmen-schneider.de
          </p>
        </div>
        
        <div className="border-t border-gray-300 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 mb-6">
            <p className="text-gray-500 text-sm">
              © 2025 Sebastian Schneider Lohnunternehmen
            </p>
            <div className="flex space-x-1 text-gray-500 text-sm">
              <span>Impressum</span>
              <span>·</span>
              <span>Datenschutz</span>
            </div>
          </div>
          
          <div className="flex justify-center items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
              <span className="text-sm text-gray-600">DFSZ</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
              <span className="text-sm text-gray-600">FLL Baumkontrolleur</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
              <span className="text-sm text-gray-600">European Tree Worker</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;

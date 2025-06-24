
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Sebastian Schneider Lohnunternehmen</h3>
          <p className="text-gray-400 text-lg mb-2">
            Auf dem Röfel 6 · 57629 Merkelbach
          </p>
          <p className="text-gray-400 text-lg">
            info@schneider-lohnunternehmen.de
          </p>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
            <p className="text-gray-400">
              © 2025 Sebastian Schneider Lohnunternehmen
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Impressum</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

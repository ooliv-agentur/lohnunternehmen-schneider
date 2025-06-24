
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="mt-16">
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Sebastian Schneider Lohnunternehmen</h3>
            <p className="text-gray-300 text-lg mb-1">
              Auf dem Röfel 6 · 57629 Merkelbach
            </p>
            <p className="text-gray-300 text-lg">
              info@schneider-lohnunternehmen.de
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-8">
              <p className="text-gray-400">
                © 2025 Sebastian Schneider Lohnunternehmen
              </p>
              <div className="flex space-x-1 text-gray-400">
                <span>Impressum</span>
                <span>·</span>
                <span>Datenschutz</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

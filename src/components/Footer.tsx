
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="mt-20">
      <footer className="bg-gray-900 text-white py-10 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-3">Sebastian Schneider Lohnunternehmen</h3>
            <p className="text-gray-300 mb-1">
              Auf dem Röfel 6 · 57629 Merkelbach
            </p>
            <p className="text-gray-300">
              info@lohnunternehmen-schneider.de
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2025 Sebastian Schneider Lohnunternehmen
              </p>
              <div className="flex space-x-1 text-gray-400 text-sm">
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


import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Sebastian Schneider Lohnunternehmen</h3>
            <p className="text-gray-400 text-lg">
              Sebastian Schneider · Musterstraße 123 · 56789 Westerwald
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4 rounded-2xl mb-4 shadow-lg">
              <p className="text-white font-bold text-lg">
                Die neue Website entsteht –
              </p>
              <p className="text-green-100">
                gestalten Sie sie mit uns!
              </p>
            </div>
            <p className="text-gray-500">
              Konzeption durch ooliv Werbeagentur · Relaunch 2025
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Sebastian Schneider Lohnunternehmen · Datenschutz · Impressum
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

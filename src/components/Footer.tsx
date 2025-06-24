
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Sebastian Schneider Lohnunternehmen</h3>
            <p className="text-gray-400">
              Sebastian Schneider · Musterstraße 123 · 56789 Westerwald
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <div className="bg-green-900/30 px-4 py-2 rounded-lg mb-2">
              <p className="text-green-300 text-sm font-medium">
                Strategischer Website-Prototyp
              </p>
            </div>
            <p className="text-gray-500 text-sm">
              Konzeption durch ooliv Werbeagentur · Relaunch 2025
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Sebastian Schneider Lohnunternehmen
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

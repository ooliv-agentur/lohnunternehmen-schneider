
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
          <p className="text-gray-400">
            © 2025 Sebastian Schneider Lohnunternehmen · Impressum · Datenschutz
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

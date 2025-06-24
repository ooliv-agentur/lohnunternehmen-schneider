
import React from 'react';

const Intro: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-xl text-gray-600 leading-relaxed">
            Ihr Partner für professionelle Baumarbeiten, EPS-Bekämpfung und Spezialmaschinen – 
            für Kommunen, Landwirte und Forstämter.
          </p>
          
          <p className="text-lg text-gray-500 leading-relaxed">
            Mit modernster Technik und zertifizierten Fachkräften bieten wir Ihnen 
            zuverlässige Lösungen für alle Herausforderungen in Forst, Landwirtschaft und Baumpflege.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;

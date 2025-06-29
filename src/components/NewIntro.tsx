
import React from 'react';

const NewIntro: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight">
          Ihr Partner für professionelle Baumarbeiten, EPS-Bekämpfung und Spezialmaschinen – 
          für Kommunen, Landwirte und Forstämter im Westerwald
        </h2>
        
        <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
          Seit über 20 Jahren im Einsatz zwischen Köln und Frankfurt. Mit zertifizierten 
          Fachkräften und eigener Technik bieten wir Sicherheit, Qualität und Verlässlichkeit – bei jeder Aufgabe.
        </p>
      </div>
    </section>
  );
};

export default NewIntro;

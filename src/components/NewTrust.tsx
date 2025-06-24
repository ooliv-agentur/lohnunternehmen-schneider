
import React from 'react';
import { Calendar, Award, Wrench } from 'lucide-react';

const NewTrust: React.FC = () => {
  const benefits = [
    {
      icon: Calendar,
      title: "20+ Jahre Erfahrung",
      description: "Regional verwurzelt im Westerwald seit 2004"
    },
    {
      icon: Award,
      title: "Zertifizierte Fachkräfte",
      description: "European Tree Worker, FLL-Baumkontrolleur"
    },
    {
      icon: Wrench,
      title: "Eigener Maschinenpark",
      description: "Keine Wartezeiten, direkte Umsetzung"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Verlässlich seit 2004
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <IconComponent className="h-16 w-16 text-green-600 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-center items-center space-x-8 pt-8 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded"></div>
            <span className="text-sm text-gray-600 font-medium">DFSZ</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded"></div>
            <span className="text-sm text-gray-600 font-medium">FLL</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded"></div>
            <span className="text-sm text-gray-600 font-medium">ETW</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewTrust;

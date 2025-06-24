
import React from 'react';
import { TreePine, Bug, Tractor, Leaf, Shield } from 'lucide-react';

const NewServices: React.FC = () => {
  const services = [
    {
      icon: TreePine,
      title: "Spezialfällungen",
      points: [
        "Seilklettertechnik",
        "Schwierige Lagen",
        "Gefahrenfällung"
      ]
    },
    {
      icon: Bug,
      title: "EPS-Bekämpfung",
      points: [
        "Eichenprozessionsspinner",
        "Zertifizierte Verfahren",
        "Sicherheitsstandards"
      ]
    },
    {
      icon: TreePine,
      title: "Forstdienste",
      points: [
        "Holzrückung",
        "Lichtraumprofil",
        "Waldpflege"
      ]
    },
    {
      icon: Tractor,
      title: "Landwirtschaft",
      points: [
        "Mähwerke",
        "Ballenpressen",
        "Ausbringung"
      ]
    },
    {
      icon: Shield,
      title: "Artenschutz",
      points: [
        "Amphibienschutz",
        "Brutplattformen",
        "Wiesenpflege"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Einsatzbereiche
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-lg">
                <div className="mb-6">
                  <IconComponent className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewServices;


import React from 'react';
import { Shield, Wrench, Tractor } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Maschinenpark & Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Moderne Ausstattung und erfahrene Fachkräfte für jeden Einsatz
          </p>
        </div>

        <div className="flex justify-center items-center space-x-16 mb-12">
          <div className="text-center">
            <Tractor className="h-20 w-20 text-green-600 mx-auto mb-4" />
            <span className="text-lg font-medium text-gray-800">Maschinenpark</span>
          </div>
          <div className="text-center">
            <Shield className="h-20 w-20 text-green-600 mx-auto mb-4" />
            <span className="text-lg font-medium text-gray-800">Zertifizierung</span>
          </div>
          <div className="text-center">
            <Wrench className="h-20 w-20 text-green-600 mx-auto mb-4" />
            <span className="text-lg font-medium text-gray-800">Spezialtechnik</span>
          </div>
        </div>

        <div className="text-center text-gray-600 text-lg">
          Hier folgen authentische Bilder unseres Maschinenparks im Einsatz
        </div>
      </div>
    </section>
  );
};

export default About;


import React from 'react';
import { Camera } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Maschinenpark & Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unser Maschinenpark im Einsatz – bereit für jede Herausforderung.
          </p>
        </div>

        {/* Visual Stage for Future Photos */}
        <div className="bg-gradient-to-r from-green-50 to-gray-100 rounded-2xl p-20 text-center border border-green-100">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Camera className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Authentische Einblicke folgen
            </h3>
            <p className="text-lg text-gray-700">
              Hier entstehen echte Aufnahmen unserer Maschinen und Teams im Einsatz – 
              von der Spezialfällung bis zur Landschaftspflege.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

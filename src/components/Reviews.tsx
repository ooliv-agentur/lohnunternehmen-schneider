
import React from 'react';

const Reviews: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-yellow-50 px-8 py-4 rounded-full mb-12 border border-yellow-200">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-2xl">★</span>
              ))}
            </div>
            <span className="text-yellow-800 font-bold text-xl">4,7 / 5</span>
            <span className="text-yellow-700 text-lg">Google Bewertungen</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Das sagen unsere Kunden
          </h2>
          <p className="text-xl text-gray-600">
            Echte Google-Bewertungen – direkt, ehrlich & unbeeinflusst
          </p>
        </div>
        
        {/* Main Featured Review */}
        <div className="bg-gray-50 rounded-3xl p-16 mb-16 border-l-8 border-green-600">
          <div className="flex justify-center mb-8">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-4xl">★</span>
            ))}
          </div>
          <blockquote className="text-4xl md:text-5xl text-gray-800 text-center font-light leading-relaxed mb-12 italic">
            "Gute Arbeit. Pünktlich und zuverlässig."
          </blockquote>
          <div className="text-center">
            <p className="font-bold text-gray-900 text-3xl mb-2">Sabine W.</p>
            <p className="text-gray-600 text-xl">Google Bewertung</p>
          </div>
        </div>

        {/* Additional Reviews - Minimal */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
              <span className="text-gray-300 text-xl">★</span>
            </div>
            <p className="font-bold text-gray-900 text-lg">Chris</p>
            <p className="text-gray-500">Google Bewertung</p>
          </div>

          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
            </div>
            <p className="font-bold text-gray-900 text-lg">Markus Franzl</p>
            <p className="text-gray-500">Google Bewertung</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

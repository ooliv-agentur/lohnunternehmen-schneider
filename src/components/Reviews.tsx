
import React from 'react';

const Reviews: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-lg text-gray-500 mb-4 font-medium">Bewertungen aus erster Hand</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Das sagen unsere Kunden
          </h2>
          <div className="inline-flex items-center space-x-3 bg-yellow-50 px-6 py-3 rounded-full border border-yellow-200">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-lg">★</span>
              ))}
            </div>
            <span className="text-yellow-800 font-bold text-lg">4,7 / 5</span>
            <span className="text-yellow-700">Google Bewertungen</span>
          </div>
        </div>
        
        {/* Main Featured Review */}
        <div className="bg-gray-50 rounded-2xl p-10 mb-12 hover:shadow-lg transition-all duration-300 group">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-3xl">★</span>
            ))}
          </div>
          <blockquote className="text-3xl text-gray-800 text-center font-light leading-relaxed mb-8 italic">
            "Gute Arbeit. Pünktlich und zuverlässig."
          </blockquote>
          <div className="text-center">
            <p className="font-bold text-gray-900 text-2xl mb-1">Sabine W.</p>
            <p className="text-gray-600 text-lg">Google Bewertung</p>
          </div>
        </div>

        {/* Additional Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-md transition-all duration-300">
            <div className="flex justify-center mb-4">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-2xl">★</span>
              ))}
              <span className="text-gray-300 text-2xl">★</span>
            </div>
            <p className="font-bold text-gray-900 text-xl mb-2">Chris</p>
            <p className="text-gray-600">Google Bewertung</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-md transition-all duration-300">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-2xl">★</span>
              ))}
            </div>
            <p className="font-bold text-gray-900 text-xl mb-2">Markus Franzl</p>
            <p className="text-gray-600">Google Bewertung</p>
          </div>
        </div>

        {/* Optional CTA */}
        <div className="text-center">
          <button className="text-green-600 hover:text-green-700 font-medium text-lg transition-colors duration-200 inline-flex items-center">
            Weitere Bewertungen ansehen
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

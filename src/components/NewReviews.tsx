
import React from 'react';

const NewReviews: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
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
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-md transition-all duration-300">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
            </div>
            <blockquote className="text-lg text-gray-800 mb-4 italic">
              "Gute Arbeit. Pünktlich und zuverlässig."
            </blockquote>
            <p className="font-bold text-gray-900">Sabine W.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-md transition-all duration-300">
            <div className="flex justify-center mb-4">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
              <span className="text-gray-300 text-xl">★</span>
            </div>
            <blockquote className="text-lg text-gray-800 mb-4 italic">
              "Top Beratung & schneller Rückruf."
            </blockquote>
            <p className="font-bold text-gray-900">Chris</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-md transition-all duration-300">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
            </div>
            <blockquote className="text-lg text-gray-800 mb-4 italic">
              "Unkompliziert, effizient und sicher."
            </blockquote>
            <p className="font-bold text-gray-900">Markus Franzl</p>
          </div>
        </div>

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

export default NewReviews;

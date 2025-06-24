
import React from 'react';

const Reviews: React.FC = () => {
  return (
    <section className="py-28 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 px-6 py-3 rounded-full mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
            </div>
            <span className="text-yellow-800 font-bold text-lg">4,7 / 5</span>
            <span className="text-yellow-700 text-sm">Google My Business</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Das sagen unsere Kunden
          </h2>
          <p className="text-xl text-gray-700">
            Echte Bewertungen aus Google My Business
          </p>
        </div>
        
        {/* Featured Review */}
        <div className="bg-white rounded-3xl p-12 mb-12 border-2 border-green-200 shadow-xl">
          <div className="flex justify-center mb-8">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-3xl">★</span>
            ))}
          </div>
          <blockquote className="text-3xl text-gray-800 text-center italic mb-8 font-light leading-relaxed">
            "Gute Arbeit. Pünktlich und zuverlässig."
          </blockquote>
          <div className="text-center">
            <p className="font-bold text-gray-900 text-2xl">Sabine W.</p>
            <p className="text-gray-600 text-lg">Google Bewertung</p>
          </div>
        </div>

        {/* Additional Reviews */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-lg">
            <div className="flex justify-center mb-6">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-2xl">★</span>
              ))}
              <span className="text-gray-300 text-2xl">★</span>
            </div>
            <p className="text-gray-600 mb-6 text-center text-4xl">🚜</p>
            <div className="text-center">
              <p className="font-bold text-gray-900 text-xl">Chris</p>
              <p className="text-gray-500">Google Bewertung</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-lg">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-2xl">★</span>
              ))}
            </div>
            <p className="text-gray-600 mb-6 text-center text-2xl">⭐⭐⭐⭐⭐</p>
            <div className="text-center">
              <p className="font-bold text-gray-900 text-xl">Markus Franzl</p>
              <p className="text-gray-500">Google Bewertung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

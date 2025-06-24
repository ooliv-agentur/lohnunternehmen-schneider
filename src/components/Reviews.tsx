
import React from 'react';

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-xl text-gray-600">
            Echte Bewertungen aus Google My Business
          </p>
        </div>
        
        {/* Featured Review */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-green-100 shadow-lg">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-2xl">★</span>
            ))}
          </div>
          <blockquote className="text-2xl text-gray-700 text-center italic mb-6 font-light">
            "Gute Arbeit. Pünktlich und zuverlässig."
          </blockquote>
          <div className="text-center">
            <p className="font-semibold text-gray-900 text-lg">Sabine W.</p>
            <p className="text-gray-500">Google Bewertung</p>
          </div>
        </div>

        {/* Additional Reviews */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex justify-center mb-4">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
              <span className="text-gray-300 text-xl">★</span>
            </div>
            <p className="text-gray-600 mb-4 text-center text-2xl">🚜</p>
            <div className="text-center">
              <p className="font-semibold text-gray-900">Chris</p>
              <p className="text-sm text-gray-500">Google Bewertung</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-600 mb-4 text-center text-xl">⭐⭐⭐⭐⭐</p>
            <div className="text-center">
              <p className="font-semibold text-gray-900">Markus Franzl</p>
              <p className="text-sm text-gray-500">Google Bewertung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

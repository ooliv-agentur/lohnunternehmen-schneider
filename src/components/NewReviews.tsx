
import React from 'react';
import { Star } from 'lucide-react';

const NewReviews: React.FC = () => {
  const reviews = [
    {
      name: "Sabine W.",
      text: "Gute Arbeit. Pünktlich und zuverlässig.",
      rating: 5
    },
    {
      name: "Chris",
      text: "Top Beratung & schneller Rückruf.",
      rating: 4
    },
    {
      name: "Markus Franzl",
      text: "Unkompliziert, effizient und sicher.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-lg text-gray-600">
            4,7 von 5 – echte Bewertungen
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < review.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{review.text}"
              </p>
              <p className="text-gray-900 font-medium">
                {review.name}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="#" 
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Weitere Bewertungen ansehen →
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewReviews;

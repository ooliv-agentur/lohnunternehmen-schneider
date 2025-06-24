import React from 'react';
import { BadgeCheck, Shield, Tractor } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Credibility: React.FC = () => {
  // Sample placeholder images for the carousel
  const placeholderImages = [
    { id: 1, title: "Team bei der Baumfällung" },
    { id: 2, title: "Moderne Forsttechnik im Einsatz" },
    { id: 3, title: "Präzise Baumkontrolle" },
    { id: 4, title: "Seilklettertechnik" },
    { id: 5, title: "Hebebühne Arbeiten" },
    { id: 6, title: "Holzrückung mit Harvester" },
    { id: 7, title: "Baumpflege Arbeiten" },
    { id: 8, title: "Forstmaschinen im Einsatz" },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-lg text-gray-600 mb-4 font-medium">Verlässlichkeit seit 2004</p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Warum Kunden uns beauftragen
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-16 mb-16">
          <div className="text-center group">
            <div className="bg-white p-10 rounded-2xl shadow-sm mb-8 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 h-80 flex flex-col justify-center">
              <BadgeCheck className="h-16 w-16 text-green-600 mx-auto mb-8" />
              <h3 className="text-2xl font-bold mb-6 text-gray-900">20+ Jahre Erfahrung</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Seit 2004 als Familienbetrieb etabliert. Zwischen Köln und Frankfurt verwurzelt, 
                deutschlandweit im Einsatz.
              </p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white p-10 rounded-2xl shadow-sm mb-8 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 h-80 flex flex-col justify-center">
              <Shield className="h-16 w-16 text-green-600 mx-auto mb-8" />
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Zertifizierte Fachkräfte</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                European Tree Workers und Spezialisten nach höchsten Sicherheitsstandards. 
                Dort arbeiten, wo andere nicht können.
              </p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white p-10 rounded-2xl shadow-sm mb-8 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 h-80 flex flex-col justify-center">
              <Tractor className="h-16 w-16 text-green-600 mx-auto mb-8" />
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Eigener Maschinenpark</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Umfangreiche, moderne Ausstattung für effiziente Projektumsetzung. 
                Keine Wartezeiten, keine Kompromisse.
              </p>
            </div>
          </div>
        </div>

        {/* Certificate badges below the main cards */}
        <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 mb-16">
          <div className="flex items-center justify-center space-x-8 text-gray-600">
            <span className="font-medium text-gray-900">Zertifizierungen:</span>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <span className="text-sm font-medium">DFSZ</span>
            </div>
            <span className="text-gray-400">·</span>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <span className="text-sm font-medium">FLL Baumkontrolleur</span>
            </div>
          </div>
        </div>

        {/* Revised horizontal scroll image gallery section */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Eindrücke vom Einsatz
            </h3>
            <p className="text-lg text-gray-600">
              Fotos aus dem Arbeitsalltag – Maschinen & Team im Einsatz
            </p>
          </div>
          
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: false,
                dragFree: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-6">
                {placeholderImages.map((image) => (
                  <CarouselItem key={image.id} className="pl-6 basis-[28.5%]">
                    <div className="bg-gray-50 rounded-xl h-56 flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm">
                      <div className="w-20 h-16 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                        <div className="w-10 h-8 bg-gray-400 rounded"></div>
                      </div>
                      <span className="text-sm text-gray-600 text-center font-medium leading-tight">
                        {image.title}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Left arrow */}
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-green-300 text-gray-600 hover:text-green-600 w-12 h-12 shadow-lg transition-all duration-200" />
              
              {/* Right arrow */}
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-green-300 text-gray-600 hover:text-green-600 w-12 h-12 shadow-lg transition-all duration-200" />
            </Carousel>
            
            {/* Subtle fade-out gradient on the right to suggest more content */}
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white via-white/60 to-transparent pointer-events-none rounded-r-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;

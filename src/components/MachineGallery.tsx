
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MachineGallery: React.FC = () => {
  const machineImages = [
    { id: 1, title: "Holzrückung mit Harvester" },
    { id: 2, title: "Team bei der Baumfällung" },
    { id: 3, title: "Moderne Forsttechnik im Einsatz" },
    { id: 4, title: "Seilklettertechnik-Arbeiten" },
    { id: 5, title: "Hebebühne bei Baumpflege" },
    { id: 6, title: "EPS-Bekämpfung Equipment" },
    { id: 7, title: "Landmaschinen im Einsatz" },
    { id: 8, title: "Spezialfahrzeuge Forstarbeit" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unser Maschinenpark im Einsatz
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Moderne Spezialtechnik für jeden Einsatzbereich
          </p>
          <p className="text-sm text-gray-500">
            Echte Einsatzfotos folgen
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
            <CarouselContent className="-ml-2 sm:-ml-4 md:-ml-6">
              {machineImages.map((image) => (
                <CarouselItem key={image.id} className="pl-2 sm:pl-4 md:pl-6 basis-[85%] sm:basis-[45%] md:basis-[32%] lg:basis-[28.5%]">
                  <div className="bg-white rounded-xl h-64 flex flex-col items-center justify-center p-6 hover:shadow-md transition-all duration-300 border border-gray-200">
                    <div className="w-24 h-20 bg-gray-300 rounded-lg mb-6 flex items-center justify-center">
                      <div className="w-12 h-10 bg-gray-400 rounded"></div>
                    </div>
                    <span className="text-sm text-gray-700 text-center font-medium leading-tight">
                      {image.title}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-green-300 text-gray-600 hover:text-green-600 w-10 h-10 sm:w-12 sm:h-12 shadow-lg transition-all duration-200" />
            <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-green-300 text-gray-600 hover:text-green-600 w-10 h-10 sm:w-12 sm:h-12 shadow-lg transition-all duration-200" />
          </Carousel>
          
          <div className="absolute top-0 right-0 w-8 sm:w-16 h-full bg-gradient-to-l from-gray-50 via-gray-50/60 to-transparent pointer-events-none rounded-r-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default MachineGallery;

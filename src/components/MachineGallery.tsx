
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
    { id: 1, title: "Harvester im Forsteinsatz" },
    { id: 2, title: "Team bei Seilkletterarbeiten" },
    { id: 3, title: "Moderne Forsttechnik" },
    { id: 4, title: "Spezialtechnik Baumfällung" },
    { id: 5, title: "Hebebühne Baumpflege" },
    { id: 6, title: "EPS-Bekämpfung Equipment" },
    { id: 7, title: "Landmaschinen Einsatz" },
    { id: 8, title: "Holzrückung Technik" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Maschinenpark & Team
          </h2>
          <p className="text-gray-600 mb-2">
            Hier folgen reale Bilder von Team & Technik im Einsatz
          </p>
        </div>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {machineImages.map((image) => (
                <CarouselItem key={image.id} className="pl-4 basis-[28.5%]">
                  <div className="bg-white rounded-lg h-48 flex flex-col items-center justify-center p-6 border border-gray-200">
                    <div className="w-20 h-16 bg-gray-300 rounded mb-4 flex items-center justify-center">
                      <div className="w-10 h-8 bg-gray-400 rounded"></div>
                    </div>
                    <span className="text-sm text-gray-700 text-center font-medium">
                      {image.title}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-600 w-10 h-10" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-600 w-10 h-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default MachineGallery;

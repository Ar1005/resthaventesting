import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselItems = [
  {
    imageSrc: "/funeral-services.jpg",
    alt: "Funeral Services",
    content: (
      <>
        <span className="text-2xl font-bold">Funeral Services</span>
        <span className="text-sm ">
          At Rest Haven, we offer every family we serve the opportunity to
          utilize our exquisite mausoleum chapel for their farewell ceremony.
          Through our licensed funeral home at Tippecanoe Memory Gardens,
          Funeral & Cremation Services, we can guide you seamlessly. Whether you
          prefer the solemnity of our mausoleum or the familiar setting of a
          local church, the choice is yours. For detailed information on
          planning a truly memorable service, please reach out to one of our
          Funeral Specialists at (765) 447-1797.
        </span>
      </>
    ),
  },
  {
    imageSrc: "/customize-your-service.jpg",
    alt: "Customize your Service",
    content: (
      <>
        <span className="text-2xl font-bold">Customize Your Service</span>
        <span className="text-sm ">
          Choose between a traditional funeral, cremation, or fully customized
          options. Cost concerns shouldn't limit a fitting tribute; share what
          made your loved one special, and we'll offer ideas for a unique and
          meaningful service. Our staff, in collaboration with Tippecanoe Memory
          Gardens, is ready to provide details and assist you in making
          personalized choices.
        </span>
      </>
    ),
  },
  {
    imageSrc: "/funeral-packages.jpg",
    alt: "Funeral Packages",
    content: (
      <>
        <span className="text-2xl font-bold">Funeral Packages</span>
        <span className="text-sm ">
          Explore our comprehensive Funeral Packages designed for both Burial
          and Cremation at Rest Haven Memorial Park. For a detailed overview of
          the options available, connect with one of our knowledgeable Funeral
          Specialists at (765) 447-1797.
        </span>
      </>
    ),
  },
];

export function Funerals() {
  return (
    <div className="lg:flex justify-center">
      {/* Desktop View */}
      <div className="hidden lg:flex w-[800px]">
        <Carousel className="w-full">
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col gap-y-6 h-[600px] items-center justify-center p-6">
                      <Image
                        src={item.imageSrc}
                        alt={item.alt}
                        width={300}
                        height={300}
                        className="rounded-full"
                      />
                      <div className="flex gap-y-2 flex-col">
                        {item.content}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-14 z-50" />
          <CarouselNext className="mr-14 z-50" />
        </Carousel>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden w-[400px]">
        <Carousel className="w-[400px]">
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col gap-y-6 h-[600px] items-center justify-center p-6">
                      <Image
                        src={item.imageSrc}
                        alt={item.alt}
                        width={300}
                        height={300}
                        className="rounded-lg"
                      />
                      <div className="flex gap-y-2 flex-col">
                        {item.content}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

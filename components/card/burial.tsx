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
    imageSrc: "/Traditional-Ground-Burial.jpg",
    alt: "Burial Ground",
    content: (
      <>
        <span className="text-2xl font-bold">Traditional Ground Burial</span>
        <span className="text-sm ">
          Earth burial remains the most common cemetery service, providing
          families a serene place to pay respects and revisit their loved ones.
          Rest Haven Memorial Park offers diverse ground burial options,
          including family estate lots, multiple space lots, and single grave
          spaces. Our beautifully landscaped sections with gardens, trees, and
          hedges create a peaceful resting place. Explore our cemetery map and
          contact our Family Service Counselors at (765) 447-1797 for
          information or to schedule a tour.
        </span>
      </>
    ),
  },
  {
    imageSrc: "/Memorialization.jpg",
    alt: "Memorialization",
    content: (
      <>
        <span className="text-2xl font-bold">Memorialization</span>
        <span className="text-sm ">
          Heritage, dedication, commitment, love and faith — memorials are
          statements carved in granite or bronze that reflect the meaning of the
          life of your loved one. If you haven’t seen what has recently become
          available, stop by the office and see our highly per­sonalized
          memorials and monuments—truly one-of-a-kind, highly de­tailed pieces
          of art. Our experienced staff can help you create the memorial that’s
          right for you and your loved one.
        </span>
      </>
    ),
  },
  {
    imageSrc: "/Mausoleum.jpg",
    alt: "Mausoleum",
    content: (
      <>
        <span className="text-2xl font-bold">Mausoleum</span>
        <span className="text-sm ">
          Another interment option besides traditional ground burial is
          mausoleum entombment. A mausoleum is simply a large building designed
          to provide above-ground interment (or entombment) for a number of
          unrelated people.Sharing the cost of the mausoleum with other
          individuals has made it an affordable and attractive option for many.
          Rest Haven Memorial Park features a beautiful Chapel Mausoleum.
        </span>
      </>
    ),
  },
  {
    imageSrc: "/PlanningAhead.jpg",
    alt: "Planning Ahead",
    content: (
      <>
        <span className="text-2xl font-bold">Planning Ahead</span>
        <span className="text-sm ">
          Rest Haven Memorial Park simplifies the difficult task of planning for
          the inevitable. By pre-arranging cemetery services, we've assisted
          countless families in avoiding both emotional and financial strains
          associated with last-minute decisions. While contemplating mortality
          is uncomfortable, pre-planning spares your family from the stress of
          making significant financial choices during times of grief. Advance
          planning not only locks in funeral costs but also relieves loved ones
          from the responsibility and financial burden. Families benefit from
          discounts and the option to make manageable monthly payments, avoiding
          the need for immediate cash during times of need. Choose peace of
          mind—plan ahead with Rest Haven Memorial Park.
        </span>
      </>
    ),
  },
  {
    imageSrc: "/planning-organizer.jpg",
    alt: "Planning Organizer",
    content: (
      <>
        <span className="text-2xl font-bold">Planning Organizer</span>
        <span className="text-sm ">
          Plan with ease using our free Personal Planning Organizer, available
          in couples, singles, and Hispanic versions. Avoid the emotional stress
          of last-minute arrangements by preparing in advance. Families can make
          decisions together, without the urgency of emergency arrangements,
          ensuring they purchase only what they truly need. In our experience,
          pre-planning often results in spending less compared to emergency
          situations. With time to explore ceremony options, discuss costs, and
          finalize plans, millions of Americans, like yourself, wisely choose to
          plan their funerals and cemetery arrangements in advance.
        </span>
      </>
    ),
  },
];

export function Burial() {
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
                        width={500}
                        height={500}
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

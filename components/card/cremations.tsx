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
    imageSrc: "/cremation-services.jpg",
    alt: "Cremation Services",
    content: (
      <>
        <span className="text-2xl font-bold">Cremation Services</span>
        <span className="text-sm ">
          More and more people are choosing cremation as an alternative to a
          traditional burial service. Rest Haven Memorial Park offers a wide
          range of choices that allow you to choose the type of service that you
          find most meaningful.
        </span>
      </>
    ),
  },
  {
    imageSrc: "/customize-your-cremation.jpg",
    alt: "Customize Your Cremation",
    content: (
      <>
        <span className="text-2xl font-bold">Customize Your Cremation</span>
        <span className="text-sm ">
          Rest Haven Memorial Park is the area leader for personalized cremation
          options. Aside from our dazzling selection of urns and other cremation
          keepsakes, you can pre-plan your cremation service in a way that is
          uniquely you.
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
          unrelated people. Sharing the cost of the mausoleum with other
          individuals has made it an affordable and attractive option for many.
          Rest Haven Memorial Park features one chapel mausoleum.
        </span>
      </>
    ),
  },
  {
    imageSrc: "/Cremation-Companion-Boulder-scaled.jpg",
    alt: "Cremation Boulder",
    content: (
      <>
        <span className="text-2xl font-bold">Cremation Boulder</span>
        <span className="text-sm ">
          Our Granite Cremation Boulders are beautifully cut with industrial
          diamond tipped drills to create a special receptacle in the boulder.
          We then insert custom inscribed bronze urns designed to contain
          cremated remains.The finished product is a gorgeous permanent memorial
          and urn combination that can be placed in one of our cremation gardens
          or anywhere you choose, even your backyard!
        </span>
      </>
    ),
  },
  {
    imageSrc: "/cremation-memorials-everything-you-need-to-know.jpg",
    alt: "Cremation Memorial",
    content: (
      <>
        <span className="text-2xl font-bold">Cremation Memorial</span>
        <span className="text-sm ">
          Our Combination Cremation/Urn Memorial is a beautifully designed
          bronze memorial which is actually a combination urn and memorial in
          one. Permanently attached to the bottom of the memorial are two
          hand-crafted bronze urns designed to hold cremated remains. This
          memorial can be placed in many different gardens of our cemetery.
        </span>
      </>
    ),
  },
  {
    imageSrc: "/Niche.jpg",
    alt: "Niche",
    content: (
      <>
        <span className="text-2xl font-bold">Niche</span>
        <span className="text-sm ">
          A niche is used for the permanent storage and/or display of cremated
          remains. There are many kinds of niches to chose from. We even have
          some niches that are made of bronze and are glass fronted so you can
          always see the actual urn that contains the cremated remains.
        </span>
      </>
    ),
  },
  {
    imageSrc: "/cremation.jpg",
    alt: "Cremation",
    content: (
      <>
        <span className="text-2xl font-bold">Urns</span>
        <span className="text-sm ">
          We have numerous types of urns with an array of styles and themes to
          choose from, making it easier to select an urn that reflects the life
          of your loved one. If a traditional style is what you seek, we also
          have a variety of classic urns to choose from. Themed urns are
          normally used when a family member wants to highlight a particular
          hobby, interest or sport. Themed urns are used to depict hobbies such
          as golfing, fishing, sailing, motorcycle riding or music. You can also
          choose from a wide variety of keepsake urns, used when a small portion
          of the ashes are to be kept. This is usually the case when the family
          scatters the ashes and decides to keep a small portion in an urn. Also
          sometimes several family members wish to keep a portion of the ashes
          which necessitates several keepsake urns.
        </span>
      </>
    ),
  },
];

export function Cremation() {
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

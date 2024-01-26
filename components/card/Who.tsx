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
    imageSrc: "/rest-haven-calling.jpg",
    alt: "Funeral Services",
    content: (
      <>
        <span className="text-2xl font-bold">Making the First Phone Call</span>
        <span className="text-sm ">
          What to do first depends on the circumstances of the death. When
          someone dies in a hospital or similar care facility, the staff will
          usually take care of some arrangements, such as contacting the funeral
          home you choose, and if necessary, arranging an autopsy. You will need
          to notify family, friends and clergy. It may be easier on you to make
          a few phone calls to other relatives or friends and ask each of them
          to make a phone call or two to specific people, so the burden of
          spreading the news isn’t all on you. If you are alone, ask someone to
          keep you company while you make these calls and try to cope with the
          first hours after the death.
        </span>
      </>
    ),
  },
  {
    imageSrc: "/rest-haven-call-us.jpg",
    alt: "Call",
    content: (
      <>
        <span className="text-2xl font-bold">Call a Funeral Director</span>
        <span className="text-sm ">
          Whatever the circumstances of death, one of your first calls should be
          to a licensed funeral director. We are here to help you:
          <ul className="list-disc pl-5">
            <li>Transport the body</li>
            <li>Obtain a death certificate</li>
            <li>Select a casket, urn and/or grave marker</li>
            <li>Arrange the funeral, memorial and/or burial service</li>
            <li>Prepare the obituary</li>
            <li>
              Help you notify the deceased’s employer, attorney, insurance
              company and banks
            </li>
            <li>Offer grief support or direct you to other resources</li>
          </ul>
        </span>
      </>
    ),
  },
  {
    imageSrc: "/rest-haven-call-us.jpg",
    alt: "Employer",
    content: (
      <>
        <span className="text-2xl font-bold">Call the Employer</span>
        <span className="text-sm ">
          If your loved one was working, you’ll need to call his or her employer
          immediately. Ask about the deceased’s benefits and any pay due,
          including vacation or sick time, disability income, etc. Ask if you or
          other dependents are still eligible for benefit coverage through the
          company. Ask whether there is a life insurance policy through the
          employer, who the beneficiary is and how to file a claim.
        </span>
      </>
    ),
  },
  {
    imageSrc: "/rest-haven-call-us.jpg",
    alt: "Insurance",
    content: (
      <>
        <span className="text-2xl font-bold">
          Call the Life Insurance Company
        </span>
        <span className="text-sm ">
          Look through the deceased’s paperwork for the life policy. Call the
          agent or the company and ask how to file a claim. Usually the
          beneficiary (or the beneficiary’s guardian, if a minor) must complete
          the claim forms and related paperwork. You’ll need to submit the death
          certificate and a claimant’s statement to establish proof of claim.
          Remember to ask about payment options. You may have a choice between
          receiving a lump sum or the having the insurance company place the
          money in an interest-bearing account from which you can write checks.
        </span>
      </>
    ),
  },
];

export function Who() {
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
                        width={250}
                        height={250}
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

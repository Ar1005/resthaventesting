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
    imageSrc: "/rest-haven-we-promise1.jpg",
    alt: "Budget",
    content: (
      <>
        <span className="text-2xl font-bold">
          We Promise. . .To Respect Your Budget.
        </span>
        <span className="text-sm ">
          We prioritize your budget through transparency, control, and a
          competitive total price:
        </span>
        <ul>
          <li>
            <span className="font-bold">Transparency:</span> Our General Price
            List and packages are readily accessible.
          </li>
          <li>
            <span className="font-bold">Control:</span> You maintain complete
            control over your budget, paying only for what you desire. We ensure
            you're fully informed about selected items' costs. For additional
            financial support, we offer qualified families access to up to
            $10,000 through our trusted financial partner.
          </li>
          <li>
            <span className="font-bold">Lower Total Price:</span> Beyond funeral
            or cremation costs, budget considerations include merchandise
            (casket or urn) and final resting place (grave, niche, or mausoleum
            space).
          </li>
        </ul>
      </>
    ),
  },
  {
    imageSrc: "/rest-haven-we-promise2.jpg",
    alt: "Loved Ones",
    content: (
      <>
        <span className="text-2xl font-bold">
          We Promise…To Help You Honor the Memories of Your Loved One.
        </span>
        <span className="text-sm ">
          At Rest Haven Memorial Park, we believe that a life remembered…lives
          on. It lives on in the hearts and minds of everyone who cherishes a
          memory of the deceased.
        </span>
        <span className="text-sm">
          Our goal is to help you honor your loved one by sharing fond memories
          and celebrating the story of their life. The loss of a loved one
          naturally creates a gathering of family and friends. Our services help
          to keep the focus of the gathering on how your loved one lived, not
          how they died.
        </span>
      </>
    ),
  },
  {
    imageSrc: "/rest-haven-we-promise3.jpg",
    alt: "Families",
    content: (
      <>
        <span className="text-2xl font-bold">
          We Promise…To Serve Lafayette Families As Only a Family-Owned Company
          Can Do
        </span>
        <span className="text-sm ">
          Discover the genuine family ownership at Rest Haven Memorial Park.
          Unlike some Lafayette funeral establishments, we're not part of large
          corporations using family names for local appeal. Led by David
          Shipper, the Shipper family, with three generations of funeral home
          and cemetery experience, personally oversees day-to-day operations.
        </span>
        <span className="text-sm">
          Our dedication goes beyond the departed—90% of our focus is on guiding
          your family through a difficult loss and initiating the healing
          journey. Your family's well-being is our foremost priority.
        </span>
      </>
    ),
  },
  {
    imageSrc: "/rest-haven-we-promise4.jpg",
    alt: "24/7 Access",
    content: (
      <>
        <span className="text-2xl font-bold">
          We Promise. . .You Will Have 24-Hour Access To Our Team, 7 Days A
          Week.
        </span>
        <span className="text-sm ">
          Ensuring continuous support, our team is available 24/7, recognizing
          that 65% of passings occur at night or on weekends. Your call is
          always answered by a trained funeral professional—our staff during
          office hours and a dedicated funeral-focused answering service after
          hours. If your loved one has passed, our team promptly attends to
          their transfer into our care.
        </span>
      </>
    ),
  },
  {
    imageSrc: "/rest-haven-we-promise5.jpg",
    alt: "Traditional or Personal",
    content: (
      <>
        <span className="text-2xl font-bold">
          We Promise. . .Your Service Can Be As Traditional or As Personal As
          You Like.
        </span>
        <span className="text-sm ">
          Rest Haven Memorial Park embraces both traditional and personalized
          funeral services. As the most flexible and innovative funeral home in
          Lafayette, we take pride in creating unique, meaningful experiences
          for families. Examples include incorporating a boat and hunting gear
          for a hunting enthusiast, displaying football memorabilia for a
          dedicated fan, and showcasing handcrafted items for a sewing and
          quilting enthusiast. Our commitment to personalization extends to
          providing special keepsakes, like knitting needles with a cherished
          quote. Your family's requests, within legal and ethical bounds, are
          always accommodated.
        </span>
      </>
    ),
  },
  {
    imageSrc: "/rest-haven-we-promise6.jpg",
    alt: "Simple",
    content: (
      <>
        <span className="text-2xl font-bold">
          We Promise…To Make Everything as Simple As Possible.
        </span>
        <span className="text-sm ">
          Navigating the aftermath of a loved one's loss is challenging. At Rest
          Haven Memorial Park, we offer a streamlined funeral and burial
          experience. Our mausoleum chapel, situated within the cemetery,
          provides a convenient solution, eliminating the need for a funeral
          procession through Lafayette's streets.
        </span>
      </>
    ),
  },
  {
    imageSrc: "/rest-haven-we-promise7.jpg",
    alt: "5 Star",
    content: (
      <>
        <span className="text-2xl font-bold">
          We Promise…To Earn Our 5-Star Reputation Every Day with Every Family
        </span>
        <span className="text-sm ">
          Rest Haven Memorial Park excels in reviews on Facebook and Google,
          surpassing Lafayette's other funeral homes. Our value extends beyond
          competitive pricing, focusing on delivering an exceptional experience
          for families.
        </span>
        <span className="text-sm">
          Whether your budget is $2,000 or $12,000, we prioritize meeting your
          family's emotional, spiritual, and practical needs. Our commitment to
          unparalleled value includes expert guidance, creating cherished
          funeral services, handling details for peace of mind, a convenient
          cemetery location, and a selection of top-quality products at all
          price ranges.
        </span>
        <span className="text-sm">
          Our dedicated team aims for 5-star reviews from every family. If any
          aspect falls short, our 100% Satisfaction Guarantee ensures immediate
          correction upon notification.
        </span>
      </>
    ),
  },
];

export function Promise() {
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
                      <div className="flex text-sm gap-y-2 flex-col">
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

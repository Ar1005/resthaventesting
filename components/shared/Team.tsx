import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Team() {
  const carouselItems = [
    {
      imageSrc: "/our-promise.jpg",
      alt: "Sales",
      content: (
        <>
          <span className="text-2xl font-bold">Sales</span>
          <span className="text-sm ">
            Rest Haven Memorial Park is dedicated to providing peace of mind by
            assisting people in making final arrangements in advance. Apply for
            Sales by sending your resume to Aeriyanna Grocox at{" "}
            <a
              href="https://tippecanoememorygardens.com/"
              className="text-[#6c9c81] hover:font-bold"
            >
              agrocox@tippecanoememorygardens.com.
            </a>
          </span>
        </>
      ),
    },
    {
      imageSrc: "/careers.jpg",
      alt: "Join Our Team",
      content: (
        <>
          <span className="text-2xl font-bold">Join Our Team!</span>
          <span className="text-sm ">
            Explore full-time or part-time opportunities in our Administrative
            Department. We occasionally have openings in Operations for
            groundskeepers, mechanics, or laborers, especially during the grass
            growing season.
          </span>
        </>
      ),
    },
    {
      imageSrc: "/rest-haven-benefits.jpg",
      alt: "Benefits",
      content: (
        <>
          <span className="text-2xl font-bold">Benefits</span>
          <span className="text-sm ">
                    In addition to the comprehensive compensation package and
                    professional support you’ll receive, additional benefits
                    include:
                    <ul className="list-disc">
                      <li>Health Insurance with Prescriptions</li>
                      <li>Term Life Insurance</li>
                      <li>Vision Insurance</li>
                      <li>401K</li>
                      <li>Up To Two Weeks Paid Vacation</li>
                      <li>Equal Opportunity Employer</li>
                      <li>Advancement Opportunities</li>
                      <li>Outstanding Work Environment</li>
                    </ul>
                  </span>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="lg:flex justify-center">
        {/* Desktop View */}
        <div className="hidden lg:flex w-[800px]">
          <Carousel className="w-[800px]">
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
    </>
  );
}

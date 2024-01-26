import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Couple from "@/components/card/Couple";
import Single from "@/components/card/Single";
import { Metadata } from "next";

const GeneralPriceListText =
  "Discover unparalleled affordability at Rest Haven Memorial Park...";

  export const metadata: Metadata = {
    title: "Pricing",
    description: "Made by Armand",
  };

const Page = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex flex-col justify-center items-center">
        <span className="text-5xl font-bold mb-4">
          Guaranteed Pricing & Packages
        </span>
        <div className="flex items-start">
          <div className="w-[720px] mr-10 flex flex-col">
            <div className="text-3xl">General Price List</div>
            <Separator />
            <div className="leading-loose text-xs">
              <div>{GeneralPriceListText}</div>
              <div className="pb-4">
                Enhance your ease and simplicity with our thoughtfully curated
                packages, meticulously designed for your needs. Explore our
                comprehensive Funeral & Cemetery Packages catering to both
                Burial and Cremation, along with our selection of Vaults, all
                conveniently outlined below. Should you have any inquiries
                regarding our General Price List (GPL) or our packages, please
                feel free to reach out to us at (765) 447-1797 or by completing
                our user-friendly contact form.
              </div>
              <div>
                At Rest Haven, we offer each family we serve the opportunity to
                utilize our exquisite mausoleum chapel for their farewell
                ceremony. Our licensed funeral home, Tippecanoe Memory Gardens,
                Funeral & Cremation Services, is ready to guide and support you
                through the process. Whether you choose to hold the service in
                our mausoleum or at a local church, we are dedicated to creating
                a meaningful and memorable experience. For further details on
                planning a service that honors your loved one, reach out to one
                of our knowledgeable Funeral Specialists at (765) 447-1797.
              </div>
            </div>
          </div>
          <Image
            src="/rest-haven-price-list.jpg"
            alt="Price List"
            width={600}
            height={600}
          />
        </div>
        <Button className="rounded-full text-neutral-100 text-3xl bg-[#6c9c81] px-10 py-8">
          Price List
        </Button>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col justify-center items-center">
        <span className="text-3xl text-center font-bold mb-4">
          Guaranteed Pricing & Packages
        </span>
        <div className="flex flex-col items-center">
          <div className="text-2xl">General Price List</div>
          <Separator />
          <div className="leading-loose text-center text-xs">
            <div>{GeneralPriceListText}</div>
            <div className="pb-4">
              Enhance your ease and simplicity with our thoughtfully curated
              packages, meticulously designed for your needs. Explore our
              comprehensive Funeral & Cemetery Packages catering to both Burial
              and Cremation, along with our selection of Vaults, all
              conveniently outlined below. Should you have any inquiries
              regarding our General Price List (GPL) or our packages, please
              feel free to reach out to us at (765) 447-1797 or by completing
              our user-friendly contact form.
            </div>
            <div>
              At Rest Haven, we offer each family we serve the opportunity to
              utilize our exquisite mausoleum chapel for their farewell
              ceremony. Our licensed funeral home, Tippecanoe Memory Gardens,
              Funeral & Cremation Services, is ready to guide and support you
              through the process. Whether you choose to hold the service in our
              mausoleum or at a local church, we are dedicated to creating a
              meaningful and memorable experience. For further details on
              planning a service that honors your loved one, reach out to one of
              our knowledgeable Funeral Specialists at (765) 447-1797.
            </div>
          </div>
          <Image
            src="/rest-haven-price-list.jpg"
            alt="Price List"
            width={350}
            height={350}
          />
          <Button className="rounded-full text-neutral-100 text-2xl bg-[#6c9c81] px-8 py-6 mt-4">
            Price List
          </Button>
        </div>
      </div>

      <Single />
      <Couple />
    </>
  );
};

export default Page;

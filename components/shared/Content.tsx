"use client"

import React, { useState } from "react";
import Image from "next/image";

const Content = () => {
  const [navbar, setNavbar] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      {/* Desktop View (hidden on md screens and below) */}
      <div className="hidden lg:flex  h-[650px] items-center justify-evenly my-10">
        <Image
          src="/photos.jpg"
          alt="Cremation Photos"
          height={700}
          width={800}
          className="grayscale bg-cover bg-bottom"
        />
        <div className="flex flex-col max-w-[500px]">
          <span className="font-bold text-4xl lg:text-5xl pb-4">
            Where Cherished Memories Find Eternal Peace.
          </span>
          <span className="text-lg lg:text-xl leading-7">
            Welcome to Rest Haven Memorial Park, a sanctuary of tranquility and
            remembrance. We understand the profound significance of honoring the
            lives of your loved ones with grace and reverence. Nestled in serene
            surroundings, our memorial park offers a dignified space for
            reflection and cherished memories. Our dedicated team is committed
            to guiding you through this journey with compassion, providing a
            range of customizable options to ensure a meaningful farewell that
            uniquely celebrates the spirit of your dear one.
          </span>
        </div>
      </div>
      {/* Mobile View (hidden on lg screens and above) */}
      <div className="lg:hidden">
        
      {!isMobileMenuOpen && (
          <div className="lg:w-1/2 lg:pr-4 z-0">
            <Image
              src="/photos.jpg"
              alt="Cremation Photos"
              height={700}
              width={800}
              className="grayscale bg-cover bg-bottom w-full h-auto lg:h-full"
            />
          </div>
        )}
        <div className="lg:w-1/2 lg:pl-4">
          <div className="flex text-center flex-col">
            <span className="font-bold text-2xl lg:text-4xl pb-4">
              Where Cherished Memories Find Eternal Peace.
            </span>
            <span className="text-base lg:text-lg leading-6">
              Welcome to Rest Haven Memorial Park, a sanctuary of tranquility
              and remembrance. We understand the profound significance of
              honoring the lives of your loved ones with grace and reverence.
              Nestled in serene surroundings, our memorial park offers a
              dignified space for reflection and cherished memories. Our
              dedicated team is committed to guiding you through this journey
              with compassion, providing a range of customizable options to
              ensure a meaningful farewell that uniquely celebrates the spirit
              of your dear one.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

import Link from "next/link";
import React from "react";

const Options = () => {

  const optionsData = [
    {
      href: "/Plan-Ahead/Funeral",
      image: "/flowers.jpg",
      text: ["FUNERAL", "OPTIONS"],
    },
    {
      href: "/Plan-Ahead/Cremation",
      image: "/urn.jpg",
      grayscale: true,
      text: ["CREMATION"],
    },
    {
      href: "/Plan-Ahead/Burial",
      image: "/burial-1.jpg",
      text: ["BURIAL"],
    },
    {
      href: "/Contact-Us",
      image: "/contact.jpg",
      text: ["CONTACT US"],
    },
  ];
  return (
    <>
       <div className="hidden lg:flex h-full">
      {optionsData.map((option, index) => (
        <Link key={index} href={option.href} className="h-[600px] w-full lg:w-1/2 xl:w-1/3 relative group flex">
          {/* Darkened background */}
          <div
            className={`absolute inset-0 bg-cover bg-top brightness-50 group-hover:brightness-100 transition-all duration-300 ${
              option.grayscale ? "grayscale" : ""
            }`}
            style={{ backgroundImage: `url("${option.image}")` }}
          ></div>

          {/* Text on top of the background */}
          <div className="absolute group-hover:opacity-0 transition-all duration-300 opacity-100 inset-0 flex items-start p-4">
            <div className="flex flex-col text-neutral-100 text-4xl">
              {option.text.map((line, lineIndex) => (
                <span key={lineIndex}>{line}</span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>

      {/* Mobile View */}
      <div className="lg:hidden">
        {/*
          For mobile view, you can consider using a Carousel or a similar component
          to showcase each option one at a time.
          For simplicity, I'll use a vertical stack here.
        */}
        <div className="flex flex-col h-[690px]">
          {/* Funeral */}
          <Link
            href="/Plan-Ahead/Funeral"
            className="relative h-[172.5px] group"
          >
            {/* Darkened background */}
            <div className='absolute inset-0 bg-[url("/flowers.jpg")] bg-cover bg-top brightness-50 group-hover:brightness-100 transition-all duration-300'></div>

            {/* Text on top of the background */}
            <div className="absolute group-hover:opacity-0 transition-all duration-300 opacity-100 inset-0 flex items-start p-4">
              <div className="flex flex-col text-neutral-100 text-2xl">
                <span>FUNERAL</span>
                <span>OPTIONS</span>
              </div>
            </div>
          </Link>

          {/* Cremation */}
          <Link
            href="/Plan-Ahead/Cremation"
            className="relative h-[172.5px] group"
          >
            {/* Darkened background */}
            <div className='absolute inset-0 bg-[url("/urn.jpg")] grayscale bg-cover bg-top brightness-50 group-hover:brightness-100 transition-all duration-300'></div>

            {/* Text on top of the background */}
            <div className="absolute group-hover:opacity-0 transition-all duration-300 opacity-100 inset-0 flex items-start p-4">
              <div className="flex flex-col text-neutral-100 text-2xl">
                <span>CREMATION</span>
              </div>
            </div>
          </Link>

          {/* Burial */}
          <Link
            href="/Plan-Ahead/Burial"
            className="relative h-[172.5px] group"
          >
            {/* Darkened background */}
            <div className='absolute inset-0 bg-[url("/burial-1.jpg")] bg-cover bg-top brightness-50 group-hover:brightness-100 transition-all duration-300'></div>

            {/* Text on top of the background */}
            <div className="absolute group-hover:opacity-0 transition-all duration-300 opacity-100 inset-0 flex items-start p-4">
              <div className="flex flex-col text-neutral-100 text-2xl">
                <span>BURIAL</span>
              </div>
            </div>
          </Link>

          {/* Contact Us */}
          <Link href="/Contact-Us" className="relative h-[172.5px] group">
            {/* Darkened background */}
            <div className='absolute inset-0 bg-[url("/contact.jpg")] bg-cover bg-top brightness-50 group-hover:brightness-100 transition-all duration-300'></div>

            {/* Text on top of the background */}
            <div className="absolute group-hover:opacity-0 transition-all duration-300 opacity-100 inset-0 flex items-start p-4">
              <div className="flex flex-col text-neutral-100 text-2xl">
                <span>CONTACT US</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Options;

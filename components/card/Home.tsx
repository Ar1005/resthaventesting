import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Homes = () => {
  return (
    <>
      {/* Desktop View */}
      <div className='hidden md:flex items-center bg-cover bg-center w-full min-h-[850px] bg-[url("/background-1.jpg")]'>
        <div className="flex text-neutral-100 flex-col items-start pl-32">
          <div className="flex flex-col items-center leading-tight">
            <span className="text-[50px] font-extrabold">REST HAVEN</span>
            <span className="text-[40px] font-light">MEMORIAL PARK</span>
          </div>
          <div className="w-[450px] font-light pt-8 pb-4 leading-loose">
            At Rest Haven Memorial Park, we provide compassionate and dignified
            cremation services for your loved ones. Our dedicated team is
            committed to guiding you through the process with sensitivity,
            offering customizable options for meaningful farewells. With
            state-of-the-art facilities and experienced staff, we ensure a
            respectful and personalized tribute to honor the memory of your dear
            one.
          </div>
          <Link href="/About-Us">
            <Button
              type="button"
              className="rounded-full text-3xl bg-[#6c9c81] px-10 py-8 text-light"
            >
              LEARN MORE
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile View */}
      <div className='md:hidden flex items-center justify-center bg-cover bg-center min-h-[450px] bg-[url("/background-1.jpg")]'>
        <div className="text-center text-neutral-100 px-10">
          <div className="leading-tight flex flex-col pt-40 text-neutral-50">
            <span className="text-4xl font-extrabold">REST HAVEN</span>
            <span className="text-3xl font-light">MEMORIAL PARK</span>
          </div>
          <div className="font-light pt-6 pb-4 leading-loose">
            At Rest Haven Memorial Park, we provide compassionate and dignified
            cremation services for your loved ones. Our dedicated team is
            committed to guiding you through the process with sensitivity,
            offering customizable options for meaningful farewells. With
            state-of-the-art facilities and experienced staff, we ensure a
            respectful and personalized tribute to honor the memory of your dear
            one.
          </div>
          <Link href="/About-Us">
            <Button
              type="button"
              className="rounded-full text-xl bg-[#6c9c81] mb-10 px-6 py-4 text-light"
            >
              LEARN MORE
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homes;

// NewHome.jsx
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const NewHome = () => {
  return (
    <>
      {/* Desktop View */}
      <div className='hidden md:flex items-center bg-cover bg-center min-h-[850px] bg-[url("/background-1.jpg")]'>
        <div className="flex flex-col items-start pl-32">
          <div className="flex flex-col items-center leading-tight text-neutral-100">
            <span className="text-[80px] font-extrabold">REST HAVEN</span>
            <span className="text-[65px] font-light">MEMORIAL PARK</span>
          </div>
          <Link href="/About-Us" className="pt-10">
            <Button
              type="button"
              className="rounded-full text-3xl text-neutral-100 bg-[#6c9c81] px-10 py-8 "
            >
              LEARN MORE
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile View */}
      <div className='md:hidden flex items-center justify-center bg-cover bg-center w-full min-h-[450px] bg-[url("/background-1.jpg")]'>
        <div className="text-center text-neutral-100 pt-10 px-8">
          <div className="leading-tight flex flex-col text-neutral-100">
            <span className="text-4xl font-extrabold ">REST HAVEN</span>
            <span className="text-3xl font-light">MEMORIAL PARK</span>
          </div>
          <Link href="/About-Us" className="pt-6">
            <Button
              type="button"
              className="rounded-full text-xl text-neutral-100 bg-[#6c9c81] px-6 py-4 "
            >
              LEARN MORE
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewHome;

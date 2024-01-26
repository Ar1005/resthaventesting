import { Metadata } from "next";
import React from "react";
import { Immediate } from "@/components/card/Immediate";
import { Cremation } from "@/components/card/cremations";

export const metadata: Metadata = {
  title: "Cremation",
  description: "Made by Armand",
};

const page = () => {
  return (
    <>
      {/* // desktop view */}
      <div className="min-h-screen hidden lg:flex neutral-100 w-full items-center justify-center">
        <Cremation />
        <div className="flex flex-col items-center pl-16">
          <span className="text-5xl font-bold mb-4">Cremation Options</span>
          <span className="flex w-[420px] text-lg pt-4">
            With cremation, you have options that aren’t available with
            traditional burial. You can place the remains in an urn and inter it
            in the family plot, place the urn in a niche in Rest Haven Memorial
            Park’s mausoleum, or customize your cremation. Our Family Service
            Counselors will explain the many options that are available to you.
          </span>
        </div>
      </div>
      {/* // mobile view */}
      <div className="min-h-screen lg:hidden my-10 neutral-100 flex flex-col items-center justify-center px-4">
        <div className="flex lg:hidden flex-col items-center text-center">
          <span className="text-3xl font-bold mb-4">Cremation Options</span>
          <span className="text-md max-w-full">
            With cremation, you have options that aren’t available with
            traditional burial. You can place the remains in an urn and inter it
            in the family plot, place the urn in a niche in Rest Haven Memorial
            Park’s mausoleum, or customize your cremation. Our Family Service
            Counselors will explain the many options that are available to you.
          </span>
        </div>
        <Cremation />
      </div>
    </>
  );
};

export default page;

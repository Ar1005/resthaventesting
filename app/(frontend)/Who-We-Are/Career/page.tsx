import React from "react";
import NewHome from "@/components/card/NewHome";
import { Team } from "@/components/shared/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career",
  description: "Made by Armand",
};

const page = () => {
  return (
    <>
      <NewHome />
      {/* // desktop view */}
      <div className="min-h-screen hidden lg:flex neutral-100 w-full items-center justify-center">
        <Team />
        <div className="flex flex-col items-center pl-16">
          <span className="text-5xl font-bold mb-4">Careers at Rest Haven</span>
          <span className="flex w-[420px] text-lg pt-4">
            Join our team! Many terrific career opportunities are available with
            Indiana Memorial Group (IMG), with different openings in Sales,
            Operations, and Administration at our different locations in Indiana
            at any given time.
          </span>
        </div>
      </div>
      {/* // mobile view */}
      <div className="min-h-screen lg:hidden my-10 neutral-100 flex flex-col items-center justify-center px-4">
        <div className="flex lg:hidden flex-col items-center text-center">
          <span className="text-3xl font-bold mb-4">Careers at Rest Haven</span>
          <span className="text-md max-w-full">
            Join our team! Many terrific career opportunities are available with
            Indiana Memorial Group (IMG), with different openings in Sales,
            Operations, and Administration at our different locations in Indiana
            at any given time.
          </span>
        </div>
        <Team />
      </div>
    </>
  );
};

export default page;

import { Metadata } from "next";
import React from "react";
import NewHome from "@/components/card/NewHome";
import { Promise } from "@/components/shared/promise";

export const metadata: Metadata = {
  title: "Our Promises",
  description: "Made by Armand",
};

const page = () => {
  return (
    <>
      <NewHome />
      {/* // desktop view */}
      <div className="min-h-screen hidden lg:flex neutral-100 w-full items-center justify-center">
        <Promise />
        <div className="flex flex-col items-center pl-16">
          <span className="text-5xl font-bold mb-4">Our Promises To You</span>
        </div>
      </div>
      {/* // mobile view */}
      <div className="min-h-screen lg:hidden my-10 neutral-100 flex flex-col items-center justify-center px-4">
        <div className="flex lg:hidden flex-col items-center text-center">
          <span className="text-3xl font-bold mb-4">Our Promises To You</span>
        </div>
        <Promise />
      </div>
    </>
  );
};

export default page;

import { Metadata } from "next";
import React from "react";
import { Burial } from "@/components/card/burial";

export const metadata: Metadata = {
  title: "Burial",
  description: "Made by Armand",
};

const page = () => {
  return (
    <>
      {/* // desktop view */}
      <div className="min-h-screen hidden lg:flex neutral-100 w-full items-center justify-center">
        <Burial />
        <div className="flex flex-col items-center pl-16">
          <span className="text-5xl font-bold mb-4">Burial Options</span>
          <span className="flex w-[420px] text-lg pt-4">
            Rest Haven Memorial Park is committed to offering and maintaining
            exceptional memorial property. We provide a wide selection of
            interment property in all price ranges and many ways to memorialize
            and remember your loved ones. Interested in Cremation?
          </span>
        </div>
      </div>
      {/* // mobile view */}
      <div className="min-h-screen lg:hidden my-10 neutral-100 flex flex-col items-center justify-center px-4">
        <div className="flex lg:hidden flex-col items-center text-center">
          <span className="text-3xl font-bold mb-4">Burial Options</span>
          <span className="text-md max-w-full">
            Rest Haven Memorial Park is committed to offering and maintaining
            exceptional memorial property. We provide a wide selection of
            interment property in all price ranges and many ways to memorialize
            and remember your loved ones. Interested in Cremation?
          </span>
        </div>
        <Burial />
      </div>
    </>
  );
};

export default page;

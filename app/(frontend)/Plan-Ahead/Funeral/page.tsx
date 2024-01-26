import { Funerals } from "@/components/card/funerals";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Funeral",
  description: "Made by Armand",
};

const page = () => {
  return (
    <>
      {/* // desktop view */}
      <div className="min-h-screen hidden lg:flex neutral-100 w-full items-center justify-center">
        <Funerals />
        <div className="flex flex-col items-center pl-16">
          <span className="text-5xl font-bold mb-4">Funeral Options</span>
          <span className="flex w-[420px] text-lg pt-4">
            We believe that every funeral service should be a memorable warm
            reflection of the person who has died. Because we recognize that
            every individual is unique, Rest Haven Memorial Park can assist you.
            A wide array of options is available for you to express the unique
            way you or your loved one lived life.
          </span>
        </div>
      </div>
      {/* // mobile view */}
      <div className="min-h-screen lg:hidden my-10 neutral-100 flex flex-col items-center justify-center px-4">
        <div className="flex lg:hidden flex-col items-center text-center">
          <span className="text-3xl font-bold mb-4">Funeral Options</span>
          <span className="text-lg max-w-full">
            We believe that every funeral service should be a memorable warm
            reflection of the person who has died. Because we recognize that
            every individual is unique, Rest Haven Memorial Park can assist you.
            A wide array of options is available for you to express the unique
            way you or your loved one lived life.
          </span>
        </div>
        <Funerals />
      </div>
    </>
  );
};

export default page;

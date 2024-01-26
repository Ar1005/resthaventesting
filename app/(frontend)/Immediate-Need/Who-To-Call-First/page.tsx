import { Metadata } from "next";
import React from "react";
import { Who } from "@/components/card/Who";

export const metadata: Metadata = {
  title: "Who To Call First",
  description: "Made by Armand",
};

const page = () => {
  return (
    <>
      {/* // desktop view */}
      <div className="min-h-screen hidden lg:flex neutral-100 w-full items-center justify-center">
        <Who />
        <div className="flex flex-col items-center pl-16">
          <span className="text-5xl font-bold mb-4">Who To Call First</span>
          <span className="flex w-[420px] text-lg pt-4">
            Whether you received a 2 a.m. phone call with news of an unexpected
            death or shared your loved one’s final moments of a long illness,
            your initial reaction to the death was likely shock. It doesn’t seem
            to matter how prepared we are – or aren’t – a loved one’s death
            often leaves us feeling numb and bewildered. If you’re responsible
            for making the funeral arrangements or executing the will, shock and
            grief can be immobilizing. Even simple decisions can be
            overwhelming.
          </span>
        </div>
      </div>
      {/* // mobile view */}
      <div className="min-h-screen lg:hidden my-10 neutral-100 flex flex-col items-center justify-center px-4">
        <div className="flex lg:hidden flex-col items-center text-center">
          <span className="text-3xl font-bold mb-4">Who To Call First</span>
          <span className="text-md max-w-full">
            Whether you received a 2 a.m. phone call with news of an unexpected
            death or shared your loved one’s final moments of a long illness,
            your initial reaction to the death was likely shock. It doesn’t seem
            to matter how prepared we are – or aren’t – a loved one’s death
            often leaves us feeling numb and bewildered. If you’re responsible
            for making the funeral arrangements or executing the will, shock and
            grief can be immobilizing. Even simple decisions can be
            overwhelming.
          </span>
        </div>
        <Who />
      </div>
    </>
  );
};

export default page;

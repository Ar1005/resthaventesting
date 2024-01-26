import { Faq } from "@/components/shared/FAQ";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Made by Armand",
};

const Page = () => {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:flex min-h-screen justify-start items-center flex-col bg-neutral-100">
        <div className="flex flex-col items-center pt-10 gap-y-10 w-[1400px]">
          <span className="text-5xl font-bold text-center">Frequently Asked Questions</span>

          <Faq />
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden min-h-screen justify-center flex items-center flex-col bg-neutral-100">
        <div className="flex flex-col items-center pt-6 gap-y-6 w-full px-6">
          <span className="text-3xl font-bold text-center">Frequently Asked Questions</span>

          <Faq />
        </div>
      </div>
    </div>
  );
};

export default Page;

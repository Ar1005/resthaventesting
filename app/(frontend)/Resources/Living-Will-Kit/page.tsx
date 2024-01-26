import Living from "@/components/shared/Living";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Living Will Kit",
  description: "Made by Armand",
};

const page = () => {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:flex min-h-screen justify-start items-center flex-col bg-neutral-100">
        <div className="flex flex-col items-center pt-10 gap-y-10 w-[1400px]">
          <span className="text-5xl font-bold">Living Will Kit</span>

          <Living />
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden min-h-screen justify-center flex items-center flex-col bg-neutral-100">
        <div className="flex flex-col items-center pt-6 gap-y-6 w-full px-6">
          <span className="text-3xl font-bold">Living Will Kit</span>

          <Living />
        </div>
      </div>
    </div>
  );
};

export default page;

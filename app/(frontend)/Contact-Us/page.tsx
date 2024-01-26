import { ContactUs } from "@/components/shared/Contact-Us";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Made by Armand",
};

const Page = () => {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:flex min-h-screen justify-start items-center flex-col bg-neutral-100">
        <div>Google Map</div>
        <div className="flex flex-col items-center pt-10 gap-y-10 w-[1400px]">
          <span className="text-5xl font-bold">Contact Us</span>
          <span className="w-[1200px]">
            Please let us know if you have questions by stopping by the office,
            email, or calling. If this is an emergency and someone has passed
            away, please call (765) 447-1797. Emergency Service is offered 24
            hours a day/7 days a week.
          </span>
          <ContactUs />
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden min-h-screen justify-center flex items-center flex-col bg-neutral-100">
        <div>Google Map</div>
        <div className="flex flex-col items-center pt-6 gap-y-6 w-full px-6">
          <span className="text-3xl font-bold">Contact Us</span>
          <span className="w-full text-sm">
            Please let us know if you have questions by stopping by the office,
            email, or calling. If this is an emergency and someone has passed
            away, please call (765) 447-1797. Emergency Service is offered 24
            hours a day/7 days a week.
          </span>
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default Page;

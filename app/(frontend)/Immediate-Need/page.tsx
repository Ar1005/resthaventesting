import { Metadata } from "next";
import React from "react";
import { Immediate } from "@/components/card/Immediate";

export const metadata: Metadata = {
  title: "Immediate Need",
  description: "Made by Armand",
};

const page = () => {
  return (
    <>
      {/* // desktop view */}
      <div className="min-h-screen hidden lg:flex neutral-100 w-full items-center justify-center">
        <Immediate />
        <div className="flex flex-col items-center pl-16">
          <span className="text-5xl font-bold mb-4">Immediate Need</span>
          <span className="flex w-[420px] text-lg pt-4">
            Whether you were awakened by a 2 a.m. phone call bearing news of an
            unexpected passing or stood witness to your loved one's final
            moments after a prolonged illness, the initial response to death is
            often one of profound shock. Regardless of our level of preparedness
            or lack thereof the departure of a loved one tends to leave us in a
            state of numbness and bewilderment. Should the responsibility of
            arranging the funeral or executing the will fall upon you, the
            overwhelming waves of shock and grief can render even the simplest
            decisions immobilizing.
          </span>
        </div>
      </div>
      {/* // mobile view */}
      <div className="min-h-screen lg:hidden my-10 neutral-100 flex flex-col items-center justify-center px-4">
        <div className="flex lg:hidden flex-col items-center text-center">
          <span className="text-3xl font-bold mb-4">Immediate Need</span>
          <span className="text-md max-w-full">
            Whether you were awakened by a 2 a.m. phone call bearing news of an
            unexpected passing or stood witness to your loved one's final
            moments after a prolonged illness, the initial response to death is
            often one of profound shock. Regardless of our level of preparedness
            or lack thereof the departure of a loved one tends to leave us in a
            state of numbness and bewilderment. Should the responsibility of
            arranging the funeral or executing the will fall upon you, the
            overwhelming waves of shock and grief can render even the simplest
            decisions immobilizing.
          </span>
        </div>
        <Immediate />
      </div>
    </>
  );
};

export default page;

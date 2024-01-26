import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobileView = () => {
  return (
    <div className="min-h-screen neutral-100 lg:hidden flex flex-col justify-center items-center py-8 px-4">
      <Image
        src="/flowers.jpg"
        alt="Floral Replacement Program"
        width={500}
        height={500}
        className="mb-4 rounded-lg"
      />
      <div className="flex flex-col gap-y-4 items-center w-full">
        <strong className="text-neutral-900 text-lg font-bold">
          Floral Replacement Program.
        </strong>
        <div className="text-sm w-[300px]  flex flex-col gap-y-2 text-center">
          <span>
            Rest Haven Memorial Park is honored to introduce our Floral
            Placement Program – a cherished and reliable way to commemorate your
            beloved departed ones with exquisitely crafted artificial floral
            arrangements thoughtfully arranged throughout the year.
          </span>
          <span>
            This program caters to bronze or granite vases affixed to markers or
            monuments, as well as mausoleum crypts. Choose from one, two, or
            three seasonal bouquets, to be delicately placed during the first
            month of each season. Alternatively, for significant milestones,
            select a specific date, and pick the perfect bouquet for that
            special occasion.
          </span>
          <span>
            To ensure timely arrangements, kindly return the enclosed order form
            at least two (2) weeks before the chosen date. If you have any
            queries or require a mailed copy of the form, don't hesitate to
            reach out to us at (765) 447-1797, Monday to Friday, between 9 a.m.
            and 4 p.m.
          </span>
          <span>
            For the winter months and holidays, we offer exclusive selections
            available for order starting in October. To access the floral order
            form, please click the button below.
          </span>
        </div>
        <div className="gap-x-2 flex text-neutral-100">
          <Button
            type="button"
            className="rounded-full text-neutral-100 text-xl bg-[#6c9c81] px-4 py-3"
          >
            <Link href="/Rest-Haven-2023-Winter-Floral-Form.pdf">CEMETERY</Link>
          </Button>
          <Button
            type="button"
            className="rounded-full text-neutral-100 text-xl bg-[#6c9c81] px-4 py-3"
          >
            <Link href="/REST-HAVEN-2023-MAUSOLEUM-WINTER-FLORAL-FORM.pdf">
              MAUSOLEUM
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileView;

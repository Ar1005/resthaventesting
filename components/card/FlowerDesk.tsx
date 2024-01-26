// DesktopView.jsx
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DesktopView = () => {
  return (
    <div className="min-h-screen neutral-100 hidden lg:flex items-start justify-center pt-20">
      <div className="flex items-center">
        <Image
          src="/flowers.jpg"
          alt="Floral Replacement Program"
          width={900}
          height={900}
        />
        <div className="flex flex-col pl-8 w-[600px]">
          <div className="flex flex-col gap-y-8 items-start">
            <strong className="text-neutral-900 text-[50px] font-bold">
              Floral Replacement Program.
            </strong>
            <div className="text-sm leading-5 flex flex-col gap-y-2">
              <span>
                Rest Haven Memorial Park is honored to introduce our Floral
                Placement Program a cherished and reliable way to commemorate
                your beloved departed ones with exquisitely crafted artificial
                floral arrangements thoughtfully arranged throughout the year.
              </span>
              <span>
                This program caters to bronze or granite vases affixed to
                markers or monuments, as well as mausoleum crypts. Choose from
                one, two, or three seasonal bouquets, to be delicately placed
                during the first month of each season. Alternatively, for
                significant milestones, select a specific date, and pick the
                perfect bouquet for that special occasion.
              </span>
              <span>
                To ensure timely arrangements, kindly return the enclosed order
                form at least two (2) weeks before the chosen date. Should you
                have any queries or require a mailed copy of the form, don't
                hesitate to reach out to us at (765) 447-1797, Monday to Friday,
                between 9 a.m. and 4 p.m.
              </span>
              <span>
                For the winter months and holidays, we offer exclusive
                selections available for order starting in October. To access
                the floral order form, please click the button below.
              </span>
            </div>
            <div className="gap-x-4 flex text-neutral-100">
              <Button
                type="button"
                className="rounded-full text-neutral-100 text-3xl bg-[#6c9c81] px-10 py-8 text-light"
              >
                <Link href="/Rest-Haven-2023-Winter-Floral-Form.pdf">
                  CEMETERY
                </Link>
              </Button>
              <Button
                type="button"
                className="rounded-full text-neutral-100 text-3xl bg-[#6c9c81] px-10 py-8 text-light"
              >
                <Link href="/REST-HAVEN-2023-MAUSOLEUM-WINTER-FLORAL-FORM.pdf">
                  MAUSOLEUM
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopView;

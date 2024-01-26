import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewHome from "@/components/card/NewHome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Communities We Serve",
  description: "Made by Armand",
};

const Page = () => {
  return (
    <>
    <NewHome />
      <div>
        {/* Desktop View */}
        <div className="hidden md:flex min-h-screen bg-neutral-100 flex-col justify-start pt-10 items-center">
          <div className="gap-y-4 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold">Communities We Serve</span>
            <span className="w-[1400px]">
              Rest Haven Memorial Park in West Lafayette, IN, offers affordable
              Funeral Options and Cremation Services, catering to families in
              surrounding areas like Montmorenci and Otterbein. As your local
              funeral home, we stand by you every step of the way, ensuring an
              honorable Funeral Service or Cremation for your loved one.
            </span>
          </div>
          <div className="flex flex-col mb-10 w-[1400px]">
            <div className="flex pt-10">
              <div className="flex flex-col gap-y-4">
                <span className="w-[590px]">
                  Allow Rest Haven Memorial Park to serve your family; contact
                  us today to learn about our Affordable Cost Options. For more
                  information, explore the following links:
                </span>
                <ul className="list-disc text-[#6c9c81]">
                  <li>
                    <Link href="/Plan-Ahead" className=" hover:font-bold">
                      Benefits of Planning Ahead
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Plan-Ahead/Pricing"
                      className=" hover:font-bold"
                    >
                      Pricing & Packages
                    </Link>
                  </li>
                  <li>
                    <Link href="/Resources/FAQ" className=" hover:font-bold">
                      Frequently Asked Questions
                    </Link>
                  </li>
                </ul>
              </div>
              <Image
                src="/rest-haven-h-about-us.jpg"
                alt="Community"
                width={800}
                height={800}
              />
            </div>
            <span className="text-3xl pb-4">
              Frequently Asked Questions about Cremation
            </span>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col">
                <span>What is Cremation?</span>
                <span>
                  During cremation, a dead body is burned and vaporized at high
                  temperatures, leaving only ashes. The ashes are specifically
                  from the destruction of bone. Other tissues are vaporized.
                </span>
              </div>
              <div className="flex flex-col">
                <span>What are cremated remains?</span>
                <span>
                  Cremated remains, or cremains, are the ashes that remain
                  following the cremation process.
                </span>
              </div>
              <div className="flex flex-col">
                <span>
                  How can I tell if I am getting a reputable firm to handle the
                  cremation??
                </span>
                <span>
                  There are many ways to ensure you choose a reputable firm for
                  cremation. Check the qualifications of the staff, learn about
                  the procedures that ensure proper running of the crematorium
                  and proper identification of the deceased, and assess the
                  candid and direct disclosure of costs.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden min-h-screen my-4 bg-neutral-100 flex-col justify-start pt-6 items-center">
          <div className="gap-y-6 flex flex-col items-center justify-center w-full px-6">
            <span className="text-3xl font-bold">Communities We Serve</span>
            <span className="w-full text-sm">
              Rest Haven Memorial Park in West Lafayette, IN, offers affordable
              Funeral Options and Cremation Services, catering to families in
              surrounding areas like Montmorenci and Otterbein. As your local
              funeral home, we stand by you every step of the way, ensuring an
              honorable Funeral Service or Cremation for your loved one.
            </span>
          </div>
          <div className="flex flex-col w-full px-6">
            <div className="flex flex-col gap-y-4">
              <span className="w-full">
                Allow Rest Haven Memorial Park to serve your family; contact us
                today to learn about our Affordable Cost Options. For more
                information, explore the following links:
              </span>
              <ul className="list-disc text-[#6c9c81]">
                <li>
                  <Link href="/Plan-Ahead" className=" hover:font-bold">
                    Benefits of Planning Ahead
                  </Link>
                </li>
                <li>
                  <Link href="/Plan-Ahead/Pricing" className=" hover:font-bold">
                    Pricing & Packages
                  </Link>
                </li>
                <li>
                  <Link href="/Resources/FAQ" className=" hover:font-bold">
                    Frequently Asked Questions
                  </Link>
                </li>
              </ul>
            </div>
            <Image
              src="/rest-haven-h-about-us.jpg"
              alt="Community"
              width={800}
              height={800}
            />
            <span className="text-2xl pb-4">
              Frequently Asked Questions about Cremation
            </span>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col">
                <span>What is Cremation?</span>
                <span>
                  During cremation, a dead body is burned and vaporized at high
                  temperatures, leaving only ashes. The ashes are specifically
                  from the destruction of bone. Other tissues are vaporized.
                </span>
              </div>
              <div className="flex flex-col">
                <span>What are cremated remains?</span>
                <span>
                  Cremated remains, or cremains, are the ashes that remain
                  following the cremation process.
                </span>
              </div>
              <div className="flex flex-col">
                <span>
                  How can I tell if I am getting a reputable firm to handle the
                  cremation??
                </span>
                <span>
                  There are many ways to ensure you choose a reputable firm for
                  cremation. Check the qualifications of the staff, learn about
                  the procedures that ensure proper running of the crematorium
                  and proper identification of the deceased, and assess the
                  candid and direct disclosure of costs.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

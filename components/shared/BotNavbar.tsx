import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbClockHour3 } from "react-icons/tb";
import { MdSmartphone } from "react-icons/md";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { IoMdHome } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";

const BotNavbar = () => {
  return (
    <div className="bg-[#6c9c81] text-neutral-100 py-4 w-full h-auto lg:h-96 bottom-0 z-20">
      {/* Desktop View */}
      <div className="hidden lg:flex items-start justify-evenly">
        {/* About Us */}
        <div className="flex flex-col gap-y-4">
          <span className="font-bold">About Us</span>
          <div className="w-72">
            <div className="flex items-center gap-x-4 pb-4">
              <FaMapMarkerAlt size={40} />
              <span>
                Rest Haven Memorial Park 1200 Sagamore Parkway North Lafayette,
                IN 47904
              </span>
            </div>
            <div className="flex items-center gap-x-4 pb-4">
              <MdSmartphone size={20} />
              <span>
                Telephone:{" "}
                <a
                  href="tel:(765)447-1797"
                  className="text-white hover:text-neutral-900 transition-all delay-100"
                >
                  (765) 447-1797
                </a>
              </span>
            </div>
            <div className="flex items-center gap-x-4">
              <TbClockHour3 size={20} />
              <div className="flex flex-col">
                <div>Monday – Friday: 8 am to 5 pm</div>
                <div>Saturday: 9 am to 5 pm</div>
                <div>Sunday By Appointment</div>
                <div>Cemetery closes at dusk.</div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="flex flex-col gap-y-4">
          <span className="font-bold">Contact</span>
          <span className="w-72">
            For inquiries about our services, reach out to us, and we'll
            promptly respond. In case of emergencies, call us anytime at +1
            (765) 447-1797, 24/7.
          </span>
          <Input
            type="email"
            placeholder="Email"
            className="text-neutral-900 border rounded-none"
          />
          <Textarea
            placeholder="Write Here"
            className="text-neutral-900 h-28 rounded-none"
          />
        </div>
      </div>

      {/* Mobile View */}
      {/* About Us */}
      <div className="lg:hidden flex gap-y-4 px-4 items-center  justify-between">
        <Link href="/">
          <IoMdHome className="h-10 w-10" />
        </Link>
        <Link href="/About-Us">
          <RiTeamFill className="h-10 w-10" />
        </Link>
        <Link href="https://www.google.com/maps/dir//Rest+Haven+Memorial+Park+1200+Sagamore+Pkwy+N+Lafayette,+IN+47904+United+States/@40.4299666,-86.8595279,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x8813032b28fd9b7f:0xaa1bfaa539023c3f">
          <FaMapMarkerAlt className="h-10 w-10" />
        </Link>
        <Link href="Contact-Us">
          <FaPhoneAlt className="h-10 w-10"/>
        </Link>
      </div>
    </div>
  );
};

export default BotNavbar;

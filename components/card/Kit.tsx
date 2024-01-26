import * as React from "react";
import { FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";
import { MdSmartphone } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { GoClock } from "react-icons/go";

export function Kit() {
  
  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:flex justify-center">
        <Card className="w-[350px] bg-[#6c9c81] text-neutral-100">
          <CardHeader>
            <CardDescription className="pt-4 font-light text-neutral-100">
            Secure your future with our free Living Will Kit. The Personal
            Planning Organizer is your central hub for vital information in case
            of illness or accident. Ensure your preferences are known to avoid
            decisions being made for you. Indiana residents can receive a kit
            with legal documents, a Family Discussion Guide, and clear
            instructions. Our step-by-step process lets you communicate
            healthcare preferences systematically. Choose a decision-maker for
            life support and treatment. By documenting choices in advance, you
            retain control even if unable to speak. The kit includes details on
            DNRs, Organ Donation, and a space for funeral and cemetery
            preferences. Terri Shiavo's case underscores the importance of
            having a Living Will. "Unexpected end-of-life situations can happen
            at any age…all adults should have a Living Will." – The Mayo Clinic.
            Get your free Indiana Living Will Kit by filling out the form for
            residents..
            </CardDescription>
          </CardHeader>
          
          <CardFooter className="flex justify-between">
            <Link
              href="https://www.facebook.com/RestHavenLafayette/"
              className=" p-1 rounded-full hover:text-black hover:bg-neutral-100"
            >
              <FaFacebookF size={20} />
            </Link>
          </CardFooter>
        </Card>
      </div>

      {/* Mobile View */}
      <div className=" lg:hidden justify-center">
        <Card className="w-[350px] bg-[#6c9c81] text-neutral-100">
          <CardHeader>
            <CardDescription className="pt-4 font-light text-neutral-100">
            Secure your future with our free Living Will Kit. The Personal
            Planning Organizer is your central hub for vital information in case
            of illness or accident. Ensure your preferences are known to avoid
            decisions being made for you. Indiana residents can receive a kit
            with legal documents, a Family Discussion Guide, and clear
            instructions. Our step-by-step process lets you communicate
            healthcare preferences systematically. Choose a decision-maker for
            life support and treatment. By documenting choices in advance, you
            retain control even if unable to speak. The kit includes details on
            DNRs, Organ Donation, and a space for funeral and cemetery
            preferences. Terri Shiavo's case underscores the importance of
            having a Living Will. "Unexpected end-of-life situations can happen
            at any age…all adults should have a Living Will." – The Mayo Clinic.
            Get your free Indiana Living Will Kit by filling out the form for
            residents.
            </CardDescription>
          </CardHeader>
          
          <CardFooter className="flex justify-center">
            <Link
              href="https://www.facebook.com/RestHavenLafayette/"
              className=" p-1 rounded-full hover:text-black hover:bg-neutral-100"
            >
              <FaFacebookF size={40} className="border rounded-full"/>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

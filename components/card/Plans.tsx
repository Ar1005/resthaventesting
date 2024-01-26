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

export function Plans() {

  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:flex justify-center">
        <Card className="w-[350px] bg-[#6c9c81] text-neutral-100">
          <CardHeader>
            <CardDescription className="pt-4 font-light text-neutral-100">
              <span className="font-light text-neutral-100">
                Ensure your final wishes are known and respected by pre-planning
                with Rest Haven Memorial Park. Our free planning tools help you
                articulate your preferences, avoiding family disputes and
                ensuring your desires are honored.
              </span>
              <span className="font-light text-neutral-100">
                Pre-planning offers financial relief during stress. Like
                millions, plan ahead to discuss costs, ceremony options, and
                create a detailed plan. Guarantee fixed prices, protecting
                against inflation and potential savings. Securely held funds
                ensure exact arrangements are fulfilled at the time of need.
                Choose pre-planning for peace of mind, eliminating guesswork and
                financial burdens.
              </span>
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
            <CardDescription>
              <span className="font-light text-neutral-100">
                Ensure your final wishes are known and respected by pre-planning
                with Rest Haven Memorial Park. Our free planning tools help you
                articulate your preferences, avoiding family disputes and
                ensuring your desires are honored.
              </span>
              <span className="font-light text-neutral-100">
                Pre-planning offers financial relief during stress. Like
                millions, plan ahead to discuss costs, ceremony options, and
                create a detailed plan. Guarantee fixed prices, protecting
                against inflation and potential savings. Securely held funds
                ensure exact arrangements are fulfilled at the time of need.
                Choose pre-planning for peace of mind, eliminating guesswork and
                financial burdens.
              </span>
            </CardDescription>
          </CardHeader>
          
          <CardFooter className="flex justify-center">
            <Link
              href="https://www.facebook.com/RestHavenLafayette/"
              className=" p-1 rounded-full hover:text-black hover:bg-neutral-100"
            >
              <FaFacebookF size={40} className="border rounded-full" />
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

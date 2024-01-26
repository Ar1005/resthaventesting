import * as React from "react";
import { FaFacebookF } from "react-icons/fa";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function Planning() {
  return (
    <Card className="w-[350px] bg-[#6c9c81] text-neutral-100">
      <CardHeader>
        <CardTitle className="">Plan</CardTitle>
        <CardDescription className="pt-4 gap-y-4 flex flex-col">
          <span className="font-light text-neutral-100">
            Ensure your final wishes are known and respected by pre-planning
            with Rest Haven Memorial Park. Our free planning tools help you
            articulate your preferences, avoiding family disputes and ensuring
            your desires are honored.
          </span>
          <span className="font-light text-neutral-100">
            Pre-planning offers financial relief during stress. Like millions,
            plan ahead to discuss costs, ceremony options, and create a detailed
            plan. Guarantee fixed prices, protecting against inflation and
            potential savings. Securely held funds ensure exact arrangements are
            fulfilled at the time of need. Choose pre-planning for peace of
            mind, eliminating guesswork and financial burdens.
          </span>
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex  justify-between">
        <Link
          href="https://www.facebook.com/RestHavenLafayette/"
          className=" p-1 rounded-full hover:text-black hover:bg-neutral-100"
        >
          <FaFacebookF size={20} />
        </Link>
      </CardFooter>
    </Card>
  );
}

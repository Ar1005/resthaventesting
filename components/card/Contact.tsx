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

export function CardWithForm() {
  const contactInfo = [
    {
      icon: (size:number ) => <MdSmartphone size={size} />,
      text: "(765) 447-1797",
      size: 25,
    },
    {
      icon: (size:number ) => <FaMapMarkerAlt size={size} />,
      text: "Rest Haven Memorial Park 1200 Sagamore Parkway North Lafayette, IN 47904",
      size: 40,
    },
    {
      icon: (size:number ) => <GoClock size={size} />,
      text: "Monday – Friday: 8 am to 5 pm Saturday: 9 am to 5 pm Sunday By Appointment Cemetery closes at dusk.",
      size: 40,
    },
  ];
  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:flex justify-center">
        <Card className="w-[350px] bg-[#6c9c81] text-neutral-100">
          <CardHeader>
            <CardTitle className="">Contact Us</CardTitle>
            <CardDescription className="pt-4 font-light text-neutral-100">
              Prepare for the future to ease the burden on your loved ones
              during emotional times. Get a free Living Will Kit for medical
              directives and organize your important documents with our Personal
              Planning Organizer. Planning in advance allows your family to
              avoid difficult decisions when they need it the least.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="gap-y-10 flex flex-col items-start justify-center pt-10">
              {contactInfo.map(({ icon, text, size }) => (
                <div key={text} className="flex items-center ">
                  {icon(size)}
                  <span className="pl-4 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </CardContent>
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
            <CardTitle className="">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="gap-y-10 flex flex-col items-start justify-center pt-10">
              {contactInfo.map(({ icon, text, size }) => (
                <div key={text} className="flex items-center ">
                  {icon(size)}
                  <span className="pl-4 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link
              href="https://www.facebook.com/RestHavenLafayette/"
              className=" p-1 rounded-full hover:text-black hover:bg-neutral-100"
            >
              <FaFacebookF size={40} className="border rounded-full "/>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

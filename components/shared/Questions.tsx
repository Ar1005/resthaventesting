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

export function Questions() {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:flex justify-center">
        <Card className="w-[350px] bg-[#6c9c81] text-neutral-100">
          <CardHeader>
            <CardDescription className=" gap-y-4 flex flex-col font-light text-neutral-100">
              <span className="font-bold">Funeral and Cemetery FAQ:</span>
              <ul className="list-disc ">
                <li>
                  <span className="font-bold">
                    Purpose of a Funeral Service:
                  </span>
                  Acknowledges death and starts the grieving process allows for
                  celebrating the lived life.
                </li>
                <li>
                  <span className="font-bold">
                    Difference Between Memorial and Funeral Service:
                  </span>
                  Memorial service: Deceased not present; funeral service:
                  Deceased is present.
                </li>
                <li>
                  <span className="font-bold">
                    Customization of Funeral Service:
                  </span>
                  Options for traditional or personalized services; tailored to
                  the individual's lifestyle and personality.
                </li>
                <li>
                  <span className="font-bold">What is a Visitation?</span>{" "}
                  Formal chance to express sympathy; held at the funeral home,
                  with the deceased present.
                </li>
                <li>
                  <span className="font-bold">
                    Public Viewing and Its Purpose:
                  </span>{" "}
                  Follows cultural traditions to aid in grieving; encouraged for
                  children to understand death.
                </li>
                <li>
                  <span className="font-bold">Types and Costs of Caskets:</span>{" "}
                  Metal (bronze, copper, steel) or wood; prices vary based on
                  materials used.
                </li>
                <li>
                  <span className="font-bold">
                    Purpose of Embalming and Its Requirement:
                  </span>{" "}
                  Sanitizes and preserves the body; not legally required but
                  common for planned viewings.
                </li>
                <li>
                  <span className="font-bold">Cost of a Funeral:</span> Varies
                  based on service type and funeral home; two types of costs:
                  services and merchandise.
                </li>

              </ul>
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
            <CardDescription className=" gap-y-4 flex flex-col font-light text-neutral-100">
              <span className="font-bold">Funeral and Cemetery FAQ:</span>
              <ul className="list-disc ">
                <li>
                  <span className="font-bold">
                    Purpose of a Funeral Service:
                  </span>
                  Acknowledges death and starts the grieving process allows for
                  celebrating the lived life.
                </li>
                <li>
                  <span className="font-bold">
                    Difference Between Memorial and Funeral Service:
                  </span>
                  Memorial service: Deceased not present; funeral service:
                  Deceased is present.
                </li>
                <li>
                  <span className="font-bold">
                    Customization of Funeral Service:
                  </span>
                  Options for traditional or personalized services; tailored to
                  the individual's lifestyle and personality.
                </li>
                <li>
                  <span className="font-bold">What is a Visitation?</span>{" "}
                  Formal chance to express sympathy; held at the funeral home,
                  with the deceased present.
                </li>
                <li>
                  <span className="font-bold">
                    Public Viewing and Its Purpose:
                  </span>{" "}
                  Follows cultural traditions to aid in grieving; encouraged for
                  children to understand death.
                </li>
                <li>
                  <span className="font-bold">Types and Costs of Caskets:</span>{" "}
                  Metal (bronze, copper, steel) or wood; prices vary based on
                  materials used.
                </li>
                <li>
                  <span className="font-bold">
                    Purpose of Embalming and Its Requirement:
                  </span>{" "}
                  Sanitizes and preserves the body; not legally required but
                  common for planned viewings.
                </li>
                <li>
                  <span className="font-bold">Cost of a Funeral:</span> Varies
                  based on service type and funeral home; two types of costs:
                  services and merchandise.
                </li>
                <li>
                  <span className="font-bold">
                    Included Services in Funeral Home's Price:
                  </span>{" "}
                  All charges provided in a general price list.
                </li>
                <li>
                  <span className="font-bold">Importance of Pre-Planning:</span>{" "}
                  Plan ahead to ease stress on loved ones; financing options
                  available to combat inflation.
                </li>
                <li>
                  <span className="font-bold">
                    Making Changes to Pre-Arranged Service:
                  </span>{" "}
                  Contact the funeral home for assistance.
                </li>
                <li>
                  <span className="font-bold">
                    Choosing the Right Type of Grave:
                  </span>{" "}
                  Consider preferences, number of burials, and budget.
                </li>
                <li>
                  <span className="font-bold">
                    Options Besides Ground Burial:
                  </span>{" "}
                  Community mausoleums, private mausoleums, and more.
                </li>
                <li>
                  <span className="font-bold">Cremation Options:</span> Various
                  choices for memorialization; cremation offers flexibility and
                  customization.
                </li>
                <li>
                  <span className="font-bold">
                    Funeral Service with Body Present in Cremation:
                  </span>{" "}
                  Deceased can be embalmed and placed in a ceremonial casket.
                </li>
                <li>
                  <span className="font-bold">
                    Ceremony Options Without Body Present:
                  </span>{" "}
                  Private or public visitation before cremation; memorial
                  service at a place of worship or cremation facility.
                </li>
                <li>
                  <span className="font-bold">
                    Addressing Unanswered Questions:
                  </span>{" "}
                  Call our office or submit questions via the provided form.
                </li>
              </ul>
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

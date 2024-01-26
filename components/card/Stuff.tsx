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

export function Stuff() {
  return (
    <Card className="w-[350px] bg-[#6c9c81] text-neutral-100">
      <CardHeader>
        <CardDescription className=" gap-y-4 flex flex-col font-light text-neutral-100">
          <span>
            "Grief is reaching for someone who's always been there, only to
            find, when you need them most, they're gone."
          </span>
          <span>
            The death of a loved one is incredibly painful, and grief is a
            natural response with symptoms like sadness, denial, guilt, and
            more. Healing involves allowing yourself to feel and accept the
            pain, which can take less time than you might think.
          </span>
          <ul className="list-disc">
            <li><span className="font-bold">General Grief Resources:</span> Understand the diverse ways people grieve and common patterns.</li>
            <li><span className="font-bold">Helpful Links:</span> Self-care is essential; recovery timelines var.</li>
            <li><span className="font-bold">Suggested Reading:</span> Access our free lending library for comprehensive resources.</li>
            <li><span className="font-bold">Helping Yourself Heal:</span> Embrace mourning, recognize unique grief, share feelings, and expect a range of emotions.</li>
            <li><span className="font-bold">Accepting a Loss:</span> Regardless of circumstance, facing personal losses is universal.</li>
            <li><span className="font-bold">The Grieving Process:</span> Explore common patterns in how minds and bodies react to major loss.</li>
          </ul>
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-center">
        <Link
          href="https://www.facebook.com/RestHavenLafayette/"
          className=" p-1 rounded-full hover:text-black hover:bg-neutral-100"
        >
          <FaFacebookF size={40} className="rounded-full border"/>
        </Link>
      </CardFooter>
    </Card>
  );
}

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Personals } from "../card/Personals";

const Personal = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Desktop View */}
      <div className="hidden lg:flex w-[1200px] p-2 flex bg-white rounded-lg border h-[600px]">
        <Personals />
        <div className="flex flex-col p-8 gap-y-4 w-3/5">
          <div className="flex gap-x-14">
            {["First", "Last"].map((name) => (
              <div key={name}>
                <span>{`${name} Name`}</span>
                <Input
                  type="text"
                  className="border-0 p-0 border-b-2 rounded-none border-black w-80 required:border-red-500"
                  placeholder={`John`}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-x-14">
            {["Email", "Phone"].map((field) => (
              <div key={field}>
                <span>{field}</span>
                <Input
                  type={field === "Email" ? "email" : "tel"}
                  className="border-0 p-0 border-b-2 rounded-none border-black w-80 required:border-red-500"
                  placeholder={`johndoe@${field.toLowerCase()}.com`}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-x-14">
            <div>
              <span>Address</span>
              <Input
                type="text"
                className="border-0 p-0 border-b-2 rounded-none border-black w-[695px] required:border-red-500"
                placeholder="123 Whitehouse "
              />
            </div>
          </div>
          <div className="flex gap-x-14">
            <div>
              <span>Your Message</span>
              <Textarea
                className="border-0 p-0 border-b-2 h-48 mt-4 rounded-none border-black w-[695px] required:border-red-500"
                placeholder="Write Your Message.."
              />
            </div>
          </div>
          <Button
            type="button"
            className="w-36 h-20 ml-auto rounded-full bg-[#6c9c81] py-4 px-2 text-neutral-100"
          >
            Send Message
          </Button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden w-full my-4 p-2 flex flex-col bg-white rounded-lg border">
        <Personals />
        <div className="flex flex-col p-8 gap-y-4">
          {["First", "Last", "Email", "Phone"].map((field) => (
            <div key={field}>
              <span>{field} Name</span>
              <Input
                type={field === "Email" ? "email" : "text"}
                className="border-0 p-0 border-b-2 rounded-none border-black w-full required:border-red-500"
                placeholder={`Enter ${field}...`}
              />
            </div>
          ))}
          <div>
            <span>Address</span>
            <Input
              type="text"
              className="border-0 p-0 border-b-2 rounded-none border-black w-full required:border-red-500"
              placeholder="123 Whitehouse "
            />
          </div>
          <div>
            <span>Your Message</span>
            <Textarea
              className="border-0 p-0 border-b-2 h-48 mt-4 rounded-none border-black w-full required:border-red-500"
              placeholder="Write Your Message.."
            />
          </div>
          <Button
            type="button"
            className="w-full h-12 mt-4 rounded-full bg-[#6c9c81] py-4 px-2 text-neutral-100"
          >
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Personal;

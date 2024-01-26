import Link from "next/link";
import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <>
            <div className="justify-self-end w-full flex">
        <div className="hidden md:flex w-full h-20 bg-neutral-900 flex items-center justify-center justify-self-end gap-40">
          <span className="font-base text-sm text-neutral-50">
            © Copyright 2024 Rest Haven Memorial Park | Lafayette, IN 47904 |{" "}
            <a
              href="tel:(765)447-1797"
              className="hover:text-[#6c9c81] transition-all delay-100"
            >
              (765) 447-1797
            </a>
          </span>
        </div>
        <div className="md:hidden w-full h-20 bg-neutral-900 flex items-center justify-self-end justify-center gap-4 p-2">
          <span className="font-normal text-neutral-100 text-center">
            © Copyright 2024 Rest Haven Memorial Park | Lafayette, IN 47904 |{" "}
            <a
              href="tel:(765)447-1797"
              className="hover:text-[#6c9c81]  transition-all delay-100"
            >
              (765) 447-1797
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;

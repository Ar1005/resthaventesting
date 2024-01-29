"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FcMenu } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { PlanAhead } from "./Dropdown";
import { ImmediateNeed } from "./Dropdown-1";
import { Resources } from "./Dropdown-2";
import { WhoWeAre } from "./Dropdown-3";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="lg:hidden relative fixed flex items-center justify-center">
      <nav className="w-full bg-neutral-900 fixed top-0 left-0 right-0 z-50 drop-shadow">
        <div className="justify-evenly px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 lg:py-[14px] lg:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="/Logo.png"
                  alt="My Logo"
                  className=" h-14 w-44 cursor-pointer opacity-100 hover:opacity-75"
                  width={400}
                  height={400}
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="lg:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <GrClose className="text-3xl text-neutral-100 " />
                  ) : (
                    <FcMenu className="text-3xl text-neutral-100 " />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-3 ${
                navbar ? "p-12 lg:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen bg-neutral-900 lg:h-auto items-center justify-center lg:flex flex-col font-semibold ">
                <li className="py-4 text-lg text-neutral-100 md:px-2 text-center border-b-[1px] md:border-b-0  hover:bg-[#6c9c81]  border-neutral-150  md:hover:text-[#6c9c81] md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="py-4 text-lg text-neutral-100 px-2 text-center  border-b-[1px] md:border-b-0  hover:bg-[#6c9c81]  border-neutral-150  md:hover:text-[#6c9c81] md:hover:bg-transparent">
                  <Link href="/Flower-Gifts" onClick={() => setNavbar(!navbar)}>
                    Send Flower & Gifts
                  </Link>
                </li>
                <li onClick={() => setNavbar(!navbar)} className="py-4 text-lg text-neutral-100 px-2 text-center  border-b-[1px] md:border-b-0  hover:bg-[#6c9c81]  border-neutral-150  md:hover:text-[#6c9c81] md:hover:bg-transparent">
                  <PlanAhead />
                </li>
                <li onClick={() => setNavbar(!navbar)} className="py-4 text-lg text-neutral-100 px-2 text-center  border-b-[1px] md:border-b-0  hover:bg-[#6c9c81]  border-neutral-150  md:hover:text-[#6c9c81] md:hover:bg-transparent">
                  <ImmediateNeed />
                </li>
                <li onClick={() => setNavbar(!navbar)} className="py-4 text-lg text-neutral-100 px-2 text-center  border-b-[1px] md:border-b-0  hover:bg-[#6c9c81]  border-neutral-150  md:hover:text-[#6c9c81] md:hover:bg-transparent">
                  <Resources />
                </li>
                <li onClick={() => setNavbar(!navbar)} className="py-4 text-lg text-neutral-100 px-2 text-center  border-b-[1px] md:border-b-0  hover:bg-[#6c9c81]  border-neutral-150  md:hover:text-[#6c9c81] md:hover:bg-transparent">
                  <WhoWeAre />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

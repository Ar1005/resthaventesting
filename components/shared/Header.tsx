"use client";

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { PlanAhead } from "./Dropdown";
import { ImmediateNeed } from "./Dropdown-1";
import { Resources } from "./Dropdown-2";
import { WhoWeAre } from "./Dropdown-3";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex fixed lg:flex z-50 hidden items-center justify-around w-full h-28 top-0  transition-all text-neutral-100 ${
        navbar ? "bg-black" : "bg-black/40"
      }`}
    >
      <div className="text-neutral-100 relative items-center text-lg font-semibold hover:font-blue-600 gap-4 flex hidden md:flex">
        <Link
          href="/"
          className="text-white hover:text-[#6c9c81] transition-all delay-100"
        >
          Home
        </Link>
        <Link
          href="/Flower-Gifts"
          className="text-white hover:text-[#6c9c81] transition-all delay-100"
        >
          Send Flowers & Gifts
        </Link>
        <PlanAhead />
        <ImmediateNeed />
        <Resources />
        <WhoWeAre />
      </div>
    </div>
  );
};

export default Header;

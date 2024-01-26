import DesktopView from "@/components/card/FlowerDesk";
import MobileView from "@/components/card/FlowerMobile";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Flower Gift",
  description: "Made by Armand",
};

const page = () => {
  return (
    <>
    <DesktopView />
    <MobileView />
    </>
  );
};

export default page;

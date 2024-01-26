import Homes from "@/components/card/Home";
import Options from "@/components/card/Options";
import Content from "@/components/shared/Content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Made by Armand",
};

export default function Home() {
  return (
    <>
      <Homes />
      <Content />
      <Options />
    </>
  );
}
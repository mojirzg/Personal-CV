import React from "react";
import { HomeInfo, NavMenu, Portfolio } from "@/components";
import Contact from "@/components/ui/contact/Contact";

export default function Home() {
  return (
    <>
      <NavMenu />
      <HomeInfo />
      <Portfolio />
      <Contact />
      <div className="py-10" />
    </>
  );
}

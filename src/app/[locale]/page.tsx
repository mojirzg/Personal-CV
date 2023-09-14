import React from "react";
import { HomeInfo, NavMenu } from "@/components";
import { Portfolio } from "@/components/portfolio";

export default function Home() {
  return (
    <>
      <NavMenu />
      <HomeInfo />
      <Portfolio />
    </>
  );
}

"use client";
import React from "react";
import styles from "./page.module.scss";
import { NavMenu } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavMenu />
    </main>
  );
}

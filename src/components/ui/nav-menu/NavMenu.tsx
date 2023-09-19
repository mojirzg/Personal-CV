"use client";
import React, { FunctionComponent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_MENU } from "@/consts";
import { useTranslations } from "next-intl";

interface Props {}

export const NavMenu: FunctionComponent<Props> = () => {
  const t = useTranslations();
  const [theme, setTheme] = useState<string>();

  useEffect(() => {
    if (!window) return;
    initTheme();
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.remove(
        theme === "dark" ? "light" : "dark"
      );
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  function initTheme() {
    const theme = localStorage.getItem("theme") || "light";
    setTheme(theme);
    document.documentElement.classList.remove(
      theme === "dark" ? "dark" : "light"
    );
    document.documentElement.classList.add(theme);
  }

  function changeTheme() {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  }

  return (
    <div
      className={
        "items-center md:w-fit fixed md:mx-auto left-0 right-0 bottom-4 md:bottom-16 rounded-lg border-4 border-solid border-border-menu bg-background-menu backdrop-blur-md gap-6 py-3 px-[16px] z-50 flex"
      }
    >
      {NAV_MENU.map((item) => {
        return (
          <Link key={item.name} href={item.link}>
            <div className={"no-underline gap-1.5 pt-1.5 pb-0 px-2"}>
              <p className="transition-all duration-[0.3s] ease-[ease] m-0 px-0 py-1 hover:border-b border-solid hover:border-b-content-primary border-b border-b-transparent">
                {t(item.name as keyof Messages)}
              </p>
            </div>
          </Link>
        );
      })}
      <i
        className={`${
          theme === "dark" ? "icon-moon" : "icon-sun"
        } text-content-primary text-2xl cursor-pointer transition-transform duration-[0.1s] ease-[ease] hover:transition-transform hover:duration-[0.1s] hover:ease-[ease] hover:scale-110`}
        onClick={changeTheme}
      />
    </div>
  );
};

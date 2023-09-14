"use client";
import React, { FunctionComponent, useEffect, useState } from "react";
import Styles from "./NavMenu.module.scss";
import { useTheme } from "@/components";
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
    <div className={Styles.base}>
      {NAV_MENU.map((item) => {
        return (
          <Link key={item.name} href={item.link}>
            <div className={Styles.navItem}>
              <p>{t(item.name as keyof Messages)}</p>
            </div>
          </Link>
        );
      })}
      <Image
        className={Styles.themeButton}
        width={24}
        height={24}
        alt="Theme Switch button"
        src={theme === "dark" ? "/svg/moon.svg" : "/svg/sun.svg"}
        onClick={changeTheme}
      />
    </div>
  );
};

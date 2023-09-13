"use client";
import React, { FunctionComponent } from "react";
import Styles from "./NavMenu.module.scss";
import { useTheme } from "@/components";
import Image from "next/image";
import { NAV_MENU } from "@/consts";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Props {}

export const NavMenu: FunctionComponent<Props> = () => {
  const t = useTranslations();
  const [theme, setTheme] = useTheme();
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
        src={theme === "DarkMode" ? "/svg/moon.svg" : "/svg/sun.svg"}
        onClick={setTheme}
      />
    </div>
  );
};

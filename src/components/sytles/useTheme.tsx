"use client";
import React, { useEffect, useState } from "react";

type ThemeType = "DarkMode" | "LightMode";

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType | null>(null);

  useEffect(() => {
    initTheme();
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
      document.documentElement.className = "";
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  function initTheme() {
    const theme = (localStorage.getItem("theme") || "LightMode") as ThemeType;
    setTheme(theme);
    document.documentElement.className = "";
    document.documentElement.classList.add(theme);
  }

  function changeTheme() {
    setTheme((theme) => (theme === "DarkMode" ? "LightMode" : "DarkMode"));
  }

  return [theme, changeTheme] as [string, () => void];
};

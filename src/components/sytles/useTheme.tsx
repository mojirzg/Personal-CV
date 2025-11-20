"use client";

import { useEffect, useState } from "react";

type ThemeType = "DarkMode" | "LightMode";

export const useTheme = () => {
  
  const [theme, setTheme] = useState<ThemeType>(() => {
  if (typeof window === "undefined") return "LightMode"; // fallback for SSR
  return (localStorage.getItem("theme") || "LightMode") as ThemeType;
});

  useEffect(() => {
  document.documentElement.className = "";
  document.documentElement.classList.add(theme);
}, [theme]);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
      document.documentElement.className = "";
      document.documentElement.classList.add(theme);
    }
  }, [theme]);



  function changeTheme() {
    setTheme((theme) => (theme === "DarkMode" ? "LightMode" : "DarkMode"));
  }

  return [theme, changeTheme] as [string, () => void];
};

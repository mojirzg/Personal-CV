"use client";
import React, { FunctionComponent, useEffect, useState } from "react";
import Styles from "./HomeInfo.module.scss";
import { useTranslations } from "next-intl";

interface Props {}

const TEXTS = [
  "Next.js",
  "React.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
];

export const HomeInfo: FunctionComponent<Props> = () => {
  const t = useTranslations();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={Styles.base}>
      <div className={Styles.greetings}>
        <p>{t("homeGreetings")}</p>
        <p className={Styles.name}>{t("NAME")}</p>
      </div>
      <p className={Styles.expertice}>{t("expertice")}</p>
      <div className={Styles.experienceContainer}>
        <p className={Styles.experience}>{t("iHaveExperienceIn")}</p>
        <div className={Styles.frameworksContainer}>
          <div className={Styles.frameworks}>
            <p className={`${Styles.typing}`}>{TEXTS[currentTextIndex]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

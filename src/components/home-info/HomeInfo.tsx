"use client";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import Styles from "./HomeInfo.module.scss";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    setTimeout(() => {
      interval = setInterval(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % TEXTS?.length);
      }, 3000);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.addEventListener("pointermove", followMouse);
    if (imageRef?.current?.style.display === "block") {
      document.addEventListener("pointermove", followMouse);
    }
    return () => {
      document.removeEventListener("pointermove", followMouse);
    };
  }, [imageRef]);

  function followMouse(e: MouseEvent) {
    if (imageRef && imageRef.current) {
      imageRef.current.style.left = e.x + 10 + "px";
      imageRef.current.style.top = e.y + 10 + "px";
    }
  }
  function handleShowImage() {
    // setShowImage(true);
  }

  function handleHideImage() {
    // setShowImage(false);
  }

  return (
    <div className={Styles.base}>
      <p
        className={Styles.greetings}
        onMouseEnter={handleShowImage}
        onMouseLeave={handleHideImage}
      >
        {t("homeGreetings")}
        <span id="name" className={Styles.myName}>
          {t("NAME")}
          <Image
            className={Styles.myImage}
            ref={imageRef}
            src={"/images/me.jpg"}
            alt={t("NAME")}
            width={320}
            height={320}
          />
        </span>
      </p>
      <p className={Styles.expertice}>{t("expertice")}</p>
      <div className={Styles.experienceContainer}>
        <p className={Styles.experience}>{t("iHaveExperienceIn")}</p>
        <div className={Styles.frameworksContainer}>
          <div className={Styles.frameworks}>
            <p className={Styles.typing}>{TEXTS[currentTextIndex]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

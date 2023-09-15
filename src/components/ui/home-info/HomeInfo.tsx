"use client";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
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

  return (
    <div
      className={
        "flex justify-center md:justify-start h-screen items-center flex-col gap-8 md:pt-[83px]"
      }
    >
      <p
        className={
          "text-content-secondary text-5xl md:text-8xl font-medium opacity-0 animate-[typing_3.5s_steps(40,end)_forwards] float-left z-[999999] w-fit overflow-hidden whitespace-nowrap  mx-auto m-0"
        }
      >
        {t("homeGreetings")}
        <span
          id="name"
          className={
            "group text-content-primary text-5xl md:text-8xl not-italic leading-[normal] font-bold"
          }
        >
          {" "}
          {t("NAME")}
          <Image
            className={"hidden group-hover:flex absolute"}
            ref={imageRef}
            src={"/images/me.jpg"}
            alt={t("NAME")}
            width={320}
            height={320}
          />
        </span>
      </p>
      <p
        className={
          "animation-delay-2 w-fit overflow-hidden whitespace-nowrap mx-auto m-0 text-content-secondary text-center text-2xl md:text-6xl not-italic leading-[normal] font-medium animate-[typing_3.5s_steps(40,end)_forwards] opacity-0"
        }
      >
        {t("expertice")}
      </p>
      <div
        className={
          "flex flex-col md:flex-row md:flex-row items-center gap-4 md:relative md:ml-[-190px] justify-start"
        }
      >
        <p
          className={
            "animation-delay-3_5 me-5 animation-duration-1_5  w-fit overflow-hidden whitespace-nowrap  md:mx-auto m-0 text-content-secondary text-2xl md:text-[52px] not-italic leading-[normal] opacity-0 font-medium animate-[typing_3.5s_steps(20,end)_forwards]"
          }
        >
          {t("iHaveExperienceIn")}
        </p>
        <div
          className={
            "animation-delay-5_5 text-content-secondary not-italic font-medium leading-[normal] rounded whitespace-nowrap overflow-hidden opacity-0 animate-[opacityChanger_0.3s_forwards] md:absolute p-1 left-full md:ms-4 bg-background-subtle"
          }
        >
          <div
            className={
              "overflow-hidden whitespace-nowrap animate-[typingFrameworks_3s_steps(10,end)_infinite,blink-caret_0.75s_step-end_infinite_backwards] border-r-2 border-solid"
            }
          >
            <p
              className={
                "w-fit overflow-hidden whitespace-nowrap tracking-[0.15em] mx-auto m-0 float-left text-content-primary text-center text-xl  text-[24spx] md:text-[52px] not-italic font-medium leading-[normal]"
              }
            >
              {TEXTS[currentTextIndex]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

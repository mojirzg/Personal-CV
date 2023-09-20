"use client";
import React, { FunctionComponent } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Styles from "./Portfolio.module.scss";

interface Props {}

const items = [
  {
    image: "/images/portfolio/zhin/logo.jpg",
    background: "/images/portfolio/zhin/home.jpg",
    name: "Zhin Tour",
    description: "Next.js Express.js",
    link: "https://zhintour.com",
  },
  {
    image: "/images/portfolio/kss/logo.jpg",
    background: "/images/portfolio/kss/home.jpg",
    name: "Kizeshe Sabze Shomal",
    description: "Next.js Express.js",
    link: "https://kssapp.ir",
  },
  {
    image: "/images/portfolio/almas/logo.jpg",
    background: "/images/portfolio/almas/home.jpg",
    name: "Almas Karimkhan",
    description: "Next.js",
    link: "https://almaskarimkhan.com",
  },
  {
    image: "/images/portfolio/chainwall/logo.jpg",
    background: "/images/portfolio/chainwall/home.jpg",
    name: "Chainwall",
    description: "Next.js Nest.js",
    link: "https://chainwall.io",
  },
];

export const Portfolio: FunctionComponent<Props> = () => {
  const t = useTranslations();
  return (
    <div
      id="portfolio"
      className="flex md:gap-44 px-4 md:px-[120px] md:pt-[56px] relative"
    >
      <p className="sticky items-center justify-center text-center portfolio-text md:top-7 md:flex">
        {t("portfolio")}
      </p>
      <div className="w-full gap-4 space-y-4 md:columns-2">
        {items.map((item, index) => (
          <div
            className="relative flex flex-col w-full overflow-hidden transition-all duration-100 rounded-md hover:scale-105 bg-background-card"
            key={index}
          >
            <Link href={item.link}>
              <div
                className={`${Styles.imageContainer} relative flex-1 w-full aspect-[16/9] bg-background-card`}
                key={index}
              >
                <Image
                  fill
                  src={item.background}
                  className={`${Styles.background}`}
                  alt=""
                />

                <Image
                  fill
                  src={item.image}
                  className={`${Styles.thumbnail} object-cover`}
                  alt=""
                />
              </div>
              <p className="px-4 pt-2 text-lg font-bold">{item.name}</p>
              <p className="px-4 py-0 pb-4 text-lg font-bold text-content-secondary">
                {item.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

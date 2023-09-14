"use client";
import React, { FunctionComponent } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const items = [
  {
    image: "/images/me.jpg",
    name: "name",
    description: "description",
    link: "/",
  },
  {
    image: "/images/me.jpg",
    name: "name",
    description: "description",
    link: "/",
  },
  {
    image: "/images/me.jpg",
    name: "name",
    description: "description",
    link: "/",
  },
  {
    image: "/images/me.jpg",
    name: "name",
    description: "description",
    link: "/",
  },
];

export const Portfolio: FunctionComponent<Props> = () => {
  const t = useTranslations();
  return (
    <div className="flex md:gap-44 px-4 md:px-[120px] md:pt-[56px] relative">
      <p className="sticky items-center justify-center text-center portfolio-text md:top-7 md:flex">
        {t("portfolio")}
      </p>
      <div className="w-full gap-6 space-y-6 md:columns-2">
        {items.map((item, index) => (
          <div
            className="relative flex flex-col w-full overflow-hidden transition-all duration-100 rounded-md hover:scale-105 bg-background-card"
            key={index}
          >
            <Link href={item.link}>
              <div
                className="relative flex-1 w-full aspect-[2/1] bg-background-card"
                key={index}
              >
                <Image fill src={item.image} objectFit="cover" alt="" />
              </div>
              <p className="px-4 pt-2 text-lg font-bold">{item.name}</p>
              <p className="px-4 py-0 pb-4 text-lg font-bold text-content-secondary">
                {item.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

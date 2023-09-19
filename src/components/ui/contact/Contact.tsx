"use client";
import React, { FunctionComponent } from "react";
import { useTranslations } from "next-intl";
import { Button, Input, Textarya } from "@/components";
import { CONTACT_INFO } from "@/consts";
import Link from "next/link";

interface Props {}

export const Contact: FunctionComponent<Props> = () => {
  const t = useTranslations();

  const LineDevider = ({ right = false }: { right?: boolean }) => {
    return (
      <div
        className={`md:h-[100%] h-[1px] md:w-[1px] w-[100%] absolute  r-0 line ${
          right ? "top-0 right-auto md:right-0 " : "bottom-0 md:left-0"
        }`}
      />
    );
  };

  return (
    <div className="flex gap-y-10  relative flex-col md:flex-row pt-[32px] md:pt-[93px] pb-[132px] md:pb-[93px] md:px-[120px] columns-1 md:columns-3 px-4 h-fit">
      <div className="flex flex-col flex-1 gap-4 md:pe-10">
        <p className="text-5xl md:text6xl text-content-secondary">
          {t("contact")}
        </p>
        <p className="text-xl md:text3xl text-content-secondary">
          {t("contactDetail")}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 gap-3 py-10 md:py-0  px-8 md:px-[120px] relative">
        <LineDevider />
        <Input placeholder={t("yourName")} required />
        <Input placeholder={t("yourEmail")} required />
        <Textarya placeholder={t("yourMessage")} />
        <Button className="self-end mt-6">{t("send")}</Button>
        <LineDevider right />
      </div>
      <div className="flex flex-col items-center justify-start flex-1 gap-4 md:ps-10 [&_a]:w-[160px] [&>p]:w-[160px]">
        <p className="text-base uppercase text-content-secondary ">
          {t("contactInfo")}
        </p>
        <Link
          href={`mailto:${CONTACT_INFO.email}`}
          className="text-lg font-bold text-content-primary "
        >
          {CONTACT_INFO.email}
        </Link>
        <Link
          href={`tell:${CONTACT_INFO.phone}`}
          className="text-lg font-bold text-content-primary"
        >
          {CONTACT_INFO.phone}
        </Link>
        <div className="flex flex-1 gap-[10px] justify-start items-center">
          {/* <p>T</p> */}
          {/* <p>L</p> */}
        </div>
        <p className="text-base text-content-secondary mt-[55px] uppercase ">
          {t("socials")}
        </p>
        <Link
          href={CONTACT_INFO.linkedIn}
          className="text-lg font-bold text-content-primary"
        >
          {t("linkedIn")}
        </Link>
        <Link
          href={CONTACT_INFO.github}
          className="text-lg font-bold text-content-primary"
        >
          {t("github")}
        </Link>
        <Link
          href={CONTACT_INFO.gitlab}
          className="text-lg font-bold text-content-primary"
        >
          {t("gitlab")}
        </Link>
        <Link
          href={CONTACT_INFO.instagram}
          className="text-lg font-bold text-content-primary "
        >
          {t("instagram")}
        </Link>
      </div>
    </div>
  );
};

export default Contact;

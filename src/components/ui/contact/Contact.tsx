"use client";
import React, { FunctionComponent } from "react";
import { useTranslations } from "next-intl";
import { Button, Input } from "@/components";

interface Props {}

export const Contact: FunctionComponent<Props> = () => {
  const t = useTranslations();
  return (
    <div className="pt-[32px] md:pt-[93px] pb-[132px] md:pb-[93px] columns-1 md:columns-3 px-4">
      <div className="flex flex-col gap-4">
        <p className="text-5xl md:text6xl text-content-secondary">
          {t("contact")}
        </p>
        <p className="text-xl md:text3xl text-content-secondary">
          {t("contactDetail")}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <Input />
        <Input />
        <Input />
        <Button />
      </div>
    </div>
  );
};

export default Contact;

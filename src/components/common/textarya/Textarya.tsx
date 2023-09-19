"use client";
import { INPUT_DEFAULT_STYLE } from "@/components";
import React, { FunctionComponent, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLTextAreaElement> {}

export const Textarya: FunctionComponent<Props> = ({ className, ...props }) => {
  return (
    <textarea
      className={`${INPUT_DEFAULT_STYLE} ${className} min-h-[120px]`}
      {...props}
    />
  );
};

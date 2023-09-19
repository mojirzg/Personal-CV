"use client";
import { HtmlProps } from "next/dist/shared/lib/html-context";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
} from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const BUTTON_DEFAULT_STYLE =
  "rounded-lg p-3 border min-w-[100px] border-border-button text-content-primary";

export const Button: FunctionComponent<Props> = ({ className, ...props }) => {
  return (
    <button className={`${BUTTON_DEFAULT_STYLE} ${className}`} {...props} />
  );
};

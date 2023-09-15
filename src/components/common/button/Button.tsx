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

export const Button: FunctionComponent<Props> = ({ ...props }) => {
  return <button {...props} />;
};

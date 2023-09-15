"use client";
import React, { FunctionComponent, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLInputElement> {}

export const Input: FunctionComponent<Props> = ({ ...props }) => {
  return <input {...props} />;
};

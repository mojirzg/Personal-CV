"use client";
import React, { FunctionComponent } from "react";
// import Styles from "./PageContainer.module.scss";

interface Props {
  children: React.ReactNode | React.ReactNode[] | null;
}

export const PageContainer: FunctionComponent<Props> = ({ children }) => {
  return <div>{children}</div>;
};

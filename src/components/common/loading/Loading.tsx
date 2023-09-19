"use client";
import { useEffect, useRef } from "react";
import Styles from "./Loading.module.scss";

interface LottieProps {
  show?: boolean;
}

export const Loading = ({ show }: LottieProps) => {
  if (!show) return null;
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

"use client";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
} from "react";
// eslint-disable-next-line import/no-cycle
import { Loading } from "@/components";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

interface Props {
  loading?: boolean;
}

const BUTTON_DEFAULT_STYLE =
  "rounded-lg p-3 relative border min-w-[100px] border-border-button text-content-primary";

export const Button: FunctionComponent<ButtonProps & Props> = ({
  className,
  children,
  loading,
  ...props
}) => {
  return (
    <button className={`${BUTTON_DEFAULT_STYLE} ${className}`} {...props}>
      <Loading show={loading} />
      {children}
    </button>
  );
};

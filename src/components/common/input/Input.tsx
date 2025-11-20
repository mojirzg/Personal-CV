'use client';
import React, { FunctionComponent, HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {}

const INPUT_DEFAULT_STYLE =
  'w-full p-4 text-content-primary rounded-lg bg-background-input placeholder:font-bold placeholder:text-content-primary';

export const Input: FunctionComponent<Props> = ({ className, ...props }) => {
  return <input className={`${INPUT_DEFAULT_STYLE} ${className}`} {...props} />;
};

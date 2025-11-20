'use client';
import React, { FunctionComponent, HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLTextAreaElement> {}
const TEXTARYA_DEFAULT_STYLE =
  'w-full resize-none text-content-primary p-4 rounded-lg bg-background-input placeholder:font-bold placeholder:text-content-primary';

export const Textarya: FunctionComponent<Props> = ({ className, ...props }) => {
  return (
    <textarea
      className={`${TEXTARYA_DEFAULT_STYLE} ${className} min-h-[120px]`}
      {...props}
    />
  );
};

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';

interface IWhenProps {
  children: React.ReactNode | any;
  expr: any | (() => boolean);
}

export const When = ({ children, expr }: IWhenProps) => {
  if (typeof expr === 'function' && !expr()) return <></>;
  if (!expr) return <></>;

  return typeof children === 'function' ? children() : children;
};

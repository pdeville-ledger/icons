import * as React from 'react';
import { IconProps } from './types';

export const ETH = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={forwardedRef}
    >
      <rect width="56" height="56" rx="28" fill="#0EBDCD" />
      <path d="M36.5042 27.3192L27.9989 14.3887L19.4932 27.3192L27.9989 32.2574L36.5042 27.3192Z" fill="#fff" />
      <path d="M27.9989 41.6108L36.5099 29.8358L27.9989 34.7732L19.4932 29.8358L27.9989 41.6108Z" fill="#fff" />
    </svg>
  );
});

export default ETH;

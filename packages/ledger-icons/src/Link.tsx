import * as React from 'react';
import { IconProps } from './types';

export const LINK = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <rect width="56" height="56" rx="28" fill="#2A5ADA" />
      <path
        d="M28.0001 14.3889L25.5515 15.8249L18.8807 19.7585L16.4307 21.1945V34.8056L18.8793 36.2416L25.6127 40.1752L28.0614 41.6111L30.51 40.1752L37.1209 36.2416L39.5696 34.8056V21.1945L37.1209 19.7585L30.4488 15.8249L28.0001 14.3889ZM21.3279 31.9336V24.0664L28.0001 20.1328L34.6723 24.0664V31.9336L28.0001 35.8673L21.3279 31.9336Z"
        fill="#fff"
      />
    </svg>
  );
});

export default LINK;

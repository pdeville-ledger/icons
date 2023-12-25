import * as React from 'react';
import { IconProps } from './types';

export const Lock = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M5.33325 6.66667V4.66667C5.33325 3.19333 6.52659 2 7.99992 2C9.46659 2 10.6666 3.19333 10.6666 4.66667V6.66667M11.3333 14H4.66659C3.92659 14 3.33325 13.4 3.33325 12.6667V8C3.33325 7.26 3.92659 6.66667 4.66659 6.66667H11.3333C12.0666 6.66667 12.6666 7.26 12.6666 8V12.6667C12.6666 13.4 12.0666 14 11.3333 14Z"
        stroke="#fff"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});

export default Lock;

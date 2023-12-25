import * as React from 'react';
import { IconProps } from './types';

export const MobileArrow = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
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
          d="M6.33337 2V3.33333C6.33337 3.51333 6.48671 3.66667 6.66671 3.66667H9.33337C9.52004 3.66667 9.66671 3.51333 9.66671 3.33333V2M4.00004 11.3333V12.6667C4.00004 13.4 4.60004 14 5.33337 14H10.6667C11.4067 14 12 13.4 12 12.6667V3.33333C12 2.59333 11.4067 2 10.6667 2H5.33337C4.60004 2 4.00004 2.59333 4.00004 3.33333V4.66667M1.33337 8H4.66671M4.66671 8L3.33337 6.66667M4.66671 8L3.33337 9.33333"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default MobileArrow;

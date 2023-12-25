import * as React from 'react';
import { IconProps } from './types';

export const Legal = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6 14H3.33333C2.59333 14 2 13.4 2 12.6667V3.33333C2 2.59333 2.59333 2 3.33333 2H11.3333C12.0667 2 12.6667 2.59333 12.6667 3.33333V6M4.66667 5.33333H8.66667M4.66667 8H6M8.66667 14H14M9.33333 14V10.9467M11.3333 14V10.9467M13.3333 14V10.9467M8.66667 10.9467H14V9.75333L11.3333 8.66L8.66667 9.74667V10.9467Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default Legal;

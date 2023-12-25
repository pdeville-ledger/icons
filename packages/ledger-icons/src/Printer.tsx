import * as React from 'react';
import { IconProps } from './types';

export const Printer = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.66667 5.33333V2.66667C4.66667 2.29867 4.96 2 5.33333 2H10.6667C11.0333 2 11.3333 2.29333 11.3333 2.66667V5.33333M4.66667 11.3333H3.33333C2.59667 11.3333 2 10.7333 2 10V6.66667C2 5.92667 2.59667 5.33333 3.33333 5.33333H12.6667C13.4 5.33333 14 5.92667 14 6.66667V10C14 10.7333 13.4 11.3333 12.6667 11.3333H11.3333M4.66667 7.33333H5.33333M4.66667 9.2H11.3333V13.3333C11.3333 13.7 11.0333 14 10.6667 14H5.33333C4.96 14 4.66667 13.7 4.66667 13.3333V9.2Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default Printer;

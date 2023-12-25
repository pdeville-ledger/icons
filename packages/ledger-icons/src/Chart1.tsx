import * as React from 'react';
import { IconProps } from './types';

export const Chart1 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.66667 11.6667V8.33333M6.88667 11.6667V4.33333M9.10667 11.6667V7.6M11.3333 11.6667V5M3.33333 2H12.6667C13.4 2 14 2.59667 14 3.33333V12.6667C14 13.4 13.4 14 12.6667 14H3.33333C2.59667 14 2 13.4 2 12.6667V3.33333C2 2.59333 2.59333 2 3.33333 2Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default Chart1;

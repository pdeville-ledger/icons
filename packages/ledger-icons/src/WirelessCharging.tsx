import * as React from 'react';
import { IconProps } from './types';

export const WirelessCharging = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 11.3333V12.6667C9 13.0333 8.7 13.3333 8.33333 13.3333H7.66667C7.29333 13.3333 7 13.0333 7 12.6667V11.3333M8 14.6667V13.3333M7.83467 5L6.99467 6.66667H8.99467L8.15467 8.33333M3.33333 2H12.6667C13.403 2 14 2.59695 14 3.33333V10C14 10.7364 13.403 11.3333 12.6667 11.3333H3.33333C2.59695 11.3333 2 10.7364 2 10V3.33333C2 2.59695 2.59695 2 3.33333 2Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default WirelessCharging;

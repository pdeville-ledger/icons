import * as React from 'react';
import { IconProps } from './types';

export const Chart3Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9 7.67333V10.6667M7 5.33333V10.6667M5 8.84V10.6667M11 6.5V10.6667M5.33333 2H10.6667C12.5076 2 14 3.49238 14 5.33333V10.6667C14 12.5076 12.5076 14 10.6667 14H5.33333C3.49238 14 2 12.5076 2 10.6667V5.33333C2 3.49238 3.49238 2 5.33333 2Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default Chart3Icon;

import * as React from 'react';
import { IconProps } from './types';

export const ChartPie = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 4C4.23333 4 2 6.23333 2 9C2 11.76 4.23333 14 7 14C9.76 14 12 11.76 12 9H7V4Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14 6.66667C14 4.08667 11.9067 2 9.33333 2V6.66667H14Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default ChartPie;

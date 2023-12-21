import * as React from 'react';
import { IconProps } from './types';

export const RefreshIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.328 8.02135C13.3226 9.37935 12.8073 10.7354 11.7713 11.7714C9.68864 13.854 6.31131 13.854 4.22864 11.7714C3.85798 11.4007 3.55664 10.988 3.31798 10.5507M2.66931 7.91335C2.69064 6.57735 3.20931 5.24802 4.22864 4.22869C6.31131 2.14602 9.68864 2.14602 11.7713 4.22869C12.142 4.59935 12.4433 5.01202 12.682 5.44935M10.6353 5.45002H12.992V3.09269M5.36464 10.55H3.00798V12.9074"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default RefreshIcon;

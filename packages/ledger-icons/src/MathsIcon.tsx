import * as React from 'react';
import { IconProps } from './types';

export const MathsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.86674 12H11.8667M9.86674 10H11.8667M2.00007 8H14.0001M10.0001 5H12.0001M4.00008 5H6.00008M5.00008 6V4M4.29341 10.2933L5.70674 11.7067M4.29341 11.7067L5.70674 10.2933M8.00008 2V14M14.0001 12.4347C14.0001 13.2947 13.2934 13.9947 12.4334 13.9947H3.56008C2.69341 13.9947 1.99341 13.288 1.99341 12.428V3.55333C1.99341 2.68666 2.69341 1.98666 3.55874 1.98666H12.4254C13.2854 1.98666 13.9854 2.68666 13.9854 3.552V12.4187L14.0001 12.4347Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default MathsIcon;

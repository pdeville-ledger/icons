import * as React from 'react';
import { IconProps } from './types';

export const Experiment2Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.6666 6.82001L9.17995 2.33334M12.9193 6.06668L5.93929 13.04C5.11262 13.86 3.77262 13.86 2.94595 13.04C2.93929 13.0333 2.93929 13.0333 2.93929 13.0333C2.11262 12.2067 2.11195 10.8667 2.93195 10.04C2.93195 10.0333 2.93195 10.0333 2.93195 10.0333L9.90529 3.05334M4.67329 8.33334H10.6533"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default Experiment2Icon;

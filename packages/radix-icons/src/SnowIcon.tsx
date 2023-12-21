import * as React from 'react';
import { IconProps } from './types';

export const SnowIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.99996 2V14M9.44529 2.94733L7.99863 4.38733L6.55196 2.94067M13.3333 4.92L2.66663 11.08M13.0933 6.72533L11.1133 6.192L11.64 4.212M2.90196 9.27333L4.87529 9.8L4.34196 11.7733M2.66663 4.92L13.3333 11.08M2.90196 6.72533L4.87529 6.192L4.34196 4.212M13.0933 9.27333L11.1133 9.8L11.64 11.7733M6.55463 13.0467L7.99463 11.6L9.43463 13.04"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default SnowIcon;

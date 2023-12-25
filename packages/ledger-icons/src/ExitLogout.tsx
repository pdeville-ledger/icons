import * as React from 'react';
import { IconProps } from './types';

export const ExitLogout = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.33333 8H14M14 8L11.6667 10.3333M14 8L11.6667 5.66667M8 2H4C2.89333 2 2 2.89333 2 4V12C2 13.1 2.89333 14 4 14H8"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default ExitLogout;

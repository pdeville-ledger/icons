import * as React from 'react';
import { IconProps } from './types';

export const Switch = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11 11C9.34 11 8 9.65333 8 8C8 6.34 9.34 5 11 5M11 11C12.6533 11 14 9.65333 14 8C14 6.34 12.6533 5 11 5M11 11H5C3.34 11 2 9.65333 2 8C2 6.34 3.34 5 5 5H11"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default Switch;

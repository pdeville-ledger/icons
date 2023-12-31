import * as React from 'react';
import { IconProps } from './types';

export const Heart = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.4667 2.66666C12.58 2.66666 14 4.65332 14 6.50666C14 10.26 8.10667 13.3333 8 13.3333C7.89333 13.3333 2 10.26 2 6.50666C2 4.65332 3.42 2.66666 5.53333 2.66666C6.74667 2.66666 7.54 3.27332 8 3.80666C8.46 3.27332 9.25333 2.66666 10.4667 2.66666Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default Heart;

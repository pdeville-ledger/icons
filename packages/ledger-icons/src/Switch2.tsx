import * as React from 'react';
import { IconProps } from './types';

export const Switch2 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.6067 7.05335C12.1267 7.57335 12.1267 8.41335 11.6067 8.93335C11.08 9.45335 10.24 9.45335 9.72 8.93335C9.19333 8.40669 9.19333 7.56669 9.72 7.04669C10.24 6.52002 11.08 6.52002 11.6 7.04669M5.33333 4.66669H10.6667C12.5067 4.66669 14 6.15335 14 8.00002C14 9.84002 12.5067 11.3334 10.6667 11.3334H5.33333C3.49267 11.3334 2 9.84002 2 8.00002C2 6.15335 3.49267 4.66669 5.33333 4.66669Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default Switch2;

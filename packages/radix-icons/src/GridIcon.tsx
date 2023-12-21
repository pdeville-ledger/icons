import * as React from 'react';
import { IconProps } from './types';

export const GridIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          clip-rule="evenodd"
          d="M5.16667 6.5H3.33333C2.59667 6.5 2 5.9 2 5.16667V3.33333C2 2.59667 2.59667 2 3.33333 2H5.16667C5.9 2 6.5 2.59667 6.5 3.33333V5.16667C6.5 5.9 5.9 6.5 5.16667 6.5zM12.6667 6.5H10.8333C10.0933 6.5 9.5 5.9 9.5 5.16667V3.33333C9.5 2.59667 10.0933 2 10.8333 2H12.6667C13.4 2 14 2.59667 14 3.33333V5.16667C14 5.9 13.4 6.5 12.6667 6.5zM5.16667 14H3.33333C2.59667 14 2 13.4 2 12.6667V10.8333C2 10.0933 2.59667 9.5 3.33333 9.5H5.16667C5.9 9.5 6.5 10.0933 6.5 10.8333V12.6667C6.5 13.4 5.9 14 5.16667 14zM12.6667 14H10.8333C10.0933 14 9.5 13.4 9.5 12.6667V10.8333C9.5 10.0933 10.0933 9.5 10.8333 9.5H12.6667C13.4 9.5 14 10.0933 14 10.8333V12.6667C14 13.4 13.4 14 12.6667 14z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default GridIcon;

import * as React from 'react';
import { IconProps } from './types';

export const DocumentCodeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.66667 6L5.66667 5L4.66667 4M4 11.3333V10M13 14H3.33333C2.59333 14 2 13.4 2 12.6667V12C2 11.6267 2.29333 11.3333 2.66667 11.3333H11.3333C11.7 11.3333 12 11.6267 12 12V13C12 13.5467 12.4467 14 13 14ZM13 14C13.5467 14 14 13.5467 14 13V3.33333C14 2.59333 13.4 2 12.6667 2H10M3.66667 2H6.33333C7.25381 2 8 2.74619 8 3.66667V6.33333C8 7.25381 7.25381 8 6.33333 8H3.66667C2.74619 8 2 7.25381 2 6.33333V3.66667C2 2.74619 2.74619 2 3.66667 2Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default DocumentCodeIcon;

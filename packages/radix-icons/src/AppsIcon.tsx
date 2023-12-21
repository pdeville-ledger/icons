import * as React from 'react';
import { IconProps } from './types';

export const AppsIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.6667 10V13.3333M13.3333 11.6667H10M5.33333 6.66667H3.33333C2.59667 6.66667 2 6.06667 2 5.33333V3.33333C2 2.59667 2.59667 2 3.33333 2H5.33333C6.06667 2 6.66667 2.59667 6.66667 3.33333V5.33333C6.66667 6.06667 6.06667 6.66667 5.33333 6.66667ZM12.6667 6.66667H10.6667C9.92667 6.66667 9.33333 6.06667 9.33333 5.33333V3.33333C9.33333 2.59667 9.92667 2 10.6667 2H12.6667C13.4 2 14 2.59667 14 3.33333V5.33333C14 6.06667 13.4 6.66667 12.6667 6.66667ZM5.33333 14H3.33333C2.59667 14 2 13.4 2 12.6667V10.6667C2 9.92667 2.59667 9.33333 3.33333 9.33333H5.33333C6.06667 9.33333 6.66667 9.92667 6.66667 10.6667V12.6667C6.66667 13.4 6.06667 14 5.33333 14Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default AppsIcon;

import * as React from 'react';
import { IconProps } from './types';

export const MobileIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.33333 2V3.2C6.31333 3.4 6.46 3.57333 6.66667 3.6H9.33333C9.53333 3.57333 9.67933 3.4 9.666 3.2V2M6.66667 12H9.33333M10.6667 14H5.33333C4.59333 14 4 13.4 4 12.6667V3.33333C4 2.59333 4.59333 2 5.33333 2H10.6667C11.4 2 12 2.59333 12 3.33333V12.6667C12 13.4 11.4 14 10.6667 14Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default MobileIcon;

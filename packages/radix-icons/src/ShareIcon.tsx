import * as React from 'react';
import { IconProps } from './types';

export const ShareIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.33341 6.66667H4.00008C3.26341 6.66667 2.66675 7.26333 2.66675 8V12.6667C2.66675 13.4033 3.26341 14 4.00008 14H12.0001C12.7367 14 13.3334 13.4033 13.3334 12.6667V8C13.3334 7.26333 12.7367 6.66667 12.0001 6.66667H10.6667M8.00008 2V9.33333M8.00008 2L6.00075 4M8.00008 2L10.0001 4"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default ShareIcon;

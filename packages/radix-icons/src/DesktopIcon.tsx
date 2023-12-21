import * as React from 'react';
import { IconProps } from './types';

export const DesktopIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.33333 11.3333L9.66667 14M6.66667 11.3333L6.33333 14M4.8 14H11.2M14 9H2M12.6667 11.3333H3.33333C2.59667 11.3333 2 10.7333 2 10V3.33333C2 2.59667 2.59667 2 3.33333 2H12.6667C13.4 2 14 2.59667 14 3.33333V10C14 10.7333 13.4 11.3333 12.6667 11.3333Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default DesktopIcon;

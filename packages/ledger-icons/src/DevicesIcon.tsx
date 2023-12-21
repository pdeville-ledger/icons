import * as React from 'react';
import { IconProps } from './types';

export const DevicesIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.66667 14H3.33333C2.59333 14 2 13.4 2 12.6667V3.33333C2 2.59333 2.59333 2 3.33333 2H10C10.7333 2 11.3333 2.59333 11.3333 3.33333V4.66667M10.6667 12.3267H12M12.8 14H9.86667C9.2 14 8.66667 13.46 8.66667 12.8V7.86667C8.66667 7.2 9.2 6.66667 9.86667 6.66667H12.8C13.46 6.66667 14 7.2 14 7.86667V12.8C14 13.46 13.46 14 12.8 14Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default DevicesIcon;

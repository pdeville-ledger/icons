import * as React from 'react';
import { IconProps } from './types';

export const SpeedFastIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.94 7.72665L12.3333 4.33331M13.4533 6.20665C14.5867 8.68665 13.8933 11.62 11.76 13.3266M10.4533 3.20665C9.68 2.84665 8.84 2.66665 7.99333 2.65998L7.99267 2.65931C4.67934 2.65265 1.99267 5.33931 1.986 8.65265C1.97934 10.466 2.806 12.1793 4.21267 13.3193M8 7.32665C7.64638 7.32665 7.30724 7.46712 7.05719 7.71717C6.80714 7.96722 6.66667 8.30636 6.66667 8.65998C6.66667 9.0136 6.80714 9.35274 7.05719 9.60279C7.30724 9.85284 7.64638 9.99331 8 9.99331C8.35362 9.99331 8.69276 9.85284 8.94281 9.60279C9.19286 9.35274 9.33333 9.0136 9.33333 8.65998C9.33333 8.30636 9.19286 7.96722 8.94281 7.71717C8.69276 7.46712 8.35362 7.32665 8 7.32665Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default SpeedFastIcon;

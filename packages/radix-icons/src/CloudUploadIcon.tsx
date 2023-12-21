import * as React from 'react';
import { IconProps } from './types';

export const CloudUploadIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.93333 11.3333H4.65999C2.81333 11.3333 1.32666 9.84 1.32666 8C1.32666 6.33333 2.55933 4.92666 4.20599 4.70666V4.7C4.75266 3.07333 6.27266 1.98666 7.98599 1.98666C10.1927 1.98666 11.986 3.77333 11.986 5.98666C13.4527 5.98666 14.6527 7.18 14.6527 8.65333C14.6527 10.12 13.4527 11.32 11.986 11.32H11.046M9.33333 12L7.99999 10.6667M7.99999 10.6667L6.66666 12M7.99999 10.6667V14"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default CloudUploadIcon;

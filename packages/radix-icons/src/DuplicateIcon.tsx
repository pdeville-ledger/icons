import * as React from 'react';
import { IconProps } from './types';

export const DuplicateIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 4V3.33333C10 2.6 9.4 2 8.66667 2H3.33333C2.59333 2 2 2.6 2 3.33333V8.66667C2 9.40667 2.59333 10 3.33333 10H4M10 8.33333V11.6667M8.33333 10H11.6667M6 7.33333V12.6667C6 13.403 6.59695 14 7.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V7.33333C14 6.59695 13.403 6 12.6667 6H7.33333C6.59695 6 6 6.59695 6 7.33333Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default DuplicateIcon;

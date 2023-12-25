import * as React from 'react';
import { IconProps } from './types';

export const Tablet = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.99925 11.9167C7.95258 11.9167 7.91592 11.95 7.91259 12C7.91259 12.04 7.94592 12.0833 7.99592 12.0833C8.03592 12.0833 8.07925 12.0433 8.07925 12C8.07925 11.9533 8.03925 11.9167 7.99259 11.9167M12.6666 12.5V3.5C12.6666 2.66667 11.9933 2 11.1666 2H4.83325C3.99992 2 3.33325 2.66667 3.33325 3.5V12.5C3.33325 13.3267 3.99992 14 4.83325 14H11.1666C11.9933 14 12.6666 13.3267 12.6666 12.5Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default Tablet;

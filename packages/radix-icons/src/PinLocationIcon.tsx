import * as React from 'react';
import { IconProps } from './types';

export const PinLocationIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.99992 8.66667C6.89525 8.66667 5.99992 7.77133 5.99992 6.66667C5.99992 5.562 6.89525 4.66667 7.99992 4.66667C9.10459 4.66667 9.99992 5.562 9.99992 6.66667C9.99992 7.77133 9.10459 8.66667 7.99992 8.66667Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.99992 14C7.99992 14 3.33325 10.1667 3.33325 6.66667C3.33325 4.08667 5.41992 2 7.99992 2C10.5733 2 12.6666 4.08667 12.6666 6.66667C12.6666 10.1667 7.99992 14 7.99992 14Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default PinLocationIcon;

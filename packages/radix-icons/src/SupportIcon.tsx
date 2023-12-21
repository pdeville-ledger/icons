import * as React from 'react';
import { IconProps } from './types';

export const SupportIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.3333 6.66667V6.33333C12.3333 3.94 10.3933 2 8 2C5.60667 2 3.66667 3.94 3.66667 6.33333V6.66667M9.25 13.3333C9.25 12.8733 8.87667 12.5 8.41667 12.5H7.58333C7.12333 12.5 6.75 12.8733 6.75 13.3333C6.75 13.7933 7.12333 14.1667 7.58333 14.1667H8.41667C8.87667 14.1667 9.25 13.7933 9.25 13.3333ZM9.25 13.3333L10.6633 13.3333C11.3967 13.3333 11.9967 12.7333 11.9967 12V11.3333M12.6667 11.3333H12C11.6267 11.3333 11.3333 11.0333 11.3333 10.6667V7.33333C11.3333 6.96 11.6267 6.66667 12 6.66667H12.6667C13.4 6.66667 14 7.26 14 8V10C14 10.7333 13.4 11.3333 12.6667 11.3333ZM4 11.3333H3.33333C2.59667 11.3333 2 10.7333 2 10V8C2 7.26 2.59667 6.66667 3.33333 6.66667H4C4.36667 6.66667 4.66667 6.96 4.66667 7.33333V10.6667C4.66667 11.0333 4.36667 11.3333 4 11.3333Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default SupportIcon;

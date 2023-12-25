import * as React from 'react';
import { IconProps } from './types';

export const ComputerMobile = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.6666 7.33332V3.99999C12.6666 3.25999 12.0666 2.66666 11.3333 2.66666H2.66659C1.92659 2.66666 1.33325 3.25999 1.33325 3.99999V9.33332C1.33325 10.0667 1.92659 10.6667 2.66659 10.6667H10.6666M8.33325 13.3333V10.6667M5.66659 10.6667V13.3333M4.83325 13.3333H9.16659M13.6666 13.3333H11.6666C11.1133 13.3333 10.6666 12.88 10.6666 12.3333V8.33332C10.6666 7.77999 11.1133 7.33332 11.6666 7.33332H13.6666C14.2133 7.33332 14.6666 7.77999 14.6666 8.33332V12.3333C14.6666 12.88 14.2133 13.3333 13.6666 13.3333Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default ComputerMobile;

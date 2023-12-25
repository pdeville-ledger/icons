import * as React from 'react';
import { IconProps } from './types';

export const BookOpen = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.6666 3.33333H13.3333C14.0666 3.33333 14.6666 3.92667 14.6666 4.66667V12.6667C14.6666 13.4 14.0666 14 13.3333 14H2.66659C1.92992 14 1.33325 13.4 1.33325 12.6667V4.66667C1.33325 3.92667 1.92992 3.33333 2.66659 3.33333H3.33325M7.99992 4C7.99992 2.89533 7.10459 2 5.99992 2H3.99992C3.62659 2 3.33325 2.29333 3.33325 2.66667V11.3333C3.33325 11.7 3.62659 12 3.99992 12H5.99992C7.10459 12 7.99992 12.8953 7.99992 14M7.99992 4C7.99992 2.89533 8.89525 2 9.99992 2H11.9999C12.3666 2 12.6666 2.29867 12.6666 2.66667V11.3333C12.6666 11.7 12.3666 12 11.9999 12H9.99992C8.89525 12 7.99992 12.8953 7.99992 14M7.99992 4V14"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default BookOpen;

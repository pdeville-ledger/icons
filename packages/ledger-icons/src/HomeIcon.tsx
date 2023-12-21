import * as React from 'react';
import { IconProps } from './types';

export const HomeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.66659 5.73333V14H13.3333V5.73333M1.33325 6.66667L7.99992 2L14.6666 6.66667M9.99992 14V10C9.99992 9.26 9.39992 8.66667 8.66659 8.66667H7.33325C6.59325 8.66667 5.99992 9.26 5.99992 10V14"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default HomeIcon;

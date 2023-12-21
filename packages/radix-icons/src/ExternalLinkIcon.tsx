import * as React from 'react';
import { IconProps } from './types';

export const ExternalLinkIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 8L13 3M13 3V6.66667M13 3H9.33333M6 3H4.33333C3.59667 3 3 3.59667 3 4.33333V11.6667C3 12.4 3.59667 13 4.33333 13H11.6667C12.4 13 13 12.4 13 11.6667V10"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default ExternalLinkIcon;

import * as React from 'react';
import { IconProps } from './types';

export const GiftIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 14V5.33334M10.464 4.40667C9.744 5.15334 8.61067 5.332 8.064 5.332M8.06 5.33334C8.06 5.33334 7.72667 3.25334 8.54 2.41334M10.46 4.40667C10.9867 3.85334 10.9867 2.96 10.46 2.40667C9.92667 1.85334 9.06667 1.85334 8.54333 2.40667M7.92667 5.332C7.38 5.332 6.24667 5.15334 5.53333 4.40667C5 3.85334 5 2.96 5.53333 2.40667C6.06 1.85334 6.92 1.85334 7.45 2.40667M7.934 5.33334C7.934 5.33334 8.26067 3.25334 7.44733 2.41334M12.6667 8V13.3333C12.6667 13.7 12.3667 14 12 14H4C3.62667 14 3.33333 13.7 3.33333 13.3333V8M13.3333 5.33334H2.66667C2.29867 5.33334 2 5.62667 2 6V7.33334C2 7.7 2.29333 8 2.66667 8H13.3333C13.7 8 14 7.7 14 7.33334V6C14 5.62667 13.7 5.33334 13.3333 5.33334Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default GiftIcon;

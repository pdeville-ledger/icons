import * as React from 'react';
import { IconProps } from './types';

export const CoinAlert = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.4733 8.80668C13.8 8.16001 13.9933 7.43335 13.9933 6.66001C13.9933 4.08001 11.9 1.99335 9.32667 1.99335C8.55333 1.99335 7.82 2.18001 7.18 2.51735M6.66733 9.16001V7.46001M6.666 11.0333C6.61933 11.0333 6.57933 11.0667 6.57933 11.1133C6.57933 11.1533 6.61267 11.1933 6.65933 11.1933C6.69933 11.1933 6.73933 11.1533 6.73933 11.1067C6.73933 11.06 6.69933 11.02 6.65267 11.02M6.66667 14C4.08867 14 2 11.9067 2 9.33335C2 6.75335 4.08867 4.66668 6.66667 4.66668C9.24333 4.66668 11.3333 6.75668 11.3333 9.33335C11.3333 11.9067 9.24 14 6.66667 14Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default CoinAlert;

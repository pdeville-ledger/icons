import * as React from 'react';
import { IconProps } from './types';

export const ShieldLock = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.01808 7.41665V6.51665C9.01808 5.95465 8.55808 5.49665 7.99808 5.49665C7.43608 5.49665 6.97808 5.94999 6.97808 6.50999V7.40332M9.16675 7.41332H6.83341C6.46008 7.41332 6.16675 7.70665 6.16675 8.07999V9.49332C6.16675 9.85999 6.46008 10.16 6.83341 10.16H9.16675C9.53341 10.16 9.83342 9.85999 9.83342 9.49332V8.07332C9.83342 7.69999 9.53341 7.40665 9.16675 7.40665V7.41332ZM13.3334 7.49332C13.3334 10.4053 11.2287 13.1333 8.34675 13.9467C8.12008 14.0067 7.87875 14.0067 7.65341 13.9467C4.76675 13.1267 2.66675 10.4 2.66675 7.48665V4.79999C2.66675 4.25332 2.99341 3.76665 3.49341 3.56599L6.73342 2.23932C7.54008 1.90599 8.44942 1.90599 9.25342 2.23932L12.4934 3.56599C12.9934 3.76599 13.3201 4.25265 13.3201 4.79999V7.48532L13.3334 7.49332Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default ShieldLock;

import * as React from 'react';
import { IconProps } from './types';

export const ShieldCheck = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.1667 6.74999L7.66675 9.24999L6.16675 7.74999M13.3334 7.45465C13.3334 10.482 11.0534 13.3127 8.00008 14C4.94208 13.3067 2.66675 10.48 2.66675 7.45465V5.07665C2.66675 4.52999 2.99341 4.04332 3.49341 3.83665L6.82675 2.46999C7.57341 2.15665 8.41875 2.15665 9.16675 2.46999L12.5001 3.82999C13.0001 4.02999 13.3267 4.51665 13.3267 5.06332V7.44132L13.3334 7.45465Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default ShieldCheck;

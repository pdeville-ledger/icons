import * as React from 'react';
import { IconProps } from './types';

export const MinusCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.6667 8H5.33333M8 14C4.68 14 2 11.314 2 8C2 4.68 4.686 2 8 2C11.314 2 14 4.686 14 8C14 11.314 11.314 14 8 14Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default MinusCircleIcon;

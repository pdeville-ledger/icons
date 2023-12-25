import * as React from 'react';
import { IconProps } from './types';

export const Star = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
        d="M7.99995 11.49L4.11929 13.33L4.91929 9.24998L1.99329 6.25331L6.11329 5.73331L7.99329 1.97998L9.87329 5.72665L13.9926 6.23998L11.066 9.22665L11.866 13.3066L7.99995 11.49Z"
        stroke="#fff"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});

export default Star;

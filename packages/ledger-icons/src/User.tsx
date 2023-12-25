import * as React from 'react';
import { IconProps } from './types';

export const User = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
        d="M3.33337 13.3334C3.33337 11.6667 4.66671 10.4 6.26671 10.4H9.66671C11.3334 10.4 12.6 11.7334 12.6 13.3334M10 3.46669C11.1334 4.60002 11.1334 6.40002 10 7.46669C8.86671 8.53335 7.06671 8.60002 6.00004 7.46669C4.93337 6.33335 4.86671 4.53335 6.00004 3.46669C7.13337 2.40002 8.86671 2.40002 10 3.46669Z"
        stroke="#fff"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});

export default User;

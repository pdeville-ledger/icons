import * as React from 'react';
import { IconProps } from './types';

export const SlideshowIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.66671 3.33335L5.33337 2.66669V13.3334L6.66671 12.6667M2.66671 3.33335L1.33337 2.66669V13.3334L2.66671 12.6667M14.6667 11.3334L9.33337 13.3334V2.66669L14.6667 4.66669V11.3334Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default SlideshowIcon;

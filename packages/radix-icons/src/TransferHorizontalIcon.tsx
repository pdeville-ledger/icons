import * as React from 'react';
import { IconProps } from './types';

export const TransferHorizontalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.33325 9.33337L3.33325 11.3334M3.33325 11.3334L5.33325 13.3334M3.33325 11.3334H12.6666M10.6666 6.66671L12.6666 4.66671M12.6666 4.66671L10.6666 2.66671M12.6666 4.66671L3.33325 4.66671"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default TransferHorizontalIcon;

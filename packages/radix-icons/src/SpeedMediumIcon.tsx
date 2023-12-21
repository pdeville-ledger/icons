import * as React from 'react';
import { IconProps } from './types';

export const SpeedMediumIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.52512 6.20668C1.39179 8.68668 2.08512 11.62 4.21845 13.3267M11.7661 13.3192C13.1727 12.1792 13.9994 10.4658 13.9927 8.6525C13.9875 6.04582 12.3235 3.827 10.0006 3.00238M4.21297 13.3192C2.80631 12.1792 1.97964 10.4658 1.98631 8.6525C1.99155 6.04582 3.65554 3.827 5.97845 3.00238M8.00059 7.33311V2.66644M7.97845 7.32668C8.33208 7.32668 8.67121 7.46716 8.92126 7.71721C9.17131 7.96726 9.31179 8.30639 9.31179 8.66002C9.31179 9.01364 9.17131 9.35278 8.92126 9.60283C8.67121 9.85287 8.33208 9.99335 7.97845 9.99335C7.62483 9.99335 7.28569 9.85287 7.03564 9.60283C6.7856 9.35278 6.64512 9.01364 6.64512 8.66002C6.64512 8.30639 6.7856 7.96726 7.03564 7.71721C7.28569 7.46716 7.62483 7.32668 7.97845 7.32668Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default SpeedMediumIcon;

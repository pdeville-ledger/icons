import * as React from 'react';
import { IconProps } from './types';

export const SoftRepairIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.00001 6H14M7.33335 3.99667H7.32668V3.99L7.32001 3.98333M5.66668 3.99667H5.66001V3.99L5.65335 3.98333M4.00001 3.99667H3.99335V3.99L3.98668 3.98333M14 7V4C14 2.89333 13.1 2 12 2H4C2.89333 2 2 2.89333 2 4V12.0002C2 13.1048 2.89543 14 4 14H7.33333M14.0001 12.5773C13.9001 12.8773 13.7268 13.1506 13.5068 13.3773C12.6735 14.204 11.3201 14.204 10.4868 13.3706C10.3401 13.224 10.2135 13.0573 10.1201 12.8773M13.8733 10.84C13.3067 9.8 12.0133 9.42 10.9733 9.98C10.7933 10.0733 10.6267 10.2 10.48 10.34C10.2533 10.56 10.0867 10.8333 9.98667 11.14M13.0554 10.8461H13.9954V9.89941M10.9467 12.8867H10V13.8267"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default SoftRepairIcon;

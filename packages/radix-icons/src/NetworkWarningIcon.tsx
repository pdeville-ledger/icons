import * as React from 'react';
import { IconProps } from './types';

export const NetworkWarningIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.6666 2H12.8533C13.48 2 13.9933 2.50667 13.9933 3.14V5.32667M5.33329 14H3.13995C2.50662 14 1.99329 13.4867 1.99329 12.8533V10.66M11.3 10.9467V9.72M11.3006 12.2933C11.2673 12.2933 11.234 12.32 11.2406 12.3533C11.2406 12.3867 11.2673 12.4133 11.3006 12.4133C11.334 12.4133 11.3606 12.38 11.3606 12.3467C11.3606 12.3133 11.3273 12.28 11.294 12.28M12.4633 8.4L14.49 12.0093C14.9833 12.896 14.3433 13.996 13.3233 13.996H9.25662C8.23662 13.996 7.58995 12.896 8.08995 12.0027L10.1166 8.38933C10.6233 7.48333 11.93 7.48333 12.4366 8.38933L12.4633 8.4ZM3.43995 3.35667C2.62662 3.46333 1.99862 4.15667 1.99862 5C1.99862 5.92 2.74529 6.66667 3.66529 6.66667H7.33195C8.06529 6.66667 8.66529 6.06667 8.66529 5.33333C8.66529 4.59333 8.06529 4 7.33195 4C7.33195 2.89533 6.43662 2 5.33195 2C4.45195 2 3.70795 2.56667 3.43862 3.35667H3.43995Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default NetworkWarningIcon;

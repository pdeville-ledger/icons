import * as React from 'react';
import { IconProps } from './types';

export const LedgerLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 4.66667V3C2 2.44772 2.44772 2 3 2H6M9.33333 10.0001H7.66667C7.11438 10.0001 6.66667 9.55237 6.66667 9.00008V6.00008M14 4.66667V3C14 2.44772 13.5523 2 13 2H10M2 11.3333V13C2 13.5523 2.44772 14 3 14H6M14 11.3333V13C14 13.5523 13.5523 14 13 14H10"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default LedgerLogoIcon;

import * as React from 'react';
import { IconProps } from './types';

export const Nft = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
        d="M4.33333 9.66666V6.33333L6 9.66666V6.33333M7.66667 9.66666V6.33333H9M11 9.66666V6.33333M11 6.33333H10.3333M11 6.33333H11.6667M8 8H8.33333M13.5 10.47V5.53C13.5 5.09333 13.2673 4.69 12.8887 4.47133L8.61067 2.00133C8.23267 1.78333 7.76667 1.78333 7.38867 2.00133L3.11133 4.472C2.73267 4.69 2.5 5.09333 2.5 5.53V10.4693C2.5 10.906 2.73267 11.3093 3.11133 11.528L7.38933 13.998C7.76733 14.216 8.23333 14.216 8.61133 13.998L12.8893 11.528C13.2673 11.31 13.5 10.9067 13.5 10.47Z"
        stroke="#fff"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});

export default Nft;

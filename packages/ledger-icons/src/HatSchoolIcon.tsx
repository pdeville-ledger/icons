import * as React from 'react';
import { IconProps } from './types';

export const HatSchoolIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.2739 6.00003V10.5M3.99342 8.13332V10.7467C3.99342 11.3733 4.30675 11.9667 4.83342 12.3133L5.90009 13.02C7.16675 13.86 8.81675 13.86 10.0834 13.02L11.1501 12.3067C11.6768 11.9533 11.9901 11.36 11.9901 10.7333V8.11332M6.46875 2.72665L2.34675 5.01332C1.48142 5.49332 1.48142 6.73332 2.34675 7.21332L6.46009 9.49999C7.40675 10.0267 8.56675 10.0267 9.52009 9.49999L13.6334 7.21332C14.4934 6.72665 14.4934 5.48665 13.6334 5.00799L9.51342 2.72132C8.56009 2.18799 7.40009 2.18799 6.44675 2.72132L6.46875 2.72665Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default HatSchoolIcon;

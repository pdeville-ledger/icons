import * as React from 'react';
import { IconProps } from './types';

export const PlanetIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.15326 7.99999C5.15326 6.42666 6.42659 5.15332 7.99326 5.15332M15.1933 3.83999C15.9533 5.15999 13.3533 8.09999 9.37326 10.3933C5.39326 12.6867 1.54659 13.4733 0.786589 12.1467M0.799923 12.16C0.333256 11.3533 1.11326 9.95332 2.68659 8.45999M11.0599 3.63332C13.1333 3.01332 14.7333 3.03999 15.1999 3.83999M7.99992 2.66666C6.58544 2.66666 5.22888 3.22856 4.22869 4.22875C3.22849 5.22895 2.66659 6.5855 2.66659 7.99999C2.66659 9.41448 3.22849 10.771 4.22869 11.7712C5.22888 12.7714 6.58544 13.3333 7.99992 13.3333C9.41441 13.3333 10.771 12.7714 11.7712 11.7712C12.7714 10.771 13.3333 9.41448 13.3333 7.99999C13.3333 6.5855 12.7714 5.22895 11.7712 4.22875C10.771 3.22856 9.41441 2.66666 7.99992 2.66666Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default PlanetIcon;

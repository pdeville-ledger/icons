import * as React from 'react';
import { IconProps } from './types';

export const MenuBurger = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.66675 8.00001H12.3334M3.66675 11.6667H12.3334M3.66675 4.33334H12.3334"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default MenuBurger;

import * as React from 'react';
import { IconProps } from './types';

export const Compass = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.2426 3.75332C14.5826 6.09332 14.5826 9.89332 12.2426 12.2333C9.89593 14.5733 6.09593 14.5733 3.75593 12.2333C1.40927 9.88666 1.40927 6.08666 3.75527 3.74666C6.09527 1.39999 9.89527 1.39999 12.2353 3.74599M9.5466 9.53332L6.45327 6.46666M6.4526 6.46866L10.6666 5.32666L9.5466 9.51999L5.3326 10.6533L6.4526 6.46866Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default Compass;

import * as React from 'react';
import { IconProps } from './types';

export const ExchangeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.66675 12.6667H6.66675C4.82608 12.6667 3.33341 11.174 3.33341 9.33334V3.33334M3.33341 3.33334L5.00008 5.00001M3.33341 3.33334L1.66675 5.00001M7.33341 3.33334H9.33341C11.1741 3.33334 12.6667 4.82601 12.6667 6.66668V12.6667M12.6667 12.6667L10.6667 10.6667M12.6667 12.6667L14.6667 10.6667"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default ExchangeIcon;

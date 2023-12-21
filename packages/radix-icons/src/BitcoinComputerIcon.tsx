import * as React from 'react';
import { IconProps } from './types';

export const BitcoinComputerIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.33341 11.3333L9.66674 14M6.66674 11.3333L6.33341 14M5.42674 14H10.5734M6.70674 6.65333V4.84666H8.52741C9.02074 4.84666 9.42741 5.24666 9.42741 5.74933C9.42741 6.24266 9.02074 6.64933 8.52074 6.64933M7.84807 4.33333V4.84666M7.84807 9V8.41666M12.2861 11.3333H3.71341C2.76674 11.3333 1.99341 10.56 1.99341 9.61333V3.70666C1.99341 2.76 2.76007 1.98666 3.70674 1.98666H12.2781C13.2247 1.98666 13.9914 2.75333 13.9914 3.7V9.6C13.9914 10.5467 13.2181 11.3133 12.2714 11.3133L12.2861 11.3333ZM8.75007 8.40666H6.70341V6.65333H8.74341C9.22341 6.65333 9.61674 7.04 9.61674 7.52666C9.61674 8.00666 9.22341 8.4 8.73674 8.4L8.75007 8.40666Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default BitcoinComputerIcon;

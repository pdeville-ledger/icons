import * as React from 'react';
import { IconProps } from './types';

export const Clock = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.7067 8.08001H7.60671V4.34667M8.00671 1.67334C7.21878 1.67334 6.43857 1.82853 5.71061 2.13006C4.98266 2.43159 4.32122 2.87355 3.76407 3.4307C3.20692 3.98785 2.76497 4.64929 2.46344 5.37724C2.16191 6.10519 2.00671 6.88541 2.00671 7.67334C2.00671 8.46127 2.16191 9.24149 2.46344 9.96944C2.76497 10.6974 3.20692 11.3588 3.76407 11.916C4.32122 12.4731 4.98266 12.9151 5.71061 13.2166C6.43857 13.5181 7.21878 13.6733 8.00671 13.6733C9.59801 13.6733 11.1241 13.0412 12.2494 11.916C13.3746 10.7908 14.0067 9.26464 14.0067 7.67334C14.0067 6.08204 13.3746 4.55592 12.2494 3.4307C11.1241 2.30548 9.59801 1.67334 8.00671 1.67334Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default Clock;

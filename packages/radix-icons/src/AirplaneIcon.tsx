import * as React from 'react';
import { IconProps } from './types';

export const AirplaneIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clip-path="url(#clip0_3_308)">
          <path
            d="M2.0002 7.99998L1.33354 5.33331H2.53354C2.6002 5.33331 2.73354 5.39998 2.8002 5.46665L3.86687 6.66665H7.06687L4.93354 1.79998C4.8002 1.59998 4.93354 1.33331 5.2002 1.33331L6.33354 1.33331C6.53354 1.33331 6.73354 1.46665 6.86687 1.59998L10.2002 6.66665H13.3335C14.0669 6.66665 14.6669 7.26665 14.6669 7.99998C14.6669 8.73331 14.0669 9.33331 13.3335 9.33331H10.2002L6.86687 14.4C6.73354 14.6 6.53354 14.6666 6.33354 14.6666H5.2002C4.93354 14.6666 4.8002 14.4 4.86687 14.2L7.0002 9.33331H3.8002L2.73354 10.5333C2.66687 10.6 2.6002 10.6666 2.46687 10.6666H1.33354L2.0002 7.99998Z"
            stroke="#fff"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_3_308">
            <path fill="#fff" d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

export default AirplaneIcon;

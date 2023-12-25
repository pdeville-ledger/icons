import * as React from 'react';
import { IconProps } from './types';

export const AutoLock = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.25996 4.66667V8.26H5.32662M13.96 7.33334C13.5866 4.04 10.62 1.66667 7.32662 2.03334C4.03329 2.4 1.65996 5.36667 2.02662 8.66C2.33329 11.44 4.53329 13.64 7.31996 13.9533M11.5003 12H13.8336M11.5003 12C11.04 12 10.6669 12.3731 10.6669 12.8333V13.8333C10.6669 14.2936 11.04 14.6667 11.5003 14.6667H13.8336C14.2939 14.6667 14.6669 14.2936 14.6669 13.8333V12.8333C14.6669 12.3731 14.2939 12 13.8336 12M11.5003 12L11.5 11.1667C11.5 10.52 12.02 10 12.6666 10C13.3066 10 13.8333 10.52 13.8333 11.1667L13.8336 12"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default AutoLock;

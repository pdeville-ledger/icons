import * as React from 'react';
import { IconProps } from './types';

export const WalletInputIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.99756 4.66526H12.6687C13.4054 4.66526 14.0026 5.26246 14.0026 5.99915V12.3351C14.0026 13.256 13.2561 14.0025 12.3352 14.0025H8.667M11.3348 4.66526V3.99832C11.3348 3.26163 10.7376 2.66443 10.0009 2.66443H3.66492C2.74406 2.66443 1.99756 3.41093 1.99756 4.33179V10.0008M6.66617 12.6686H1.99756M6.66617 12.6686L5.33228 14.0025M6.66617 12.6686L5.33228 11.3347M11.3343 9.33387H10.6676"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default WalletInputIcon;

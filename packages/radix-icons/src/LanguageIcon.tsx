import * as React from 'react';
import { IconProps } from './types';

export const LanguageIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.00004 2.66666V4.66666M13.6667 13.3333L11 7.33332L8.33337 13.3333M8.92671 12H13.0734M2.33337 9.99999C5.06337 9.77999 7.45071 7.39332 7.66737 4.66666H2.33404M7.66671 9.99999C5.96004 9.85999 4.46804 8.36666 4.33337 6.66666"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default LanguageIcon;

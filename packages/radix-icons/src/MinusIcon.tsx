import * as React from 'react';
import { IconProps } from './types';

export const MinusIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path d="M3.33325 8H12.6666" stroke="#fff" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    );
  }
);

export default MinusIcon;

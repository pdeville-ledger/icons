import * as React from 'react';
import { IconProps } from './types';

export const TransferVerticalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.66675 5.33325L4.66675 3.33325M4.66675 3.33325L2.66675 5.33325M4.66675 3.33325V12.6666M9.33341 10.6666L11.3334 12.6666M11.3334 12.6666L13.3334 10.6666M11.3334 12.6666L11.3334 3.33325"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default TransferVerticalIcon;

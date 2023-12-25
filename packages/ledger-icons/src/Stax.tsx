import * as React from 'react';
import { IconProps } from './types';

export const Stax = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
        d="M12 4.66667H12.4667C12.5403 4.66667 12.6 4.72636 12.6 4.8V6.53333C12.6 6.60697 12.5403 6.66667 12.4667 6.66667H12M4.33333 14H10.6667C11.403 14 12 13.403 12 12.6667V3.33333C12 2.59695 11.403 2 10.6667 2H4.33333C4.14924 2 4 2.14924 4 2.33333V13.6667C4 13.8508 4.14924 14 4.33333 14Z"
        stroke="#fff"
        stroke-width="1.3"
      />
    </svg>
  );
});

export default Stax;

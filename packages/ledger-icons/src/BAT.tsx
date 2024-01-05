import * as React from 'react';
import { IconProps } from './types';

export const BAT = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={forwardedRef}
    >
      <rect width="56" height="56" rx="28" fill="#FF5000" />
      <path
        d="M14.3889 38.8889L28.0694 15.75L41.6111 38.8576L14.3889 38.8889ZM28.0368 25.1144L22.4453 34.3509H33.6541L28.0368 25.1144Z"
        fill="#fff"
      />
    </svg>
  );
});

export default BAT;

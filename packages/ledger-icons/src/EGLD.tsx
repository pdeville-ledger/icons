import * as React from 'react';
import { IconProps } from './types';

export const EGLD = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <rect x=".5" y=".5" width="55" height="55" rx="27.5" fill="#000" />
      <rect x=".5" y=".5" width="55" height="55" rx="27.5" stroke="#272727" />
      <path
        d="M29.7442 28L44.3334 20.3438L41.8973 15.75L28.5261 21.0955C28.2216 21.2347 27.7786 21.2347 27.4741 21.0955L14.1029 15.75L11.6667 20.3438L26.256 28L11.6667 35.6563L14.1029 40.25L27.4741 34.9045C27.7786 34.7653 28.2216 34.7653 28.5261 34.9045L41.8973 40.25L44.3334 35.6563L29.7442 28Z"
        fill="#23F7DD"
      />
    </svg>
  );
});

export default EGLD;

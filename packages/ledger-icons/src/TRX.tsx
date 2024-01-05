import * as React from 'react';
import { IconProps } from './types';

export const TRX = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <rect width="56" height="56" rx="28" fill="#FF060A" />
      <path
        d="M36.3063 18.8527L15.75 15.0696L26.568 42.2918L41.6419 23.9262L36.3063 18.8527ZM35.9758 20.5192L39.1208 23.5089L30.5205 25.0657L35.9758 20.5192ZM28.6518 24.7538L19.5872 17.236L34.4033 19.9622L28.6518 24.7538ZM28.0066 26.0841L26.5281 38.305L18.5588 18.2459L28.0066 26.0827V26.0841ZM29.3739 26.7322L38.8986 25.0087L27.9738 38.3164L29.3739 26.7322Z"
        fill="#fff"
      />
    </svg>
  );
});

export default TRX;

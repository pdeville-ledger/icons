import * as React from 'react';
import { IconProps } from './types';

export const ETC = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <rect width="56" height="56" rx="28" fill="#0B8311" />
      <path
        d="M27.999 23.6783L20.1464 27.9992L27.9989 32.2893H28.0008L35.8546 27.9992L28.0008 23.6783L27.999 23.6783Z"
        fill="#fff"
      />
      <path
        d="M19.8333 29.6436C22.2591 33.327 25.2693 37.4764 28.0002 41.6109 30.7299 37.4786 33.7407 33.3281 36.1666 29.6436 33.3025 31.212 30.3139 32.8519 28.0002 34.1248 25.6853 32.8508 22.6962 31.212 19.8333 29.6436zM19.8333 26.3071L28.0002 21.8748 36.1666 26.3071 28.0002 14.3887 19.8333 26.3071z"
        fill="#fff"
      />
    </svg>
  );
});

export default ETC;

import * as React from 'react';
import { IconProps } from './types';

export const LTC = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <rect width="56" height="56" rx="28" fill="#345D9D" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.4147 32.3743L18.4724 33.1284L19.4089 29.3731L21.3743 28.5836L24.2068 17.1108H31.1879L29.1204 25.5443L31.0396 24.7671L30.114 28.5101L28.1717 29.2873L27.0175 34.0281H37.528L36.3397 38.8886H18.8154L20.4147 32.3743Z"
        fill="#fff"
      />
    </svg>
  );
});

export default LTC;

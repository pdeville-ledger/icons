import * as React from 'react';
import { IconProps } from './types';

export const PPC = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <rect width="56" height="56" rx="28" fill="#3CB054" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.1111 14.3889C35.3999 15.0649 42.452 26.0431 38.9116 35.8385C37.9089 38.5653 36.8427 40.058 34.6014 41.6111C34.6921 41.2179 34.7859 40.8247 34.8585 40.4209C36.1833 32.779 33.6713 23.5825 21.3804 18.5025C31.1593 24.322 35.105 34.677 30.5453 41.3616C22.7824 42.5821 17.1111 35.9535 17.1111 28.3161V14.3889Z"
        fill="#fff"
      />
    </svg>
  );
});

export default PPC;

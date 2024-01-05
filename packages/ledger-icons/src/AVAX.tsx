import * as React from 'react';
import { IconProps } from './types';

export const AVAX = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <rect width="56" height="56" rx="28" fill="#E84142" />
      <path
        d="M34.777 30.7834C35.4426 29.6211 36.5166 29.6211 37.1822 30.7834L41.3271 38.1395C41.9927 39.3018 41.4481 40.25 40.1169 40.25H31.7667C30.4506 40.25 29.9061 39.3018 30.5565 38.1395L34.777 30.7834ZM26.7596 16.6217C27.4252 15.4594 28.4841 15.4594 29.1497 16.6217L30.0725 18.304L32.2508 22.1732C32.7802 23.2743 32.7802 24.5743 32.2508 25.6754L24.9443 38.476C24.2787 39.5159 23.1745 40.1735 21.9492 40.25H15.8832C14.552 40.25 14.0074 39.3171 14.673 38.1395L26.7596 16.6217Z"
        fill="#fff"
      />
    </svg>
  );
});

export default AVAX;

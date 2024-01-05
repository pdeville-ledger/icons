import * as React from 'react';
import { IconProps } from './types';

export const STETH = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
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
        <rect x=".5" y=".5" width="55" height="55" rx="27.5" fill="#fff" />
        <rect x=".5" y=".5" width="55" height="55" rx="27.5" stroke="#272727" />
        <g clip-path="url(#clip0_20_1285)" fill="#00A3FF">
          <path d="M17.886 26.3667L17.6348 26.7436C14.745 31.2667 15.3732 37.1718 19.2681 40.9411C21.404 43.2026 24.4194 44.3334 27.4348 44.3334C27.4348 44.3334 27.4348 44.3334 17.886 26.3667Z" />
          <path
            opacity=".6"
            d="M27.4347 31.7692L17.886 26.241C27.4347 44.3333 27.4347 44.3333 27.4347 44.3333 27.4347 40.4384 27.4347 35.9153 27.4347 31.7692zM36.9835 26.3667L37.2348 26.7436C40.1246 31.2667 39.4964 37.1718 35.6015 40.9411 33.3399 43.2026 30.4502 44.3334 27.4348 44.3334 27.4348 44.3334 27.4348 44.3334 36.9835 26.3667z"
          />
          <path
            opacity=".2"
            d="M27.4348 31.7692L36.9835 26.241C27.4348 44.3333 27.4348 44.3333 27.4348 44.3333 27.4348 40.4384 27.4348 35.9153 27.4348 31.7692zM27.4348 19.582V29.0051L35.7271 24.3564 27.4348 19.582z"
          />
          <path opacity=".6" d="M27.4346 19.582L19.1423 24.3564L27.4346 29.0051V19.582Z" />
          <path d="M27.4346 11.6666L19.1423 24.3564L27.4346 19.582V11.6666Z" />
          <path opacity=".6" d="M27.4348 19.582L35.7271 24.3564L27.4348 11.6666V19.582Z" />
        </g>
        <defs>
          <clipPath id="clip0_20_1285">
            <path fill="#fff" transform="translate(11.667 11.667)" d="M0 0H32.667V32.667H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

export default STETH;

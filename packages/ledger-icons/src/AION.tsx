import * as React from 'react';
import { IconProps } from './types';

export const AION = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <rect width="56" height="56" rx="28" fill="#212529" />
      <path
        d="M31.0498 38.5317C31.0498 40.2324 29.6844 41.6111 28.0001 41.6111C26.3159 41.6111 24.9505 40.2324 24.9505 38.5317C24.9505 36.831 26.3159 35.4523 28.0001 35.4523C29.6844 35.4523 31.0498 36.831 31.0498 38.5317Z"
        fill="#fff"
      />
      <path
        d="M24.5845 14.3889L15.0696 41.3648H20.9249L28.0001 21.3058L35.0753 41.3648H40.9307L31.4158 14.3889H24.5845Z"
        fill="#fff"
      />
    </svg>
  );
});

export default AION;

import * as React from 'react';
import { IconProps } from './types';

export const XRP = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <rect width="56" height="56" rx="28" fill="#333" />
      <path
        d="M37.6231 17.1108H41.5567L33.3696 25.219C31.9382 26.6293 30.0095 27.4198 28 27.4198C25.9906 27.4198 24.0618 26.6293 22.6304 25.219L14.4366 17.1108H18.377L24.5973 23.2671C25.5031 24.1612 26.7246 24.6625 27.9973 24.6625C29.27 24.6625 30.4916 24.1612 31.3974 23.2671L37.6231 17.1108ZM18.3293 39.6549H14.3889L22.6304 31.4978C24.0618 30.0875 25.9906 29.297 28 29.297C30.0095 29.297 31.9382 30.0875 33.3696 31.4978L41.6111 39.6536H37.6707L31.4028 33.4442C30.497 32.5501 29.2755 32.0488 28.0028 32.0488C26.73 32.0488 25.5085 32.5501 24.6027 33.4442L18.328 39.6549H18.3293Z"
        fill="#fff"
      />
    </svg>
  );
});

export default XRP;

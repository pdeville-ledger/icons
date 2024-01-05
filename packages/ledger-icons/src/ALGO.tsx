import * as React from 'react';
import { IconProps } from './types';

export const ALGO = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <rect width="56" height="56" rx="28" fill="#000" />
      <path
        d="M19.0927 41.6104L23.0317 34.7929L26.9672 27.9993L30.8805 21.1818L31.5305 20.1008L31.8161 21.1818L33.0168 25.6698L31.6724 27.9993L27.7369 34.7929L23.8236 41.6104H28.5271L32.4643 34.7929L34.5048 31.2644L35.466 34.7929L37.2893 41.6104H41.5139L39.6906 34.7929L37.8657 27.9993L37.3868 26.2462L40.3149 21.1818H36.0424L35.897 20.6772L34.409 15.1082L34.2175 14.3882H30.1126L30.0168 14.5319L26.1753 21.1818L22.238 27.9993L18.3264 34.7929L14.3892 41.6104H19.0927Z"
        fill="#fff"
      />
    </svg>
  );
});

export default ALGO;

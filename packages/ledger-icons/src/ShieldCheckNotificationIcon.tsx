import * as React from 'react';
import { IconProps } from './types';

export const ShieldCheckNotificationIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <g clip-path="url(#clip0_3_369)">
          <mask id="a" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 6.49687C15.2441 7.02412 14.3248 7.33333 13.3333 7.33333C10.756 7.33333 8.66667 5.244 8.66667 2.66667C8.66667 1.67517 8.97588 0.755889 9.50313 0H0V16H16V6.49687Z"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#a)">
            <path
              d="M10.1667 6.75005L7.66675 9.25005L6.16675 7.75005M13.3334 7.45471C13.3334 10.482 11.0534 13.3127 8.00008 14C4.94208 13.3067 2.66675 10.48 2.66675 7.45471V5.07671C2.66675 4.53005 2.99341 4.04338 3.49341 3.83671L6.82675 2.47005C7.57341 2.15671 8.41875 2.15671 9.16675 2.47005L12.5001 3.83005C13.0001 4.03005 13.3267 4.51671 13.3267 5.06338V7.44138L13.3334 7.45471Z"
              stroke="#fff"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <circle cx="13.333" cy="2.667" r="2.667" fill="#BBB0FF" />
        </g>
        <defs>
          <clipPath id="clip0_3_369">
            <path fill="#fff" d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

export default ShieldCheckNotificationIcon;

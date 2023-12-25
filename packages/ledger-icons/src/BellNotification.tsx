import * as React from 'react';
import { IconProps } from './types';

export const BellNotification = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clip-path="url(#clip0_3_362)">
          <g clip-path="url(#clip1_3_362)">
            <mask id="a" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5 7C13.9853 7 16 4.98528 16 2.5V16H0V0H7.75777C7.27914 0.715049 7 1.57493 7 2.5C7 4.98528 9.01472 7 11.5 7ZM15.2422 0H16V2.5C16 1.57493 15.7209 0.715049 15.2422 0Z"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#a)">
              <path
                d="M6.00016 12V12.1667C6.00016 13.2667 6.89349 14.1667 8.00016 14.1667C9.10016 14.1667 10.0002 13.2667 10.0002 12.1667V12M12.0002 9.16669L13.1335 10.3C13.2535 10.42 13.3268 10.5934 13.3268 10.7667V11.32C13.3268 11.6867 13.0268 11.9867 12.6602 11.9867H3.32682C2.95349 11.9867 2.66016 11.6867 2.66016 11.32V10.76C2.66016 10.58 2.72682 10.4134 2.85349 10.2867L3.98682 9.14669V6.31335C3.98682 4.10002 5.77349 2.31335 7.98682 2.31335C10.1935 2.31269 11.9868 4.10002 11.9868 6.31335L12.0002 9.16669Z"
                stroke="#fff"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
          <circle cx="11.5" cy="2.5" r="2.5" fill="#E86164" />
        </g>
        <defs>
          <clipPath id="clip0_3_362">
            <path fill="#fff" d="M0 0H16V16H0z" />
          </clipPath>
          <clipPath id="clip1_3_362">
            <path fill="#fff" d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

export default BellNotification;

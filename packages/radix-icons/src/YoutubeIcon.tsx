import * as React from 'react';
import { IconProps } from './types';

export const YoutubeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.4707 3.29868C14.0734 3.46331 14.5471 3.94661 14.7084 4.56162H14.7073C15 5.67521 15 8 15 8C15 8 15 10.3248 14.7073 11.4384C14.5459 12.0534 14.0723 12.5367 13.4695 12.7013C12.3782 13 8 13 8 13C8 13 3.62183 13 2.53046 12.7013C1.92772 12.5367 1.45407 12.0534 1.29272 11.4384C1 10.3248 1 8 1 8C1 8 1 5.67521 1.29272 4.56162C1.45407 3.94661 1.92772 3.46331 2.53046 3.29868C3.62183 3 8 3 8 3C8 3 12.3782 3 13.4707 3.29868ZM10.238 8.00001L6.59975 5.85748V10.1425L10.238 8.00001Z"
          fill="#fff"
        />
      </svg>
    );
  }
);

export default YoutubeIcon;

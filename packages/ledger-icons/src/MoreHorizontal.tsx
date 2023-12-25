import * as React from 'react';
import { IconProps } from './types';

export const MoreHorizontal = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.6602 7.99999C11.6602 8.18666 11.8068 8.33332 11.9935 8.33332C12.1735 8.33332 12.3268 8.18666 12.3268 7.99999C12.3268 7.81999 12.1735 7.66666 11.9935 7.66666C11.8068 7.66666 11.6602 7.81999 11.6602 8.00666M7.66016 7.99999C7.66016 8.18666 7.80682 8.33332 7.99349 8.33332C8.17349 8.33332 8.32682 8.18666 8.32682 7.99999C8.32682 7.81999 8.17349 7.66666 7.99349 7.66666C7.80682 7.66666 7.66016 7.81999 7.66016 8.00666M3.66016 7.99999C3.66016 8.18666 3.80682 8.33332 3.99349 8.33332C4.17349 8.33332 4.32682 8.18666 4.32682 7.99999C4.32682 7.81999 4.17349 7.66666 3.99349 7.66666C3.80682 7.66666 3.66016 7.81999 3.66016 8.00666"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default MoreHorizontal;

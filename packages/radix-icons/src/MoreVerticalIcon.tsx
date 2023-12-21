import * as React from 'react';
import { IconProps } from './types';

export const MoreVerticalIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.99337 11.6667C7.8067 11.6667 7.66003 11.8133 7.66003 12C7.66003 12.18 7.8067 12.3333 7.99337 12.3333C8.17337 12.3333 8.3267 12.18 8.3267 12C8.3267 11.8133 8.17337 11.6667 7.9867 11.6667M7.99337 7.66666C7.8067 7.66666 7.66003 7.81332 7.66003 7.99999C7.66003 8.17999 7.8067 8.33332 7.99337 8.33332C8.17337 8.33332 8.3267 8.17999 8.3267 7.99999C8.3267 7.81332 8.17337 7.66666 7.9867 7.66666M7.99337 3.66666C7.8067 3.66666 7.66003 3.81332 7.66003 3.99999C7.66003 4.17999 7.8067 4.33332 7.99337 4.33332C8.17337 4.33332 8.3267 4.17999 8.3267 3.99999C8.3267 3.81332 8.17337 3.66666 7.9867 3.66666"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default MoreVerticalIcon;

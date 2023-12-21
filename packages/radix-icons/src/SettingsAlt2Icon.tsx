import * as React from 'react';
import { IconProps } from './types';

export const SettingsAlt2Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14 4.66667H11.96M8.62667 4.66667H2M11.4734 3.48666C12.12 4.13332 12.12 5.18666 11.4734 5.83999C10.82 6.48666 9.76671 6.48666 9.11337 5.83999C8.46004 5.18666 8.46004 4.13332 9.11337 3.47999C9.76004 2.82666 10.8134 2.82666 11.4667 3.47999M7.37337 11.3333H14M2 11.3333H4.04M6.87995 10.1633C7.52661 10.81 7.52661 11.8633 6.87995 12.5167C6.22661 13.1633 5.17328 13.1633 4.51995 12.5167C3.86661 11.8633 3.86661 10.81 4.51995 10.1567C5.16661 9.50333 6.21995 9.50333 6.87328 10.1567"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default SettingsAlt2Icon;

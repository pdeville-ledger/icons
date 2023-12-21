import * as React from 'react';
import { IconProps } from './types';

export const CursorTouchIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.47339 5.33334H4.14006M11.4734 5.33334H10.8067M10.3001 2.50668L9.82672 2.97334M4.64006 2.50668L5.11339 2.97334M7.47339 1.33334V2.00001M8.47072 8.66668V5.66668C8.47072 5.11334 8.01739 4.66668 7.47072 4.66668C6.91739 4.66668 6.47072 5.11334 6.47072 5.66668V10.6667L5.11072 10.2133C4.71539 10.08 4.27739 10.18 3.98406 10.4733C3.52406 10.9267 3.55739 11.6827 4.05739 12.0973L6.75739 14.344C6.99739 14.5373 7.29739 14.6507 7.61072 14.6507H10.6174C11.2841 14.6507 11.8567 14.144 11.9374 13.4773L12.2974 10.582C12.3841 9.86868 11.8974 9.21534 11.1907 9.10134L8.45072 8.64134L8.47072 8.66668Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default CursorTouchIcon;

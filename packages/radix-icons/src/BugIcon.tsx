import * as React from 'react';
import { IconProps } from './types';

export const BugIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.33333 5.66667L6.66667 5M8.66667 5.66667L9.33333 5M11.3333 6.33333C9.48667 8.17333 6.50667 8.17333 4.66667 6.33333M5.9 9.78C5.44 10 5.02 10.2993 4.66 10.6593M11.3333 10.6667C10.9667 10.3 10.5533 10 10.0933 9.78M5.5 8.5H4.33333M11.6667 8.5H10.5M8 5.66667C7.33696 5.66667 6.70107 5.94762 6.23223 6.44772C5.76339 6.94781 5.5 7.62609 5.5 8.33333C5.5 9.04058 5.76339 9.71886 6.23223 10.219C6.70107 10.719 7.33696 11 8 11C8.66304 11 9.29893 10.719 9.76777 10.219C10.2366 9.71886 10.5 9.04058 10.5 8.33333C10.5 7.62609 10.2366 6.94781 9.76777 6.44772C9.29893 5.94762 8.66304 5.66667 8 5.66667ZM5.33333 2H10.6667C12.5076 2 14 3.49238 14 5.33333V10.6667C14 12.5076 12.5076 14 10.6667 14H5.33333C3.49238 14 2 12.5076 2 10.6667V5.33333C2 3.49238 3.49238 2 5.33333 2Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default BugIcon;

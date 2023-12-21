import * as React from 'react';
import { IconProps } from './types';

export const UserLockIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.38 10.9467V9.99333C10.38 9.25333 10.9727 8.66 11.7127 8.66C12.446 8.66 13.046 9.25333 13.046 9.99333V10.94M7.33333 10H4.66667C3.19333 10 2 11.1933 2 12.6667V13.3333M10.38 10.952H13.0473C13.5731 10.952 13.9993 11.3782 13.9993 11.904V13.0473C13.9993 13.5731 13.5731 13.9993 13.0473 13.9993H10.38C9.85423 13.9993 9.428 13.5731 9.428 13.0473V11.904C9.428 11.3782 9.85423 10.952 10.38 10.952ZM7.33333 2C6.62609 2 5.94781 2.28095 5.44772 2.78105C4.94762 3.28115 4.66667 3.95942 4.66667 4.66667C4.66667 5.37391 4.94762 6.05219 5.44772 6.55229C5.94781 7.05238 6.62609 7.33333 7.33333 7.33333C8.04058 7.33333 8.71885 7.05238 9.21895 6.55229C9.71905 6.05219 10 5.37391 10 4.66667C10 3.95942 9.71905 3.28115 9.21895 2.78105C8.71885 2.28095 8.04058 2 7.33333 2Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default UserLockIcon;

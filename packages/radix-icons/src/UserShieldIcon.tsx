import * as React from 'react';
import { IconProps } from './types';

export const UserShieldIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.562 10.6667C6.12867 10.6667 4.762 11.2333 3.75533 12.24M14 8C14 4.68 11.3133 2 8 2C4.68 2 2 4.68 2 8C2 11.3133 4.68 14 8 14M10 10.9667V11.5267C9.99333 12.5667 10.6393 13.5 11.6193 13.8667L11.906 13.9733C11.9593 13.9933 12.0193 13.9933 12.0793 13.9733L12.366 13.86C13.3393 13.4933 13.986 12.56 13.986 11.5133V10.9467C13.986 10.7267 13.8393 10.5333 13.6327 10.4667L12.1327 9.99333C12.0327 9.96 11.926 9.96 11.8327 9.99333L10.3327 10.46C10.1193 10.52 9.97933 10.7133 9.97933 10.9333L10 10.9667ZM10 6.5V6.83333C10 7.93333 9.1 8.83333 8 8.83333C6.89333 8.83333 6 7.93333 6 6.83333V6.5C6 5.39333 6.89333 4.5 8 4.5C9.1 4.5 10 5.39333 10 6.5Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default UserShieldIcon;

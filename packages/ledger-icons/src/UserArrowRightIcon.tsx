import * as React from 'react';
import { IconProps } from './types';

export const UserArrowRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.3333 13.3333C11.3333 11.6667 9.99998 10.4 8.39998 10.4H4.99998C3.33332 10.4 2.06665 11.7333 2.06665 13.3333M11.3333 7.99999H14.6666M14.6666 7.99999L13.3333 9.33332M14.6666 7.99999L13.3333 6.66665M4.66665 3.59999C3.59998 4.66665 3.59998 6.46665 4.66665 7.53332C5.73332 8.59999 7.53332 8.59999 8.59998 7.53332C9.66665 6.46665 9.66665 4.66665 8.59998 3.59999C7.53332 2.53332 5.79998 2.53332 4.66665 3.59999Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default UserArrowRightIcon;

import * as React from 'react';
import { IconProps } from './types';

export const DollarConvertIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.83337 4.66667V5.5M7.83337 11.3333V10.5M9.4867 6.66667C9.44003 6.01333 8.9067 5.5 8.24537 5.5H7.33203C6.68537 5.5 6.1587 6.02 6.1587 6.66667C6.1587 7.2 6.52403 7.66667 7.0387 7.8L8.6007 8.18667C9.1207 8.31333 9.4807 8.78 9.4807 9.32C9.4807 9.96667 8.95403 10.4867 8.30737 10.4867H7.39403C6.72737 10.4867 6.19403 9.96667 6.14737 9.31333M3.91337 3.91333C4.95937 2.86733 6.4047 2.22 8.00003 2.22C11.1867 2.22 13.7814 4.80667 13.7814 7.99867C13.7814 8.43867 13.7214 8.872 13.628 9.292M12.7334 8.40133L13.7734 9.44133L14.8134 8.39467M12.0867 12.0853C11.04 13.1253 9.59337 13.772 7.99337 13.772C4.80003 13.772 2.21203 11.1787 2.21203 7.99333C2.21203 7.54667 2.26537 7.11333 2.3587 6.69333M3.26203 7.59867L2.21537 6.552L1.1687 7.592"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default DollarConvertIcon;

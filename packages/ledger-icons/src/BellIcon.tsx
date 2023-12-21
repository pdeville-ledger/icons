import * as React from 'react';
import { IconProps } from './types';

export const BellIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.99991 12V12.1667C5.99991 13.2667 6.89325 14.1667 7.99991 14.1667C9.09991 14.1667 9.99991 13.2667 9.99991 12.1667V12M11.9999 9.16666L13.1332 10.3C13.2532 10.42 13.3266 10.5933 13.3266 10.7667V11.32C13.3266 11.6867 13.0266 11.9867 12.6599 11.9867H3.32658C2.95325 11.9867 2.65991 11.6867 2.65991 11.32V10.76C2.65991 10.58 2.72658 10.4133 2.85325 10.2867L3.98658 9.14666V6.31332C3.98658 4.09999 5.77325 2.31332 7.98658 2.31332C10.1932 2.31266 11.9866 4.09999 11.9866 6.31332L11.9999 9.16666Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default BellIcon;

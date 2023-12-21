import * as React from 'react';
import { IconProps } from './types';

export const ExperimentIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.33332 4V6.78C9.33332 7.13333 9.47332 7.46667 9.71999 7.72L12.9333 10.9333C13.1833 11.1833 13.32 11.52 13.32 11.8733V12.6533C13.32 13.3867 12.72 13.9867 11.9867 13.9867H3.98665C3.24665 13.9867 2.65332 13.3867 2.65332 12.6533V11.8667C2.65332 11.5133 2.79332 11.1733 3.03999 10.92L6.25332 7.7C6.50332 7.45 6.63999 7.10667 6.63999 6.75333V3.96667M9.33332 4C9.69999 4 9.99999 3.7 9.99999 3.33333V2.66667C9.99999 2.29333 9.69999 2 9.33332 2H6.66665C6.29332 2 5.99999 2.29867 5.99999 2.66667V3.33333C5.99999 3.7 6.29332 4 6.66665 4L9.33332 4ZM2.78665 11.3333H13.2133M6.54665 7.33333H9.45332"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default ExperimentIcon;

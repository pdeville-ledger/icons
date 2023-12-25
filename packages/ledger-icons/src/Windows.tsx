import * as React from 'react';
import { IconProps } from './types';

export const Windows = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.50378 7.76002H13.5998V2.40002L7.50378 3.24802V7.76002ZM2.39978 12.064L7.00778 12.688V8.30402H2.39978V12.064ZM2.39978 7.76002H7.00778V3.31202L2.39978 3.93602V7.76002ZM7.50378 12.752L13.5998 13.6V8.30402H7.50378V12.752Z"
          fill="#fff"
        />
      </svg>
    );
  }
);

export default Windows;

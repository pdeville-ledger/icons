import * as React from 'react';
import { IconProps } from './types';

export const FolderIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14 5.99999V4.66665C14 3.92665 13.4 3.33332 12.6667 3.33332H7.16669M8.12669 5.25999L7.19336 3.39999C6.96669 2.94665 6.50003 2.65999 6.00003 2.65999H3.32003V2.65332C2.58003 2.65332 1.98669 3.24665 1.98669 3.98665V11.9867C1.98669 12.72 2.58003 13.32 3.32003 13.32H12.6534C13.3867 13.32 13.9867 12.72 13.9867 11.9867V5.98665H9.30669C8.80003 5.98665 8.33336 5.69999 8.11336 5.24665L8.12669 5.25999Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default FolderIcon;

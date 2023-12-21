import * as React from 'react';
import { IconProps } from './types';

export const CoinsAddPlusIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.33333 12C3.49267 12 2 11.4 2 10.6667V5.33333M2 5.33333C2 4.97971 2.35119 4.64057 2.97631 4.39052C3.60143 4.14048 4.44928 4 5.33333 4C6.21739 4 7.06523 4.14048 7.69036 4.39052C8.31548 4.64057 8.66667 4.97971 8.66667 5.33333M2 5.33333C2 5.68696 2.35119 6.02609 2.97631 6.27614C3.60143 6.52619 4.44928 6.66667 5.33333 6.66667C6.21739 6.66667 7.06523 6.52619 7.69036 6.27614C8.31548 6.02609 8.66667 5.68696 8.66667 5.33333M7.33333 10C7.33333 10.7333 8.82 11.3333 10.6667 11.3333C12.5067 11.3333 14 10.7333 14 10M7.33333 10V12.6667C7.33333 13.4 8.82 14 10.6667 14C12.5067 14 14 13.4 14 12.6667L14 10M7.33333 10C7.33333 9.26 8.82 8.66667 10.6667 8.66667C12.5067 8.66667 14 9.26 14 10M8.66667 5.33333V7M11.3333 3.33333H14M12.6667 4.66667V2M5.33333 9.33333C3.49267 9.33333 2 8.73333 2 8"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default CoinsAddPlusIcon;

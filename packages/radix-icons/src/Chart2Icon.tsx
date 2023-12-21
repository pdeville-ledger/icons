import * as React from 'react';
import { IconProps } from './types';

export const Chart2Icon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.33336 10.5867L6.71336 7.20601C6.97403 6.93934 7.39336 6.93934 7.65336 7.20601L9.0807 8.63267C9.34136 8.89267 9.7607 8.89267 10.0207 8.63267L13.994 4.65934M12.22 4.66667H13.9934V6.44001M14 13.9527H1.28003V2.14734"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default Chart2Icon;

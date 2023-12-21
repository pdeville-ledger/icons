import * as React from 'react';
import { IconProps } from './types';

export const AppleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.00011 14.56C6.32011 14.56 6.78411 14.416 7.08811 14.288C7.50411 14.128 7.92011 14.032 8.28811 14.032C8.62411 14.032 9.00811 14.128 9.45611 14.288C9.87211 14.464 10.2241 14.56 10.5281 14.56C10.9441 14.56 11.3281 14.368 11.6961 14.032C11.9201 13.856 12.2241 13.472 12.5921 12.944C12.8641 12.576 13.1041 12.144 13.3121 11.68L13.5361 11.072C12.5121 10.64 11.7441 9.664 11.7441 8.4C11.7121 7.312 12.2081 6.464 13.2001 5.872C12.6241 5.072 11.8081 4.64 10.7201 4.56C10.2881 4.528 9.79211 4.624 9.21611 4.832C8.59211 5.056 8.20811 5.168 8.09611 5.168C7.96811 5.168 7.61611 5.072 7.12011 4.864C6.57611 4.688 6.17611 4.592 5.85611 4.592C5.28011 4.608 4.75211 4.736 4.25611 5.04C3.74411 5.328 3.36011 5.728 3.05611 6.256C2.67211 6.88 2.46411 7.648 2.46411 8.528C2.46411 9.28 2.60811 10.08 2.91211 10.912C3.16811 11.664 3.50411 12.32 3.90411 12.896C4.30411 13.456 4.60811 13.824 4.86411 14.032C5.23211 14.384 5.61611 14.56 6.00011 14.56ZM8.01611 4.304C8.01611 4.384 8.01611 4.464 8.03211 4.544C9.42411 4.672 10.7681 3.152 10.7681 1.696V1.44C10.4321 1.456 10.0641 1.552 9.69611 1.744C8.67211 2.256 8.01611 3.28 8.01611 4.304Z"
          fill="#fff"
        />
      </svg>
    );
  }
);

export default AppleIcon;

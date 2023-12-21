import * as React from 'react';
import { IconProps } from './types';

export const DownloadIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.3707 7.40732L8.00008 9.77799M8.00008 9.77799L5.62941 7.40732M8.00008 9.77799V2.66666M13.3334 10.9627C13.3334 11.5914 13.0836 12.1944 12.6391 12.639C12.1945 13.0836 11.5915 13.3333 10.9627 13.3333H5.03741C4.40867 13.3333 3.80569 13.0836 3.3611 12.639C2.91651 12.1944 2.66675 11.5914 2.66675 10.9627"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default DownloadIcon;

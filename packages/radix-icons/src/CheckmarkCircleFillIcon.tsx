import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleFillIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.3501 7.99998C1.3501 4.32728 4.3274 1.34998 8.0001 1.34998C11.6728 1.34998 14.6501 4.32728 14.6501 7.99998C14.6501 11.6727 11.6728 14.65 8.0001 14.65C4.3274 14.65 1.3501 11.6727 1.3501 7.99998ZM10.7838 6.86157C11.0376 6.60773 11.0376 6.19617 10.7838 5.94233C10.5299 5.68849 10.1184 5.68849 9.86454 5.94233L7.06483 8.74205L6.08911 7.76633C5.83527 7.51249 5.42371 7.51249 5.16987 7.76633C4.91603 8.02017 4.91603 8.43173 5.16987 8.68557L6.61454 10.1302C6.86838 10.3841 7.27994 10.3841 7.53378 10.1302C7.5655 10.0985 7.59326 10.0643 7.61705 10.0283L10.7838 6.86157Z"
          fill="#fff"
        />
      </svg>
    );
  }
);

export default CheckmarkCircleFillIcon;

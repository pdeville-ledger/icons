import * as React from 'react';
import { IconProps } from './types';

export const MinusCircleFillIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.3501 7.99998C1.3501 4.32057 4.32754 1.34998 8.0001 1.34998C11.6731 1.34998 14.6501 4.32699 14.6501 7.99998C14.6501 11.673 11.6731 14.65 8.0001 14.65C4.32069 14.65 1.3501 11.6725 1.3501 7.99998ZM5.3335 7.35004C4.97451 7.35004 4.6835 7.64106 4.6835 8.00004C4.6835 8.35903 4.97451 8.65004 5.3335 8.65004H10.6668C11.0258 8.65004 11.3168 8.35903 11.3168 8.00004C11.3168 7.64106 11.0258 7.35004 10.6668 7.35004H5.3335Z"
          fill="#fff"
        />
      </svg>
    );
  }
);

export default MinusCircleFillIcon;

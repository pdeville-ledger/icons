import * as React from 'react';
import { IconProps } from './types';

export const DeleteCircleFillIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.5 8C1.5 4.40353 4.41018 1.5 8 1.5C11.5901 1.5 14.5 4.40986 14.5 8C14.5 11.5901 11.5901 14.5 8 14.5C4.40353 14.5 1.5 11.5898 1.5 8ZM6.46683 5.75973C6.27157 5.56447 5.95499 5.56447 5.75973 5.75973C5.56447 5.95499 5.56447 6.27157 5.75973 6.46683L7.29284 7.99995L5.75973 9.53306C5.56447 9.72832 5.56447 10.0449 5.75973 10.2402C5.95499 10.4354 6.27157 10.4354 6.46683 10.2402L7.99995 8.70705L9.53306 10.2402C9.72832 10.4354 10.0449 10.4354 10.2402 10.2402C10.4354 10.0449 10.4354 9.72832 10.2402 9.53306L8.70705 7.99995L10.2402 6.46683C10.4354 6.27157 10.4354 5.95499 10.2402 5.75973C10.0449 5.56447 9.72832 5.56447 9.53306 5.75973L7.99995 7.29284L6.46683 5.75973Z"
          fill="#fff"
        />
      </svg>
    );
  }
);

export default DeleteCircleFillIcon;

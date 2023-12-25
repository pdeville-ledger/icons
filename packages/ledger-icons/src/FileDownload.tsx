import * as React from 'react';
import { IconProps } from './types';

export const FileDownload = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.66665 14H11.3333C12.4333 14 13.3333 13.1 13.3333 12V5.66666M13.3333 5.66666C13.3267 5.13333 13.12 4.62666 12.7467 4.24666L11.0733 2.57333C10.6933 2.19333 10.1867 1.98666 9.65332 1.98666H4.65332C3.54665 1.98666 2.65332 2.88 2.65332 3.98666V8.65333M13.3333 5.66666H11C10.26 5.66666 9.66665 5.06666 9.66665 4.33333V2M4.66665 10.6667V14M4.66665 14L5.99999 12.6667M4.66665 14L3.33332 12.6667"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default FileDownload;

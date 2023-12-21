import * as React from 'react';
import { IconProps } from './types';

export const LinkedinIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.4444 15H2.55556C1.69645 15 1 14.3036 1 13.4444V2.55556C1 1.69645 1.69645 1 2.55556 1H13.4444C14.3036 1 15 1.69645 15 2.55556V13.4444C15 14.3036 14.3036 15 13.4444 15ZM10.978 13.0556H13.0555V8.78776C13.0555 6.982 12.0319 6.1089 10.6021 6.1089C9.17168 6.1089 8.56969 7.22282 8.56969 7.22282V6.31484H6.56755V13.0556H8.56969V9.5171C8.56969 8.56899 9.00613 8.00479 9.84148 8.00479C10.6094 8.00479 10.978 8.54695 10.978 9.5171V13.0556ZM2.9444 4.18833C2.9444 4.87523 3.49702 5.43219 4.17899 5.43219C4.86097 5.43219 5.41326 4.87523 5.41326 4.18833C5.41326 3.50143 4.86097 2.94447 4.17899 2.94447C3.49702 2.94447 2.9444 3.50143 2.9444 4.18833ZM5.23289 13.0556H3.14517V6.31484H5.23289V13.0556Z"
          fill="#fff"
        />
      </svg>
    );
  }
);

export default LinkedinIcon;

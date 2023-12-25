import * as React from 'react';
import { IconProps } from './types';

export const Twitter = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.3319 6.92804L14.5437 1H13.3087L8.78327 6.14724L5.16883 1H1L6.46574 8.78354L1 15H2.2351L7.01406 9.56434L10.8312 15H15L9.3316 6.92804H9.3319ZM7.64026 8.85211L7.08647 8.07705L2.68013 1.90978H4.57717L8.13314 6.88696L8.68693 7.66202L13.3093 14.1316H11.4122L7.64026 8.85241V8.85211Z"
          fill="#fff"
        />
      </svg>
    );
  }
);

export default Twitter;

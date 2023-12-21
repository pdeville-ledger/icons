import * as React from 'react';
import { IconProps } from './types';

export const RangeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 13.3334H7.33333M2 10.6667H6M2 8.00002H7.33333M2 5.33335H6M2 2.66669H7.33333M12 13.3334V2.66669M12 13.3334L13.6667 11.6667M12 13.3334L10.3333 11.6667M12 2.66669L10.3333 4.33335M12 2.66669L13.6667 4.33335"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default RangeIcon;

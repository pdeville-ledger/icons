import * as React from 'react';
import { IconProps } from './types';

export const IdCardIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.72676 5.43333C7.30676 6.01333 7.30676 6.96666 6.72676 7.55333C6.1401 8.13333 5.18676 8.13333 4.6001 7.55333C4.01343 6.96666 4.01343 6.01333 4.6001 5.42666C5.1801 4.83999 6.13343 4.83999 6.7201 5.42666M10.0001 6.33333H12.6668M11.6001 8.99999H10.0001M8.0601 11C7.9401 10.7067 7.7601 10.44 7.52676 10.2307C7.13343 9.86399 6.6201 9.66399 6.08876 9.66399H5.2221C4.68876 9.66399 4.17543 9.86399 3.7841 10.224C3.55076 10.4373 3.37276 10.6973 3.25076 10.9933M1.33343 12.3333V3.69333C1.33343 2.93999 1.9401 2.32666 2.69343 2.32666H13.3328C14.0661 2.32666 14.6661 2.91999 14.6661 3.65999V12.3267C14.6661 13.06 14.0661 13.66 13.3328 13.66H2.6661C1.92943 13.66 1.33276 13.06 1.33276 12.3267L1.33343 12.3333Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default IdCardIcon;

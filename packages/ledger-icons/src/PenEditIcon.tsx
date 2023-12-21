import * as React from 'react';
import { IconProps } from './types';

export const PenEditIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.16657 4.77335L11.2266 6.83335M3.52657 10.4067L10.4066 3.52001C10.6666 3.26001 11.0866 3.26001 11.3466 3.52001L12.4599 4.63335C12.7199 4.89335 12.7199 5.31335 12.4599 5.57335L5.57323 12.4593C5.44657 12.5793 5.27323 12.6527 5.0999 12.6527H3.31323V10.866C3.31323 10.686 3.3799 10.5193 3.50657 10.3927L3.52657 10.4067Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default PenEditIcon;

import * as React from 'react';
import { IconProps } from './types';

export const EyeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.41465 6.58666C10.1946 7.36666 10.1946 8.63333 9.41465 9.41333C8.62798 10.1933 7.36131 10.1933 6.58131 9.41333C5.79465 8.62666 5.79465 7.35999 6.58131 6.57999C7.36131 5.79799 8.62798 5.79799 9.40798 6.57999M1.99998 7.99999C1.99998 7.55999 2.09998 7.12599 2.29331 6.71999C3.29998 4.65333 5.53331 3.32666 7.99598 3.32666C10.456 3.32666 12.6826 4.65333 13.696 6.71333C13.8893 7.11333 13.9893 7.54666 13.9893 7.98666C13.9893 8.41999 13.8826 8.86066 13.6893 9.25999C12.676 11.32 10.4426 12.6467 7.98265 12.6467C5.51598 12.6467 3.28931 11.3133 2.27998 9.25333C2.07998 8.84666 1.97998 8.41333 1.97998 7.97333L1.99998 7.99999Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default EyeIcon;

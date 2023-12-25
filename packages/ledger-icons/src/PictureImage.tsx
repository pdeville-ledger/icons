import * as React from 'react';
import { IconProps } from './types';

export const PictureImage = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.99756 8.66694L2.86136 7.80314C3.16292 7.50158 3.57192 7.33216 3.99839 7.33216C4.42486 7.33216 4.83386 7.50158 5.13542 7.80314L8.00006 10.6678M4.66734 14.0025L8.86587 9.80397C9.49383 9.17601 10.512 9.17601 11.1399 9.80397L13.7671 12.4312M14.0026 11.3347C14.0026 12.8081 12.8082 14.0025 11.3348 14.0025H4.66534C3.19196 14.0025 1.99756 12.8081 1.99756 11.3347V4.66528C1.99756 3.1919 3.19196 1.9975 4.66534 1.9975H11.3348C12.8082 1.9975 14.0026 3.1919 14.0026 4.66528V11.3347Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default PictureImage;

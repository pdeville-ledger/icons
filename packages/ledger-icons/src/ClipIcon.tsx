import * as React from 'react';
import { IconProps } from './types';

export const ClipIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.96663 6.25332L5.27997 9.93932C4.84663 10.366 4.84663 11.0593 5.27997 11.486H5.2733C5.69997 11.9127 6.3933 11.9127 6.81997 11.486L12.5666 5.73532C13.42 4.87532 13.42 3.48865 12.5666 2.63532C12.56 2.62865 12.56 2.62865 12.56 2.62865C11.7 1.76865 10.3133 1.76865 9.45997 2.62199C9.4533 2.62199 9.4533 2.62199 9.4533 2.62199L3.69997 8.36866C2.4133 9.64866 2.4133 11.728 3.6933 13.008C4.9733 14.288 7.0533 14.288 8.3333 13.008C8.3333 13.0013 8.3333 13.0013 8.3333 13.0013L12.5333 8.80132"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default ClipIcon;

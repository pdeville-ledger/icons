import * as React from 'react';
import { IconProps } from './types';

export const DAI = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={forwardedRef}
    >
      <rect width="56" height="56" rx="28" fill="#F5AC37" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.6513 17.1111H27.0387C32.7482 17.1111 37.0765 20.1428 38.6869 24.5528H41.6111V27.2191H39.303C39.3474 27.6404 39.3703 28.0702 39.3703 28.5057V28.5716C39.3703 29.0616 39.3417 29.5459 39.2844 30.0187H41.6111V32.6836H38.631C36.9791 37.0335 32.6851 40.0351 27.0401 40.0351H17.6513V32.6836H14.3889V30.0187H17.6513V27.2191H14.3889V24.5542H17.6513V17.1111ZM20.2746 32.6836V37.6438H27.0372C31.2123 37.6438 34.3127 35.6566 35.7555 32.6836H20.2746ZM36.5593 30.0187H20.2746V27.2191H36.565C36.6237 27.659 36.6553 28.1103 36.6553 28.5716V28.6361C36.6553 29.1075 36.6223 29.5674 36.5593 30.0173V30.0187ZM27.0401 19.4966C31.2323 19.4966 34.3428 21.5368 35.777 24.5513H20.2746V19.498H27.0372L27.0401 19.4966Z"
        fill="#fff"
      />
    </svg>
  );
});

export default DAI;

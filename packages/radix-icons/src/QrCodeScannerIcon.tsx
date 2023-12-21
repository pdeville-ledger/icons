import * as React from 'react';
import { IconProps } from './types';

export const QrCodeScannerIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14 5.33333V3.33333C14 2.59667 13.4 2 12.6667 2H10.6667M5.33333 2H3.33333C2.59667 2 2 2.59667 2 3.33333V5.33333M2 10.6667V12.6667C2 13.4 2.59667 14 3.33333 14H5.33333M10.6667 14H12.6667C13.4 14 14 13.4 14 12.6667V10.6667M2 8H14"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default QrCodeScannerIcon;

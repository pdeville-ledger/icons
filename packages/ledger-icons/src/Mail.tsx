import * as React from 'react';
import { IconProps } from './types';

export const Mail = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
        d="M2 4.66668V11.3333C2 12.0667 2.6 12.6667 3.33333 12.6667H12.6667C13.4 12.6667 14 12.0667 14 11.3333V4.66668M2 4.53334C2 4.93334 2.2 5.26668 2.53333 5.53334L6.53333 8.26668C7.46667 8.86668 8.6 8.86668 9.53333 8.26668L13.5333 5.60001C13.8 5.26668 14 4.93334 14 4.53334C14 3.86668 13.4667 3.33334 12.8 3.33334H3.2C2.53333 3.33334 2 3.86668 2 4.53334Z"
        stroke="#fff"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});

export default Mail;

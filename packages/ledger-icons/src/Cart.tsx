import * as React from 'react';
import { IconProps } from './types';

export const Cart = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
        d="M5.33333 11.6667L3.33333 2.33334H2M5.5 11.6667H12.1667M5.5 11.6667C5.19058 11.6667 4.89383 11.7896 4.67504 12.0084C4.45625 12.2272 4.33333 12.5239 4.33333 12.8333C4.33333 13.1428 4.45625 13.4395 4.67504 13.6583C4.89383 13.8771 5.19058 14 5.5 14C5.80942 14 6.10617 13.8771 6.32496 13.6583C6.54375 13.4395 6.66667 13.1428 6.66667 12.8333C6.66667 12.5239 6.54375 12.2272 6.32496 12.0084C6.10617 11.7896 5.80942 11.6667 5.5 11.6667ZM12.1667 11.6667C11.8572 11.6667 11.5605 11.7896 11.3417 12.0084C11.1229 12.2272 11 12.5239 11 12.8333C11 13.1428 11.1229 13.4395 11.3417 13.6583C11.5605 13.8771 11.8572 14 12.1667 14C12.4761 14 12.7728 13.8771 12.9916 13.6583C13.2104 13.4395 13.3333 13.1428 13.3333 12.8333C13.3333 12.5239 13.2104 12.2272 12.9916 12.0084C12.7728 11.7896 12.4761 11.6667 12.1667 11.6667ZM3.76 4.33334H13.3267C13.6933 4.32668 13.9933 4.62668 13.9933 4.99334C13.9933 5.04668 13.98 5.10668 13.9667 5.16001L12.9 9.16001C12.82 9.44668 12.5533 9.65334 12.2533 9.65334H4.88667"
        stroke="#fff"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});

export default Cart;

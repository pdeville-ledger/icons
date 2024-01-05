import * as React from 'react';
import { IconProps } from './types';

export const USDT = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <rect width="56" height="56" rx="28" fill="#00A478" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.8103 29.0234V29.0203C30.642 29.0326 29.7744 29.0846 27.8388 29.0846C26.2934 29.0846 25.2055 29.0387 24.823 29.0203V29.0249C18.8739 28.7633 14.4335 27.7274 14.4335 26.488C14.4335 25.2501 18.8739 24.2143 24.823 23.948V27.9936C25.2116 28.0212 26.3255 28.087 27.8648 28.087C29.7117 28.087 30.6374 28.0105 30.8103 27.9952V23.9511C36.7471 24.2158 41.1768 25.2517 41.1768 26.488C41.1768 27.7274 36.7471 28.7602 30.8103 29.0234ZM30.8103 23.5303V19.91H39.0943V14.3894H16.539V19.91H24.823V23.5288C18.0905 23.8378 13.0273 25.1721 13.0273 26.7695C13.0273 28.367 18.0905 29.6997 24.823 30.0103V41.6116H30.8103V30.0073C37.5321 29.6982 42.583 28.3654 42.583 26.7695C42.583 25.1736 37.5321 23.8409 30.8103 23.5303Z"
        fill="#fff"
      />
    </svg>
  );
});

export default USDT;

import * as React from 'react';
import { IconProps } from './types';

export const BNB = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <rect width="56" height="56" rx="28" fill="#F5BC00" />
      <path
        d="M22.7135 25.8275L28 20.5409L33.2893 25.8302L36.3654 22.7541L28 14.3887L19.6374 22.7513L22.7135 25.8275ZM14.3889 27.9998L17.465 24.9237L20.5411 27.9998L17.465 31.0759L14.3889 27.9998ZM22.7135 30.1721L28 35.4587L33.2893 30.1694L36.3654 33.2441L28 41.6109L19.6374 33.2482L19.6333 33.2441L22.7135 30.1721ZM35.4589 27.9998L38.535 24.9237L41.6111 27.9998L38.535 31.0759L35.4589 27.9998ZM31.1197 27.9971H31.1224V27.9998L28 31.1222L24.8817 28.0052L24.8763 27.9998L24.8817 27.9957L25.4275 27.4485L25.6929 27.1831L28 24.8774L31.1211 27.9984L31.1197 27.9971Z"
        fill="#fff"
      />
    </svg>
  );
});

export default BNB;

import * as React from 'react';
import { IconProps } from './types';

export const CRO = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <rect width="56" height="56" rx="28" fill="#002D74" />
      <path
        d="M27.9999 14.3888L16.4307 21.2096V34.7902L27.9999 41.611L39.5692 34.7902V21.2096L27.9999 14.3888ZM36.1524 32.7805L27.9999 37.5307L19.8475 32.7805V23.2193L27.9999 18.4082L36.1524 23.2193V32.7805Z"
        fill="#fff"
      />
      <path
        d="M27.9999 18.4082V14.3888L16.4307 21.2096V34.7902L27.9999 41.611V37.5307L19.8475 32.7805V23.2193L27.9999 18.4082zM27.9999 37.5307L28.0003 41.5501 39.5696 34.7293 39.5692 21.2096 27.9999 14.3888V18.4082L36.1527 23.1584V32.7196L27.9999 37.5307z"
        fill="#fff"
      />
      <path
        d="M33.4556 31.1357L28.0006 34.3025L22.6056 31.1357V24.8021L28.0006 21.6353L33.4556 24.8021V31.1357Z"
        fill="#fff"
      />
    </svg>
  );
});

export default CRO;

import * as React from 'react';
import { IconProps } from './types';

export const FacebookIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15 8.04352C15 4.15544 11.8641 1 8 1C4.13594 1 1 4.15544 1 8.04352C1 11.5617 3.55922 14.4777 6.91143 15V10.0746H5.12358V8.04352H6.91143V6.49119C6.91143 4.7285 7.94954 3.74922 9.54995 3.74922C10.3141 3.74922 11.1071 3.8943 11.1071 3.8943V5.61347H10.2276C9.3553 5.61347 9.08136 6.16477 9.08136 6.71606V8.03627H11.0278L10.7178 10.0674H9.08136V14.9927C12.4408 14.4777 15 11.5617 15 8.04352Z"
          fill="#fff"
        />
      </svg>
    );
  }
);

export default FacebookIcon;

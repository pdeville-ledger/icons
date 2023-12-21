import * as React from 'react';
import { IconProps } from './types';

export const WarningIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.00001 8.74665V6.25332M7.99335 10.75C7.90001 10.75 7.82668 10.8233 7.82668 10.9167C7.82668 11.0033 7.90001 11.0833 7.99335 11.0833C8.08001 11.0833 8.16001 11.0033 8.16001 10.9167C8.16001 10.8233 8.08001 10.75 7.98668 10.75M9.35268 2.75332L14.4527 11.6893C15.046 12.7227 14.2927 14.0207 13.0993 14.0207H2.88668C1.69001 14.0207 0.940014 12.728 1.53401 11.6893L6.63335 2.75332C7.22668 1.69998 8.74001 1.69998 9.33868 2.75332H9.35268Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default WarningIcon;

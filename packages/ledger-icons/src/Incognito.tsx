import * as React from 'react';
import { IconProps } from './types';

export const Incognito = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.95838 5.99916L4.43924 3.11196C4.54662 2.46903 5.10352 1.9975 5.75512 1.9975H10.1643C10.8166 1.9975 11.3728 2.46903 11.4802 3.11196L11.9617 5.99916M6.8169 12.0017C6.8169 13.1067 5.9211 14.0025 4.81607 14.0025C3.71104 14.0025 2.81523 13.1067 2.81523 12.0017C2.81523 10.8966 3.71104 10.0008 4.81607 10.0008C5.9211 10.0008 6.8169 10.8966 6.8169 12.0017ZM6.8169 12.0017C7.4485 11.2393 8.47226 11.2393 9.10385 12.0017M9.10385 12.0017C9.10385 13.1067 9.99966 14.0025 11.1047 14.0025C12.2097 14.0025 13.1055 13.1067 13.1055 12.0017C13.1055 10.8966 12.2097 10.0008 11.1047 10.0008C9.99966 10.0008 9.10385 10.8966 9.10385 12.0017ZM1.99756 8.66694C5.31294 6.8882 10.6872 6.8882 14.0026 8.66694"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default Incognito;

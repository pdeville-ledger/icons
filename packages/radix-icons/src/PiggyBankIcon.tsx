import * as React from 'react';
import { IconProps } from './types';

export const PiggyBankIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.3133 2.68C10.22 3.58667 10.22 5.06667 9.3133 5.97333C8.39996 6.88 6.91996 6.88 6.0133 5.97333C5.09996 5.06 5.09996 3.58 6.01263 2.67333C6.9193 1.76 8.39929 1.76 9.30596 2.67267M11.3533 7.97333C11.36 7.98 11.36 8 11.3533 8.01333C11.34 8.02 11.32 8.02 11.3066 8.01333C11.2933 8 11.2933 7.98 11.3066 7.96667C11.3133 7.95333 11.3333 7.95333 11.3466 7.96667M9.98663 4.57267C10.2 4.51267 10.4066 4.43267 10.6 4.31267C10.9066 4.11267 11.2666 3.99933 11.66 3.99933H12.3266V5.69933C12.8053 6.126 13.18 6.666 13.4066 7.286H13.9866C14.3533 7.286 14.6533 7.57933 14.6533 7.95267V9.99267C14.6533 10.3593 14.3533 10.6593 13.9866 10.6593H13.1066C12.7533 11.2593 12.2466 11.766 11.6473 12.1193V13.3193C11.6473 13.686 11.3473 13.986 10.9806 13.986H9.6473C9.27396 13.986 8.98063 13.686 8.98063 13.3193V12.6527H6.6473V13.226C6.6473 13.5927 6.3473 13.8927 5.98063 13.8927H4.6473C4.27396 13.8927 3.98063 13.5927 3.98063 13.226V11.6193C3.16063 10.886 2.6473 9.826 2.6473 8.63933C2.6473 6.87267 3.79263 5.37867 5.37396 4.846M1.51996 6.66667C1.20663 6.84667 0.994629 7.18 0.994629 7.56667C0.994629 8.14667 1.4613 8.618 2.0413 8.618H2.65663M5.66663 6.66667H9.66663"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default PiggyBankIcon;

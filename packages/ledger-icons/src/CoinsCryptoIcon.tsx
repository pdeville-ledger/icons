import * as React from 'react';
import { IconProps } from './types';

export const CoinsCryptoIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.45333 3.29466C8.17333 1.568 10.9787 1.568 12.7053 3.29466C14.432 5.01466 14.432 7.82 12.7053 9.54666M5.13333 9.56666V7.7H7.01467C7.528 7.7 7.94133 8.11333 7.94133 8.62666C7.94133 9.14 7.52133 9.55333 7.008 9.55333M6.31333 7.16733V7.70066M6.31333 11.9867V11.38M10.8427 9.57866C10.8427 12.0187 8.86267 14 6.42133 14C3.97467 14 2 12.02 2 9.57866C2 7.132 3.97333 5.15733 6.42133 5.15733C8.86133 5.15666 10.8427 7.13066 10.8427 9.57866ZM7.24667 11.378H5.13333V9.56466H7.24333C7.73667 9.56466 8.14333 9.96466 8.14333 10.4647C8.14333 10.958 7.73667 11.3647 7.23667 11.3647L7.24667 11.378Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default CoinsCryptoIcon;

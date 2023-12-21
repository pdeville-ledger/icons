import * as React from 'react';
import { IconProps } from './types';

export const CoinsEyeIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.00008 14.3333C6.32038 14.3333 4.70947 13.6661 3.52174 12.4783C2.33401 11.2906 1.66675 9.67969 1.66675 7.99999C1.66675 6.32029 2.33401 4.70938 3.52174 3.52165C4.70947 2.33392 6.32038 1.66666 8.00008 1.66666C9.67979 1.66666 11.2907 2.33392 12.4784 3.52165C13.6662 4.70938 14.3334 6.32029 14.3334 7.99999M6.95551 6.93241C7.0941 5.90897 8.03758 5.20002 9.06102 5.33861C10.0791 5.47721 10.7881 6.42069 10.6495 7.44412C10.5322 8.26501 9.8819 8.91532 9.05569 9.03258M12.5861 12.2673C12.6194 12.3006 12.6194 12.3606 12.5861 12.4006C12.5461 12.434 12.4861 12.434 12.4461 12.4006C12.4061 12.3606 12.4061 12.3006 12.4461 12.2606C12.4794 12.2206 12.5394 12.2206 12.5794 12.2606M7.20068 6.93241C6.70589 6.93241 6.23135 7.12897 5.88148 7.47884C5.5316 7.82872 5.33504 8.30325 5.33504 8.79805C5.33504 9.29285 5.5316 9.76738 5.88148 10.1173C6.23135 10.4671 6.70589 10.6637 7.20068 10.6637C7.69548 10.6637 8.17002 10.4671 8.51989 10.1173C8.86977 9.76738 9.06633 9.29285 9.06633 8.79805C9.06633 8.30325 8.86977 7.82872 8.51989 7.47884C8.17002 7.12897 7.69548 6.93241 7.20068 6.93241ZM10.1734 12.7933C9.98678 12.5133 9.98678 12.1467 10.1734 11.8733C10.7334 11.0133 11.6268 10.3266 12.5154 10.3266C13.4021 10.3266 14.2888 11.0066 14.8554 11.8666C15.0354 12.14 15.0354 12.5067 14.8554 12.7867C14.2888 13.6413 13.3954 14.3267 12.5088 14.3267C11.6154 14.3267 10.7288 13.64 10.1668 12.7867L10.1734 12.7933Z"
          stroke="#fff"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default CoinsEyeIcon;

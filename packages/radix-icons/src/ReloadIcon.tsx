import * as React from 'react';
import { BaseIconProps } from './types';

interface ReloadIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const ReloadIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ReloadIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M13 2.5C13 2.22386 12.7761 2 12.5 2C12.2239 2 12 2.22386 12 2.5V4.33274C10.8747 3.1544 9.7142 2.05 7.5 2.05C4.16981 2.05 2.05 4.78436 2.05 7.5C2.05 10.2156 4.16981 12.95 7.5 12.95C9.09248 12.95 10.4193 12.3197 11.364 11.3585C11.8696 10.844 12.2644 10.2362 12.5336 9.5822C12.6282 9.35238 12.5186 9.08939 12.2887 8.9948C12.0589 8.90022 11.7959 9.00985 11.7013 9.23968C11.4751 9.78942 11.1438 10.2985 10.7221 10.7276C9.93984 11.5235 8.84158 12.05 7.5 12.05C4.73019 12.05 2.95 9.78436 2.95 7.5C2.95 5.21564 4.73019 2.95 7.5 2.95C9.34619 2.95 10.2671 3.82325 11.3921 5H9.5C9.22386 5 9 5.22386 9 5.5C9 5.77614 9.22386 6 9.5 6H12.5C12.7761 6 13 5.77614 13 5.5V2.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ReloadIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ReloadIcon;
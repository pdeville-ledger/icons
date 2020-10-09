import * as React from 'react';
import { IconProps } from './types';

export const RadiobuttonIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M7.49988 1.12708C3.98026 1.12708 1.12704 3.98029 1.12704 7.49991C1.12704 11.0195 3.98026 13.8727 7.49988 13.8727C11.0195 13.8727 13.8727 11.0195 13.8727 7.49991C13.8727 3.98029 11.0195 1.12708 7.49988 1.12708ZM2.07704 7.49991C2.07704 4.50496 4.50493 2.07708 7.49988 2.07708C10.4948 2.07708 12.9227 4.50497 12.9227 7.49991C12.9227 10.4948 10.4948 12.9227 7.49988 12.9227C4.50493 12.9227 2.07704 10.4948 2.07704 7.49991ZM7.5 9.50003C8.60457 9.50003 9.5 8.6046 9.5 7.50003C9.5 6.39546 8.60457 5.50003 7.5 5.50003C6.39543 5.50003 5.5 6.39546 5.5 7.50003C5.5 8.6046 6.39543 9.50003 7.5 9.50003Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default RadiobuttonIcon;
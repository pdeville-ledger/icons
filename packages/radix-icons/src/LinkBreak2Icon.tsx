import * as React from 'react';
import { IconProps } from './types';

export const LinkBreak2Icon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M4.50017 0C4.77631 0 5.00016 0.223854 5.00016 0.499992V2.49996C5.00016 2.7761 4.77631 2.99995 4.50017 2.99995C4.22403 2.99995 4.00018 2.7761 4.00018 2.49996V0.499992C4.00018 0.223854 4.22403 0 4.50017 0ZM0.646393 0.646473C0.841652 0.451214 1.15823 0.451214 1.35349 0.646473L2.85346 2.14645C3.04872 2.34171 3.04872 2.65828 2.85346 2.85354C2.65821 3.0488 2.34163 3.0488 2.14637 2.85354L0.646393 1.35357C0.451134 1.15831 0.451134 0.841732 0.646393 0.646473ZM0.000244137 4.49993C0.000244137 4.22379 0.224098 3.99993 0.500236 3.99993H2.5002C2.77634 3.99993 3.0002 4.22379 3.0002 4.49993C3.0002 4.77606 2.77634 4.99992 2.5002 4.99992H0.500236C0.224098 4.99992 0.000244137 4.77606 0.000244137 4.49993ZM12 10.4998C12 10.2237 12.2239 9.99984 12.5 9.99984H14.5C14.7761 9.99984 15 10.2237 15 10.4998C15 10.776 14.7761 10.9998 14.5 10.9998H12.5C12.2239 10.9998 12 10.776 12 10.4998ZM10.5001 11.9998C10.7762 11.9998 11.0001 12.2237 11.0001 12.4998V14.4998C11.0001 14.7759 10.7762 14.9998 10.5001 14.9998C10.2239 14.9998 10.0001 14.7759 10.0001 14.4998V12.4998C10.0001 12.2237 10.2239 11.9998 10.5001 11.9998ZM12.1462 12.1463C12.3415 11.951 12.658 11.951 12.8533 12.1463L14.3533 13.6463C14.5485 13.8415 14.5485 14.1581 14.3533 14.3534C14.158 14.5486 13.8414 14.5486 13.6462 14.3534L12.1462 12.8534C11.9509 12.6581 11.9509 12.3415 12.1462 12.1463ZM7.76475 3.69939C8.19174 3.2724 8.35721 3.1101 8.51157 3.00524C9.18792 2.54578 10.0431 2.53678 10.6784 2.95402C10.8227 3.04876 10.9767 3.19912 11.3886 3.611C11.8005 4.02289 11.9509 4.17695 12.0456 4.32122C12.4628 4.95655 12.4538 5.8117 11.9944 6.48804C11.8895 6.64241 11.7272 6.80787 11.3002 7.23487L10.6815 7.85358C10.4863 8.04883 10.4863 8.36541 10.6815 8.56067C10.8768 8.75593 11.1934 8.75593 11.3886 8.56067L12.0073 7.94196L12.0502 7.89906C12.4199 7.52953 12.6564 7.29306 12.8216 7.04996C13.4968 6.05601 13.5316 4.76232 12.8815 3.77229C12.7229 3.53084 12.4918 3.29983 12.1404 2.94854L12.0957 2.90391L12.0511 2.85926C11.6998 2.50784 11.4688 2.27673 11.2273 2.11817C10.2373 1.46799 8.94361 1.50284 7.94965 2.17806C7.70656 2.3432 7.47009 2.57974 7.10057 2.94938L7.10056 2.94938L7.05765 2.9923L6.43895 3.611C6.24369 3.80626 6.24369 4.12284 6.43895 4.3181C6.63421 4.51336 6.95078 4.51336 7.14604 4.3181L7.76475 3.69939ZM2.99186 7.05809L2.94894 7.101C2.5793 7.47053 2.34276 7.707 2.17762 7.95009C1.5024 8.94405 1.46755 10.2377 2.11773 11.2278C2.27629 11.4692 2.50739 11.7002 2.85881 12.0515L2.85883 12.0515L2.90347 12.0961L2.9481 12.1408L2.9481 12.1408L2.94812 12.1408C3.2994 12.4922 3.53041 12.7233 3.77185 12.8819C4.76188 13.5321 6.05557 13.4972 7.04952 12.822C7.29262 12.6569 7.52909 12.4203 7.89862 12.0507L7.94152 12.0078L8.56023 11.3891C8.75549 11.1938 8.75549 10.8772 8.56023 10.682C8.36497 10.4867 8.0484 10.4867 7.85314 10.682L7.23443 11.3007C6.80743 11.7277 6.64197 11.89 6.48761 11.9948C5.81126 12.4543 4.95611 12.4633 4.32078 12.046C4.17651 11.9513 4.02245 11.8009 3.61057 11.3891C3.19868 10.9772 3.04832 10.8231 2.95358 10.6788C2.53634 10.0435 2.54534 9.18836 3.0048 8.51201C3.10966 8.35765 3.27196 8.19218 3.69895 7.76519L4.31766 7.14648C4.51292 6.95122 4.51292 6.63464 4.31766 6.43939C4.1224 6.24413 3.80582 6.24413 3.61057 6.43939L2.99186 7.05809Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default LinkBreak2Icon;
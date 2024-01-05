import * as React from 'react';
import { IconProps } from './types';

export const YLDY = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <rect width="56" height="56" rx="28" fill="#F3B732" />
      <path
        d="M29.1313 41.6111H26.9469C26.8474 41.5731 26.7456 41.5416 26.642 41.5168C26.0521 41.416 25.4523 41.3611 24.8733 41.2186C21.8665 40.4806 19.3641 38.9289 17.4166 36.5099C15.9244 34.6642 14.9492 32.4554 14.5907 30.1092C14.5227 29.6837 14.4569 29.2582 14.3889 28.8317V27.0848C14.4569 26.6758 14.5326 26.269 14.5896 25.8589C14.8058 24.3227 15.3031 22.8395 16.0568 21.4835C16.8365 20.0392 17.8741 18.7499 19.1184 17.6795C20.2292 16.7361 21.4786 15.9694 22.8227 15.4063C24.6452 14.6387 26.551 14.3361 28.5249 14.3964C29.7443 14.4261 30.9534 14.6285 32.1161 14.9973C34.3118 15.6948 36.295 16.9371 37.8808 18.6083C39.4368 20.2315 40.5604 22.2193 41.1486 24.3895C41.5426 25.7523 41.6911 27.1744 41.5872 28.5893C41.5401 29.187 41.5313 29.7956 41.4238 30.3789C40.9578 32.9449 39.8689 35.2214 38.1023 37.147C36.0363 39.4417 33.2388 40.9496 30.1862 41.4138C29.8331 41.473 29.4844 41.5508 29.1313 41.6111ZM34.4595 18.9307C34.4357 18.8741 34.4067 18.8197 34.3729 18.7684C34.3343 18.7296 34.2916 18.6951 34.2457 18.6653C31.9429 17.0665 29.3593 16.5588 26.6135 16.8593C25.1256 17.0332 23.6937 17.5302 22.418 18.3155C20.6004 19.393 19.1252 20.9634 18.1632 22.8447C17.2012 24.726 16.7918 26.8413 16.9823 28.9457C17.2258 31.7168 18.3772 34.0338 20.3126 35.9912C20.4791 36.1386 20.6557 36.2742 20.8412 36.3969C21.3116 35.7587 21.7513 35.1808 22.1669 34.5865C22.2465 34.4543 22.3615 34.3469 22.4989 34.2766C22.6363 34.2063 22.7906 34.1757 22.9444 34.1884C23.383 34.2082 23.8216 34.1884 24.2537 34.1884C24.4552 34.1901 24.6542 34.1449 24.8352 34.0564C25.0162 33.9679 25.1741 33.8385 25.2965 33.6785C25.4735 33.4703 25.6034 33.2263 25.6772 32.9632C25.751 32.7001 25.767 32.4242 25.7242 32.1543C25.2856 29.2078 24.8766 26.2569 24.4609 23.3071C24.4487 23.1176 24.4487 22.9275 24.4609 22.738C25.395 22.6903 26.3309 22.6903 27.2649 22.738C27.4721 23.8181 27.4425 24.8917 27.5632 25.9477C27.6838 27.0037 27.6728 28.0893 27.8768 29.2758L31.1358 23.1043L30.0721 22.4825C30.7904 21.7796 31.5558 21.2565 32.2653 20.6721C32.9747 20.0876 33.7149 19.5185 34.4595 18.9307ZM20.9508 36.4781C23.326 38.7557 27.5675 39.8424 31.4077 38.6208C35.6427 37.2731 38.8019 33.4121 39.1605 28.7571C39.4895 24.4432 37.1154 20.6041 34.6207 19.0338C34.6097 19.2531 34.5911 19.4494 34.59 19.6402C34.59 21.1502 34.59 22.6602 34.59 24.169C34.59 24.3587 34.6481 24.5671 34.4738 24.7645L33.3651 24.2502C33.0778 24.7513 32.8048 25.2196 32.5383 25.6922C31.2882 27.9095 30.048 30.1322 28.788 32.344C28.2759 33.2443 27.7496 34.138 27.187 35.0076C26.5379 36.012 25.6113 36.5329 24.3864 36.4836C23.7679 36.4583 23.1494 36.4836 22.531 36.4836L20.9508 36.4781Z"
        fill="#fff"
      />
    </svg>
  );
});

export default YLDY;

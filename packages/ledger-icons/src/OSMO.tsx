import * as React from 'react';
import { IconProps } from './types';

export const OSMO = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <rect width="56" height="56" rx="28" fill="#302DBB" />
      <g clip-path="url(#clip0_20_1335)" fill="#fff">
        <path d="M26.176 34.5302C20.9235 35.2896 17.0516 33.7205 15.6484 31.9316C16.0727 37.3794 20.6342 41.3471 26.1794 41.3471C31.9082 41.3471 36.472 37.1123 36.62 31.3857C36.2263 31.5679 35.6898 31.6989 35.0702 31.8502C34.5236 31.9837 33.9124 32.133 33.2776 32.3471C32.7497 32.5287 32.2394 32.733 31.7117 32.9443C30.25 33.5295 28.654 34.1685 26.176 34.5302Z" />
        <path d="M36.623 29.7354C36.623 28.5517 34.5272 27.8725 31.7395 27.6396 29.7229 27.4844 27.6864 27.6784 25.3534 28.377 23.3368 28.9592 21.5178 28.8622 20.1932 28.7069 17.2473 28.377 15.626 28.3382 15.626 29.7354 15.626 31.7536 19.8175 34.2763 26.1047 33.4031 28.4435 33.0751 29.9497 32.4958 31.3292 31.9652 31.8273 31.7737 32.3089 31.5884 32.8072 31.4237 33.4063 31.2296 33.9832 31.0943 34.499 30.9732 35.7366 30.6829 36.623 30.475 36.623 29.7354zM30.1986 22.574C30.1986 23.7082 29.2987 24.6277 28.1887 24.6277 27.0786 24.6277 26.1787 23.7082 26.1787 22.574 26.1787 21.4399 27.0786 20.5204 28.1887 20.5204 29.2987 20.5204 30.1986 21.4399 30.1986 22.574zM31.4722 26.1567C31.9409 26.1567 32.3209 25.7685 32.3209 25.2896 32.3209 24.8107 31.9409 24.4225 31.4722 24.4225 31.0035 24.4225 30.6235 24.8107 30.6235 25.2896 30.6235 25.7685 31.0035 26.1567 31.4722 26.1567z" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M39.0035 13.749C37.3206 12.5855 35.5155 11.8802 33.934 11.7077C32.3852 11.5386 30.8558 11.8729 30.0397 13.064C29.2235 14.255 29.7096 15.7718 30.4199 17.1645C30.4427 17.2093 30.4661 17.2538 30.4901 17.2981C29.1477 16.8436 27.7132 16.5975 26.2236 16.5975C18.7149 16.5975 12.6428 22.8126 12.6428 30.4654C12.6428 38.1182 18.7149 44.3333 26.2236 44.3333C33.7324 44.3333 39.8044 38.1182 39.8044 30.4654C39.8044 27.6606 38.9858 25.049 37.5802 22.8657C37.5983 22.8019 37.6178 22.7352 37.6386 22.666C38.056 22.7863 38.4738 22.8702 38.8964 22.9163C40.4452 23.0853 42.0252 23.1054 42.8414 21.9143C43.6576 20.7233 43.4224 19.169 42.7122 17.7763C41.9869 16.3542 40.6865 14.9125 39.0035 13.749ZM37.9876 21.6249C38.3751 21.7305 38.7487 21.8026 39.1017 21.8411C40.4369 21.9868 41.287 21.6465 41.6622 21.099C42.0373 20.5516 42.0503 19.6325 41.438 18.4318C40.8406 17.2605 39.7184 15.9889 38.1919 14.9335C36.6653 13.8781 35.082 13.2793 33.7794 13.1372C32.4442 12.9915 31.5941 13.3318 31.2189 13.8792C30.8438 14.4267 30.8308 15.3458 31.4431 16.5464C31.571 16.7972 31.7229 17.0526 31.8978 17.3094C32.027 17.2283 32.1635 17.1404 32.3053 17.0467C32.1533 16.7558 32.0398 16.4574 31.9844 16.1611C31.9053 15.7378 31.9376 15.2637 32.2175 14.8553C32.4974 14.4468 32.9267 14.2472 33.3486 14.1703C33.7668 14.094 34.2304 14.1257 34.6942 14.2225C35.625 14.4167 36.7008 14.9034 37.7264 15.6124C38.752 16.3215 39.5887 17.157 40.1017 17.9609C40.3573 18.3614 40.5523 18.7851 40.6307 19.2047C40.7099 19.6279 40.6776 20.102 40.3976 20.5105C40.1177 20.919 39.6884 21.1186 39.2665 21.1955C38.9189 21.2589 38.5398 21.2477 38.1553 21.1865C38.0965 21.3345 38.0405 21.4812 37.9876 21.6249ZM38.7866 19.8C38.8725 19.7992 38.9473 19.7923 39.0108 19.7807C39.0972 19.7649 39.1505 19.7428 39.1802 19.7259C39.2075 19.7104 39.2157 19.6991 39.2184 19.6952C39.2211 19.6913 39.2286 19.6796 39.2333 19.6485C39.2384 19.6145 39.2399 19.5567 39.2237 19.47C39.209 19.3913 39.1816 19.2992 39.139 19.1947C39.0196 19.3788 38.9017 19.5826 38.7866 19.8ZM38.4322 18.1263C38.0443 17.684 37.5303 17.2225 36.9147 16.7969C36.4522 16.4772 35.9914 16.2185 35.5577 16.0222C34.9486 16.6232 34.092 17.2763 33.3135 17.8104C33.0883 17.9649 32.8643 18.1131 32.6498 18.2499C34.2107 19.1092 35.5891 20.2715 36.7089 21.6593C36.8134 21.3535 36.9322 21.03 37.0626 20.7038C37.4217 19.8054 37.8934 18.8222 38.4322 18.1263ZM34.2471 15.6013C33.9704 15.5563 33.7555 15.5575 33.6043 15.5851C33.5179 15.6008 33.4647 15.623 33.4349 15.6399C33.4076 15.6554 33.3994 15.6666 33.3967 15.6705C33.3941 15.6744 33.3865 15.6862 33.3819 15.7173C33.3768 15.7512 33.3752 15.8091 33.3914 15.8958C33.4078 15.9836 33.44 16.0882 33.4915 16.208C33.7575 16.0064 34.0139 15.8016 34.2471 15.6013ZM26.2236 18.0698C19.5286 18.0698 14.0991 23.6059 14.0991 30.4654C14.0991 37.3248 19.5286 42.861 26.2236 42.861C32.8968 42.861 38.3482 37.3244 38.3482 30.4654C38.3482 23.6059 32.9187 18.0698 26.2236 18.0698Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_20_1335">
          <path fill="#fff" transform="translate(11.667 11.667)" d="M0 0H32.667V32.667H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

export default OSMO;

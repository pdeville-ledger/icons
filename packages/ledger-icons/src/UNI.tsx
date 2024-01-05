import * as React from 'react';
import { IconProps } from './types';

export const UNI = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <rect width="56" height="56" rx="28" fill="#FF007A" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.75 14.5828L15.8636 14.7212C20.2517 20.0939 22.5191 22.882 22.6635 23.0808 22.9001 23.4098 22.8114 23.7045 22.4043 23.9364 22.1783 24.0654 21.712 24.1956 21.4801 24.1956 21.2162 24.1956 20.9191 24.0689 20.7026 23.8642 20.5499 23.7187 19.9333 22.798 18.5097 20.5885 17.843 19.5443 17.1677 18.5056 16.4837 17.4726 16.4268 17.4192 16.4269 17.4194 18.2906 20.754L18.3985 20.9471C19.6363 23.1625 20.0552 23.9447 20.0552 24.05 20.0552 24.263 19.9961 24.3743 19.7333 24.6677 19.2955 25.1565 19.1002 25.7056 18.9582 26.8417 18.7996 28.1162 18.3547 29.0156 17.1192 30.5552 16.3973 31.457 16.279 31.6226 16.0956 31.9859 15.866 32.4427 15.8033 32.6995 15.7772 33.277 15.75 33.8877 15.8033 34.2829 15.9902 34.8663 16.1535 35.3776 16.324 35.716 16.7594 36.3906 17.1358 36.974 17.3523 37.4071 17.3523 37.5763 17.3523 37.7113 17.3784 37.7113 17.9618 37.5799 19.357 37.2651 20.4895 36.7101 21.1274 36.0308 21.5215 35.6107 21.6138 35.3788 21.6173 34.8024 21.6185 34.4261 21.6055 34.3468 21.5037 34.1303 21.338 33.7776 21.0363 33.4841 20.3712 33.0297 19.499 32.4333 19.1274 31.9528 19.0245 31.2936 18.9393 30.7528 19.0375 30.3706 19.5203 29.36 20.0186 28.3138 20.1428 27.8689 20.2268 26.8144 20.2801 26.1328 20.3546 25.8642 20.5511 25.6488 20.7546 25.4239 20.9392 25.347 21.4446 25.2784 22.2682 25.166 22.7925 24.9529 23.2232 24.5565 23.5972 24.2109 23.7534 23.8784 23.7771 23.379L23.796 23.0003 23.5865 22.7565C23.2859 22.4063 20.7996 19.6631 16.1263 14.5248L16.0009 14.3887 15.75 14.5828zM17.8474 33.4878C17.8856 33.6513 17.8609 33.8231 17.7784 33.9693 17.6127 34.2593 17.3014 34.3551 17.0813 34.1823 16.9441 34.0746 16.9346 33.9161 17.0541 33.7362 17.1713 33.5599 17.1606 33.4723 17.0103 33.3954 16.9216 33.3492 16.8825 33.2971 16.8825 33.2261 16.8825 32.9918 17.3026 32.9066 17.5724 33.0865 17.7112 33.1811 17.8093 33.3243 17.8474 33.4878zM23.4362 26.4358C23.5534 26.0062 23.9285 25.5955 24.3155 25.4772 24.5617 25.4015 25.0693 25.45 25.3084 25.5707 25.7711 25.8074 26.1084 26.3434 26.035 26.7304 25.9451 27.2026 25.1806 27.5801 24.3001 27.586 23.8504 27.5896 23.6836 27.5292 23.512 27.2996 23.4055 27.1576 23.3652 26.6973 23.4362 26.4358zM25.1912 25.7399C25.4208 25.8796 25.4812 26.089 25.3451 26.2819 25.2516 26.4145 24.9628 26.5411 24.7498 26.5411 24.4327 26.5411 24.0859 26.315 24.0859 26.1091 24.0859 25.6926 24.751 25.4713 25.1912 25.7399z"
        fill="#fff"
      />
      <path
        d="M22.7331 17.3611C22.5745 17.3847 22.5887 17.3918 22.926 17.4439C24.1555 17.6356 25.1165 18.1232 26.0952 19.0533C26.5247 19.4616 26.9579 19.9693 27.6573 20.8876C29.2335 22.955 29.9022 23.5313 31.2288 23.9633C32.0075 24.2177 32.7944 24.3361 34.1837 24.4094C35.7222 24.4911 36.3032 24.6142 36.8523 24.9775C37.1576 25.1798 37.3943 25.4307 37.631 25.7976L37.7695 26.0106L37.7399 25.7751C37.6298 24.8757 36.9872 23.6106 36.1683 22.6828L36.0192 22.5136L35.9435 22.8533C35.7541 23.7089 35.3447 24.3242 34.9636 24.3242C34.8714 24.3236 34.7813 24.297 34.7035 24.2476C34.6257 24.1983 34.5633 24.128 34.5234 24.0449C34.4394 23.8438 34.4465 23.7704 34.5719 23.5361C34.8015 23.1041 34.8583 22.5266 34.7447 21.7728C34.7127 21.5551 34.6642 21.3503 34.637 21.3196C34.5541 21.219 33.8903 20.832 33.469 20.6379C31.9388 19.9314 30.1081 19.7007 28.3093 19.9906L27.8833 20.058L27.5851 19.7267C26.4608 18.4758 25.4088 17.7717 24.2526 17.496C23.7567 17.3788 23.0372 17.3137 22.7331 17.3611Z"
        fill="#fff"
      />
      <path
        d="M35.2383 18.1028C35.0702 18.4732 34.9874 18.8791 34.9519 19.4945 34.9294 19.8909 34.9069 20.0258 34.8608 20.0436 34.791 20.0708 34.6975 20.0424 34.1271 19.8234 33.7448 19.6755 32.7934 19.3986 32.7661 19.4258 32.9084 19.508 33.0563 19.58 33.2087 19.6412 33.5174 19.783 33.8191 19.9394 34.1129 20.1098 35.0892 20.6873 35.256 21.0234 35.256 22.4246 35.256 23.1216 35.2477 23.2139 35.1614 23.4245 35.0454 23.7074 35.0655 23.7594 35.1933 23.5109 35.4312 23.0494 35.5294 22.5855 35.5436 21.866 35.5519 21.4033 35.5661 21.3062 35.6312 21.24 35.7022 21.1702 35.7199 21.169 35.8347 21.2281 36.0063 21.3157 36.7826 21.9346 37.1199 22.2506L37.3956 22.5098 37.1199 22.1476C36.9684 21.9477 36.5495 21.4838 36.1886 21.1157 35.4217 20.3311 35.3602 20.227 35.2537 19.5004 35.1696 18.9288 35.1898 18.4365 35.3117 18.0767 35.3443 17.9996 35.3662 17.9184 35.3767 17.8353 35.3673 17.8353 35.3046 17.956 35.2383 18.1028zM22.5652 18.4187C22.4741 19.5004 22.8977 20.9477 23.5829 21.8909 24.1143 22.6222 24.9379 23.1902 25.5462 23.2459 25.9438 23.2814 26.0645 23.1571 25.8846 22.8944 25.6338 22.5287 25.3261 21.9666 25.2456 21.7264 25.1947 21.5761 25.0846 21.1347 25.0006 20.7441 24.7154 19.4116 24.4338 18.8921 23.7853 18.498 23.5486 18.3536 23.0433 18.1655 22.7498 18.1122L22.5936 18.0838 22.5652 18.4187zM29.7899 24.6162C29.7899 26.505 30.9177 27.6245 34.1211 28.9144 36.2548 29.7723 37.1258 30.2173 37.7755 30.7747 38.3471 31.2658 38.6867 31.9214 38.7199 32.5936 38.727 32.7202 38.7506 32.8113 38.7743 32.8042 38.8607 32.7758 39.1885 32.0433 39.295 31.6362 39.4311 31.1214 39.4796 30.1451 39.3968 29.6244 39.108 27.8327 37.8986 26.5168 35.9436 25.8683 35.3282 25.6647 34.6608 25.5251 33.4762 25.3511 31.4632 25.0576 30.7354 24.8352 30.0857 24.3145 29.9461 24.202 29.8218 24.1109 29.81 24.1109 29.7993 24.1109 29.7899 24.3381 29.7899 24.6162zM31.7176 28.7724C31.7831 28.9946 31.8348 29.2207 31.8727 29.4493 32.1295 30.977 31.3271 32.2102 29.7674 32.6883 29.6029 32.7391 28.952 32.8658 28.3225 32.9711 27.0479 33.1829 26.4799 33.3332 25.9083 33.6089 25.5024 33.8042 25.0125 34.0965 25.0409 34.1261 25.112 34.1224 25.1818 34.1055 25.2468 34.0764 25.9675 33.8231 26.7686 33.693 27.9875 33.6291 28.4716 33.6042 29.0207 33.564 29.21 33.5403 30.2964 33.403 31.0478 33.074 31.6336 32.4776 31.9397 32.1771 32.1711 31.8091 32.3093 31.4031 32.4088 31.1262 32.4218 31.0244 32.4218 30.5345 32.423 30.0362 32.4111 29.9451 32.3034 29.6386 32.1638 29.2363 31.9969 28.9357 31.7875 28.699L31.6348 28.5286 31.7176 28.7724z"
        fill="#fff"
      />
      <path
        d="M33.3407 32.0567C32.9147 31.1419 32.8177 30.2579 33.0508 29.4343 33.0756 29.3467 33.1159 29.2745 33.1395 29.2745 33.2196 29.3035 33.295 29.3442 33.3632 29.3952 33.5597 29.5277 33.9526 29.7502 34.9999 30.3206 36.3075 31.0342 37.0531 31.5869 37.5608 32.2164 38.0045 32.7691 38.2791 33.3987 38.4116 34.1655 38.4862 34.5998 38.4424 35.6448 38.3312 36.0826 37.9797 37.4625 37.162 38.5465 35.9975 39.1784 35.8876 39.242 35.7737 39.2985 35.6567 39.3477 35.6401 39.3477 35.7016 39.1903 35.7951 38.9962 36.1856 38.1773 36.2318 37.3797 35.9348 36.4921 35.7537 35.9489 35.3833 35.285 34.6366 34.1655 33.7679 32.8638 33.5549 32.5159 33.3407 32.0567zM21.309 36.9927C22.4984 35.9892 23.9764 35.2767 25.3243 35.0578 25.9042 34.9631 26.8722 35.001 27.4095 35.1383 28.271 35.3584 29.0426 35.8531 29.4438 36.4412 29.8343 37.0163 30.0035 37.5181 30.1775 38.6329 30.2485 39.0731 30.323 39.5145 30.3455 39.6151 30.4757 40.1926 30.7325 40.6553 31.0497 40.8873 31.5526 41.2553 32.42 41.2778 33.2721 40.9464 33.3611 40.9056 33.455 40.8762 33.5514 40.8589 33.5821 40.8896 33.1537 41.1772 32.8508 41.3287 32.4933 41.52 32.0929 41.6169 31.6875 41.6103 30.9065 41.6103 30.258 41.2139 29.7171 40.4033 29.6106 40.2435 29.3716 39.7666 29.1846 39.3417 28.6142 38.04 28.3325 37.6424 27.6698 37.2081 27.0912 36.8294 26.3468 36.7619 25.787 37.0365 25.051 37.3974 24.8462 38.3382 25.3728 38.9335 25.5823 39.1701 25.9728 39.3749 26.2924 39.4139 26.4317 39.4324 26.5735 39.4207 26.7079 39.3797 26.8424 39.3387 26.9665 39.2693 27.0719 39.1762 27.1772 39.083 27.2614 38.9684 27.3186 38.84 27.3758 38.7115 27.4048 38.5723 27.4036 38.4317 27.4036 38.0388 27.2521 37.8163 26.8734 37.6447 26.3563 37.4116 25.8001 37.6838 25.8024 38.1702 25.8036 38.3773 25.8935 38.5074 26.1018 38.6021 26.2356 38.6613 26.2379 38.6672 26.129 38.6447 25.6545 38.5453 25.5433 37.9737 25.9255 37.5939 26.3835 37.1371 27.3314 37.3382 27.6568 37.9607 27.7941 38.2222 27.8095 38.7441 27.69 39.0589 27.4237 39.763 26.645 40.1323 25.8557 39.9311 25.3184 39.7938 25.0995 39.6459 24.4522 38.9784 23.3267 37.8187 22.8901 37.5939 21.2664 37.3406L20.9552 37.2921 21.309 36.9927z"
        fill="#fff"
      />
    </svg>
  );
});

export default UNI;

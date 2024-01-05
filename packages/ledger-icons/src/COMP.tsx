import * as React from 'react';
import { IconProps } from './types';

export const COMP = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <rect width="56" height="56" rx="28" fill="#00D395" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.2272 35.6046C17.8889 35.4046 17.6082 35.1202 17.4126 34.7793C17.217 34.4384 17.1131 34.0526 17.1111 33.6595V29.2318C17.1111 28.705 17.5494 28.279 18.0857 28.2817C18.2572 28.2817 18.4259 28.3266 18.5757 28.411L28.7883 34.238C29.3858 34.5783 29.7547 35.2044 29.7547 35.8809V40.468C29.7538 40.6196 29.7229 40.7695 29.6639 40.9092C29.6048 41.0488 29.5188 41.1754 29.4106 41.2817C29.3025 41.3879 29.1744 41.4718 29.0337 41.5283C28.893 41.5849 28.7425 41.6131 28.5909 41.6113C28.3754 41.6114 28.1639 41.5536 27.9784 41.4439L18.2272 35.6046ZM33.4502 27.1982C34.0491 27.5385 34.4139 28.166 34.4166 28.8411V38.1513C34.4166 38.4262 34.2669 38.6808 34.0205 38.8142L31.7855 40.0446C31.7568 40.0606 31.7261 40.073 31.6943 40.0814V34.9118C31.6943 34.2421 31.3363 33.6214 30.747 33.2784L21.7798 28.0272V22.192C21.7798 21.6652 22.2181 21.2392 22.7557 21.2419C22.927 21.2421 23.0954 21.2867 23.2444 21.3712L33.4529 27.1982H33.4502ZM37.9215 20.3218C38.5204 20.662 38.8893 21.2882 38.8893 21.9674V35.5651C38.8876 35.7033 38.8486 35.8384 38.7765 35.9563C38.7044 36.0742 38.6018 36.1704 38.4796 36.2348L36.3603 37.355V27.887C36.3603 27.2186 36.001 26.5993 35.417 26.255L26.2484 20.8744V15.3414C26.2484 15.1726 26.296 15.0079 26.3791 14.8622C26.5126 14.6433 26.726 14.485 26.9742 14.4207C27.2224 14.3564 27.4859 14.3913 27.7089 14.5179L37.9215 20.3231V20.3218Z"
        fill="#fff"
      />
    </svg>
  );
});

export default COMP;

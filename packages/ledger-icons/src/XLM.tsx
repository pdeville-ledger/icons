import * as React from 'react';
import { IconProps } from './types';

export const XLM = React.forwardRef<SVGSVGElement, IconProps>(({ color = 'currentColor', ...props }, forwardedRef) => {
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
      <rect width="56" height="56" rx="28" fill="#000" />
      <path
        d="M37.7681 19.4578L34.4927 21.136L18.6646 29.2348C18.4391 27.4944 18.6993 25.7252 19.4162 24.1247C20.1332 22.5242 21.2786 21.1552 22.7248 20.1706C24.171 19.1859 25.861 18.6243 27.6064 18.5483C29.3518 18.4723 31.0839 18.885 32.6094 19.7402L34.4845 18.7805L34.7643 18.6365C32.9854 17.3397 30.8742 16.5812 28.6801 16.4509C26.486 16.3205 24.3006 16.8236 22.3819 17.9007C20.4632 18.9779 18.8914 20.5842 17.8521 22.5298C16.8128 24.4755 16.3493 26.6793 16.5165 28.8811C16.5478 29.2952 16.4564 29.7093 16.2539 30.0714C16.0514 30.4335 15.7467 30.7272 15.3783 30.9157L14.3889 31.423V33.7867L17.3012 32.295L18.2443 31.811L19.1737 31.3352L35.8588 22.7936L37.7339 21.8352L41.6098 19.8513V17.489L37.7681 19.4578ZM41.6111 22.2164L20.1235 33.2067L18.2484 34.1665L14.3903 36.1449V38.5072L18.2224 36.5466L21.4991 34.8684L37.3436 26.7573C37.5726 28.5004 37.3142 30.2731 36.5972 31.877C35.8803 33.4809 34.7332 34.8527 33.2843 35.8389C31.8354 36.825 30.1419 37.3866 28.3934 37.4607C26.6449 37.5349 24.9103 37.1187 23.3838 36.2587L23.2678 36.3204L21.2344 37.3624C23.0136 38.66 25.1253 39.4189 27.32 39.5493C29.5148 39.6798 31.7009 39.1764 33.62 38.0987C35.5391 37.0209 37.111 35.4138 38.15 33.4673C39.1891 31.5207 39.6518 29.3161 39.4835 27.1138C39.4526 26.7 39.544 26.2863 39.7462 25.9246C39.9485 25.5629 40.2526 25.2692 40.6203 25.0805L41.6111 24.5732V22.2177V22.2164Z"
        fill="#fff"
      />
    </svg>
  );
});

export default XLM;
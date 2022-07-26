import {
  FC, SVGProps
} from 'react';

export const Logo: FC<SVGProps<SVGSVGElement>> = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    <rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
    <circle cx="8" cy="12" r="3" fill="currentColor" />

  </svg>
);

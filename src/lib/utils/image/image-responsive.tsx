import { FC } from 'react';

export interface ImageResponsiveProperties {
  src: string;
  alt: string;
  width: number;
  height: number;
  fit: 'cover' | 'contain' | 'fill';
}
const convertFit = (fit: 'cover' | 'contain' | 'fill'): string => `object-${fit}`;

export const ImageResponsive: FC<ImageResponsiveProperties> = (props) => {
  const {
    src, alt, width, height, fit
  } = props;
  return (

    <span
      className="box-border block overflow-hidden relative inset-0 p-0 m-0 bg-none border-0 opacity-100"
      style={{ height: 'initial', width: 'initial' }}
    >
      <span
        className={`box-border top-0 bottom-0 left-0 right-0 block p-0 m-0 border-0 opacity-100 bg-none pt-[${Math.round((height / width) * 100)}%]`}
        style={{ height: 'initial', width: 'initial' }}
      >
        <img
          src={src}
          sizes="100vw"
          className={`${convertFit(fit)} box-border absolute
           inset-0 top-0 bottom-0 left-0 right-0 block object-cover w-0 h-0 max-w-full max-h-full min-w-full min-h-full p-0 m-auto border-none`}
          alt={alt}
        />
      </span>
    </span>
  );
};

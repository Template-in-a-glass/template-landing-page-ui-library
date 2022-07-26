import { FC } from 'react';

export interface ImageFillProperties {
  src: string;
  alt: string;
  fit: 'cover' | 'contain' | 'fill';
}

const convertFit = (fit: 'cover' | 'contain' | 'fill'): string => `object-${fit}`;

export const ImageFill: FC<{ props: ImageFillProperties }> = (props) => {
  const { props: { src, alt, fit } } = props;

  return (
    <span
      className="box-border block overflow-hidden inset-0 p-0 m-0 bg-none border-0 opacity-100"
      style={{ height: 'initial', width: 'initial' }}
    >
      <img
        src={src}
        sizes="100vw"
        className={`${convertFit(fit)} box-border absolute inset-0 block w-0 h-0 max-w-full max-h-full min-w-full min-h-full p-0 m-auto border-none`}
        alt={alt}
      />
    </span>
  );
};

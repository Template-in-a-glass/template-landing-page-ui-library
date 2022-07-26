import { FC } from 'react';

export interface HeroMainButtonProperties {
  title: string;
}

export const HeroMainButton: FC<{ props: HeroMainButtonProperties }> = (props) => {
  const { props: { title } } = props;
  return (
    <div className="rounded-md shadow">
      <div
        className={`flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent
           rounded-md bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10`}
      >
        {title}
      </div>
    </div>
  );
};

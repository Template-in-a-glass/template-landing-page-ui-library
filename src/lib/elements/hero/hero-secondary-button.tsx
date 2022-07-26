import { FC } from 'react';

export interface HeroSecondaryButtonProperties {
  title: string;
}

export const HeroSecondaryButton: FC<{ props: HeroSecondaryButtonProperties }> = (props) => {
  const { props: { title } } = props;
  return (
    <div className="rounded-md shadow">
      <div
        className={`flex items-center justify-center w-full px-8 py-3 text-base font-medium
        bg-gray-50 border border-transparent rounded-md
         text-primary-600 hover:bg-gray-100 md:py-4 md:text-lg md:px-10`}
      >
        {title}
      </div>
    </div>
  );
};

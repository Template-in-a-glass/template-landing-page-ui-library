import { FC, ReactElement } from 'react';
import { HeroMainButtonProperties } from './hero-main-button';
import { HeroSecondaryButtonProperties } from './hero-secondary-button';

export interface HeroProperties {
  /**
   * Can be use with HeroMainButton
   */
  mainButton: ReactElement<{ props: HeroMainButtonProperties }>,
  /**
   * Can be use with HeroSecondaryButton
   */
  secondButton: ReactElement<{ props: HeroSecondaryButtonProperties }>,
}

export const Hero: FC<{ props: HeroProperties }> = (props) => {
  const { props: { mainButton, secondButton } } = props;
  return (
    <div className="px-2 text-center sm:px-0">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Watch only TV shows</span>
        &nbsp;
        <span className="inline text-primary-600">Ended</span>
      </h1>
      <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
        You hate waiting a week between each episode, let alone a summer between each season. We find for you the shows ended in the last 42 days.
      </p>
      <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
        <div>
          {mainButton}
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          {secondButton}
        </div>
      </div>
    </div>
  );
};

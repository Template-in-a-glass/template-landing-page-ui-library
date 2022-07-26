import { FC } from 'react';
import { Faq } from '../../elements/faq';
import { Features } from '../../elements/features';
import { Footer } from '../../elements/footer';
import { Header, HeaderProperties } from '../../elements/header';
import { Hero, HeroProperties } from '../../elements/hero';

export interface HomePageProperties {
  headerProps: HeaderProperties;
  heroProps: HeroProperties;
}

export const HomePage: FC<{ props: HomePageProperties }> = (props) => {
  // render layout
  const { props: { headerProps, heroProps } } = props;
  return (
    <>
      <Header props={headerProps} />
      <main>
        <div className="py-40 bg-white">
          <div className="mx-auto max-w-7xl">
            <Hero props={heroProps} />
          </div>
        </div>
        <div className="p-24">
          <div className="mx-auto max-w-5xl">
            <Features />
          </div>
        </div>
        <div className="p-24 bg-white">
          <div className="mx-auto max-w-3xl">
            <Faq />
          </div>
        </div>
      </main>
      <footer className="p-12">
        <div className="mx-auto max-w-7xl">
          <Footer />
        </div>
      </footer>
    </>
  );
};

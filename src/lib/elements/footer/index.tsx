import { FC } from 'react';
import { Logo } from '../../components/logo';

export const Footer: FC = () => (
  <footer>
    <div className="flex justify-between">
      <div className="space-y-6 ">
        <Logo className="w-12 h-12 text-primary-500" />
        <div className="text-base text-left text-gray-600">
          <p>
            As we respect privacy, we don&apos;t use any cookies.
          </p>
          <p>
            So no ugly pop-up for you 🙂
          </p>
        </div>
      </div>
    </div>
    <div className="pt-6 mt-8 space-y-2 border-t border-gray-200">
      <p className="text-base text-gray-600 xl:text-center">&copy; 2022 showoff.tv - All rights reserved.</p>
      <p className="text-base text-gray-600 xl:text-center">This product uses the TMDB API but is not endorsed or certified by TMDB</p>
    </div>
  </footer>

);

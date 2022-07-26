import { FC } from 'react';
import { classNames } from '../../utils/styles';

export interface HeaderDesktopLinkProperties {
  name: string;
  current: boolean;
}

export const HeaderDesktopLink: FC<{ props: HeaderDesktopLinkProperties }> = (props) => {
  const { props: { name, current } } = props;
  return (
    <div className="flex h-full">
      <div
        className={classNames(
          current
            ? 'border-primary-500 text-gray-900'
            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
          'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
        )}
      >
        {name}
      </div>
    </div>
  );
};

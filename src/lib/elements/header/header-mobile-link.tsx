import { FC } from 'react';
import { classNames } from '../../utils/styles';

export interface HeaderMobileLinkProperties {
  name: string;
  current: boolean;
}

export const HeaderMobileLink: FC<{ props: HeaderMobileLinkProperties }> = (props) => {
  const { props: { name, current } } = props;
  return (
    <div
      className={classNames(
        current
          ? 'bg-primary-50 border-primary-500 text-primary-700'
          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
      )}
    >
      {name}
    </div>
  );
};

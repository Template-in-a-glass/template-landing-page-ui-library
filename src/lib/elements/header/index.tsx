import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { FC, Fragment, ReactElement } from 'react';
import { Logo } from '../../components/logo';

export interface HeaderLinkProperties {
  name: string;
  href: string;
  current: boolean;
}
export interface HeaderProperties {
  /**
   * Can be used with HeaderDesktopLink
   */
  headerDesktopLink: ReactElement<{ children: ReactElement<{ props: HeaderLinkProperties }> }>[];
  /**
    * Can be used with HeaderMobileLink
    */
  headerMobileLink: ReactElement<{ children: ReactElement<{ props: HeaderLinkProperties }> }>[];
}

export const Header: FC<{ props: HeaderProperties }> = (props) => {
  const { props: { headerDesktopLink, headerMobileLink } } = props;
  return (

    <div className="min-h-full">
      <Disclosure as="nav" className="bg-white border-b border-gray-200">
        {({ open }) => (
          <>
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex shrink-0 items-center">
                    <Logo
                      className="block w-auto h-8 text-primary-500 lg:hidden"
                    />
                    <Logo
                      className="hidden w-auto h-8 text-primary-500 lg:block"
                    />
                  </div>
                  <div className="hidden sm:flex sm:-my-px sm:ml-6 sm:space-x-8">
                    {headerDesktopLink.map((item) => (<Fragment key={item.props.children.props.props.name}>{item}</Fragment>))}
                  </div>
                </div>
                <div className="flex items-center -mr-2 sm:hidden">
                  <Disclosure.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-md">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block w-6 h-6" />
                    ) : (
                      <MenuIcon className="block w-6 h-6" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {headerMobileLink.map((item) => (<Fragment key={item.props.children.props.props.name}>{item}</Fragment>))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

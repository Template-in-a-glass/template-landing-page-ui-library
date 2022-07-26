import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { FC } from 'react';
import { classNames } from '../../utils/styles';

const faqs = [
  {
    question: 'Why only 42 days?',
    answer:
      `Because it's the answer to everything. More seriously, the purpose is to find shows or seasons to binge-watch,
       it's not to duplicate an existing database with millions of shows.`
  },
  {
    question: 'What is the relation with TMDB?',
    answer:
      'We are absolutly not related to TMDB, we just use their api to get information about the shows.'
  }
];

export const Faq: FC = () => (
  <div>
    <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">Frequently asked questions</h2>
    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
      {faqs.map((faq) => (
        <Disclosure as="div" key={faq.question} className="pt-6">
          {({ open }) => (
            <>
              <dt className="text-lg">
                <Disclosure.Button className="flex justify-between items-start w-full text-left text-gray-400">
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <span className="flex items-center ml-6 h-7">
                    <ChevronDownIcon
                      className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                    />
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="pr-12 mt-2">
                <p className="text-base text-gray-500">{faq.answer}</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  </div>
);

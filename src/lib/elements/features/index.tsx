import { CheckIcon } from '@heroicons/react/outline';
import { FC } from 'react';

const features = [
  {
    description: 'It\'s this show can be watched on Netflix, Disney +, Apple+ ? We show where your shows can be found. (Coming Soon)',
    name: 'Know where to watch'
  },
  {
    description: 'You want to add your shows to Trakt.tv or TMDB? You are just one click-away. (Coming Soon)',
    name: 'Link to you favorite service'
  },
  {
    description: 'You can find your shows by your language or by the show language. You can also display all the show title and description in your language. (Coming Soon)',
    name: 'We are support all languages'
  },
  {
    description: 'You can find all the ended Shows by using our superfast search engine. (Coming Soon)',
    name: 'Search your shows'
  },
  {
    description: 'Want watch only when the show is totally ended or when the season is finished. We got you cover. (Coming Soon)',
    name: 'Find by seasons or shows'
  },
  {
    description: 'You are a big fan of Western, find all of them in your favorite country. (Coming Soon)',
    name: 'Filter by genre'
  },
  {
    description: 'You think the Finnish are the best for the comedy. So do we! Here you can find their show in one click. (Coming Soon)',
    name: 'Filter by country'
  },
  {
    description: 'Follow us on twitter, we publish regularly all english shows that just ended. (Coming Soon)',
    name: 'Notifications of the last ended shows'
  }
];

export const Features: FC = () => (
  <>
    <div>
      <h2 className="text-base font-semibold tracking-wide text-primary-600 uppercase">All the shows you are looking for</h2>
      <p className="mt-2 text-3xl font-extrabold text-gray-900">All-in-one place</p>
      <p className="pb-4 mt-4 text-lg text-gray-600">
        Many Features to get all the ended shows you are looking for in the most convenient way.
      </p>
    </div>
    <div className="mt-12 lg:col-span-2 lg:mt-0">
      <dl className="space-y-10 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
        {features.map((feature) => (
          <div key={feature.name} className="relative">
            <dt>
              <CheckIcon className="absolute w-6 h-6 text-primary-500" />
              <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
            </dt>
            <dd className="mt-2 ml-9 text-base text-gray-600">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  </>

);

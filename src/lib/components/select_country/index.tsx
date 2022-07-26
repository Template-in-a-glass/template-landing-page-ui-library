import { Combobox } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/outline';
import { FC, useState } from 'react';
import { classNames } from '../../utils/styles';

export interface SelectCountryValue {
  id: string;
  label: string;
}

export interface SelectCountryProperties {
  countries: SelectCountryValue[];
  currentCountryId: string;
  onChange: (newCountryId: string) => void;
}

export const SelectCountry: FC<{ props: SelectCountryProperties }> = (props) => {
  const { props: { countries, currentCountryId, onChange } } = props;

  const selectedCountry: SelectCountryValue | undefined = countries.find((country) => country.id === currentCountryId);
  const [query, setQuery] = useState('');

  const filteredCountry = query === ''
    ? countries
    : countries.filter((country) => country.label.toLowerCase().includes(query.toLowerCase()));

  const onChangeCombobox = (value?: string): void => {
    if (value) {
      const newSelectedCountry: SelectCountryValue | undefined = countries.find((country) => country.label === value);
      if (newSelectedCountry) {
        onChange(newSelectedCountry.id);
      }
    }
  };

  return (
    <Combobox as="div" value={selectedCountry?.label} onChange={(value) => onChangeCombobox(value)}>
      <div className="relative mt-1">
        <Combobox.Label>Country</Combobox.Label>
        <Combobox.Input
          className="py-2 pr-10 pl-3 w-full h-12 bg-white rounded-md border border-gray-300 focus:border-primary-500 focus:outline-none"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(label: string) => label}
        />
        <Combobox.Button className="flex absolute top-6 right-0 bottom-0 items-center w-12 rounded-r-md focus:outline-none">
          <SelectorIcon className="absolute right-3 w-5 h-5 text-gray-400" />
        </Combobox.Button>

        {countries.length > 0 && (
          <Combobox.Options className="overflow-auto absolute z-10 py-1 mt-1 w-full max-h-60 text-base bg-white rounded-md focus:outline-none  shadow-lg ">
            {filteredCountry.map((country) => (
              <Combobox.Option
                key={country.id}
                value={country.label}
                className={({ active }) => classNames(
                  'relative cursor-pointer select-none py-2 pl-3 pr-9',
                  active ? 'bg-primary-500 text-white' : 'text-gray-900'
                )}
              >
                {({ active, selected }) => (
                  <>
                    <span className={classNames('block truncate', selected ? 'font-semibold' : 'font-normal')}>{country.label}</span>
                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-primary-500'
                        )}
                      >
                        <CheckIcon className="w-5 h-5" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};

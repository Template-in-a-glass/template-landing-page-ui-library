import { FC } from 'react';

export const SelectMenu: FC = () => (

  <select
    id="country"
    name="country"
    className="block py-2 pr-10 pl-3 mt-1 w-full text-base rounded-md border-gray-300 sm:text-sm"
    defaultValue="Canada"
  >
    <option>United States</option>
    <option>Canada</option>
    <option>Mexico</option>
  </select>

);

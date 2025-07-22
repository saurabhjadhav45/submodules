import type { Meta } from '@storybook/react';
import {useState} from 'react';

import Dropdown from './Dropdown';

export default {
  title: 'Dropdown',

  component: Dropdown,
} as Meta<typeof Dropdown>;

function Template() {
  const [dropdownValue, setDropdownValue] = useState('');
  interface Data {
    id: string;
    value: string;
    label: string;
  }
  const optionsList: Data[] = [
    {
      id: '1',
      value: 'india',
      label: 'INDIA',
    },
    {
      id: '2',
      value: 'usa',
      label: 'USA',
    },
    {
      id: '3',
      value: 'uk',
      label: 'UK',
    },
    {
      id: '4',
      value: 'Chaina',
      label: 'Chaina',
    },
    {
      id: '5',
      value: 'Japan',
      label: 'Japan',
    },
  ];

  const handleDropdown = (country: string) => {
    setDropdownValue(country);
  };

  return (
    <Dropdown
      optionsList={optionsList}
      value={dropdownValue}
      placeholder='Select item'
      onChange={() => handleDropdown}
    />
  );
}

export const DropdownComponent = Template.bind({});

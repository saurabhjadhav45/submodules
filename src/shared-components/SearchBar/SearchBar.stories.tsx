import type { Meta, StoryObj } from '@storybook/react';
import {useState} from 'react';

import SearchBar from './SearchBar';

const meta: Meta = {
  title: 'Search Bar',
  component: SearchBar,
};

export default meta;

const Template: StoryObj<typeof SearchBar> = function SearchBarStory(
  args
) {
  const {iconPosition, placeholder, searchText} = args;
  const [searchTxt, setSearchTxt] = useState(searchText);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTxt(e.target.value);
  };
  const clearTextHandler = () => {
    setSearchTxt('');
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter')
      setSearchTxt((event.target as HTMLInputElement).value);
  };

  const onClick = () => {
    /** empty function */
  };

  return (
    <SearchBar
      iconPosition={iconPosition}
      placeholder={placeholder}
      clearText={clearTextHandler}
      searchText={searchTxt}
      onChange={handleChange}
      onKeyDown={onKeyDown}
      onClick={onClick}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search',
  iconPosition: 'left',
  searchText: '',
};

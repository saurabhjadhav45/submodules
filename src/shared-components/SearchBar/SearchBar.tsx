import React, {ChangeEvent, KeyboardEvent, ReactNode} from 'react';

import InputField from '../InputField/InputField';
import ClearIcon from '../icons/ClearIcon/ClearIcon';
import SearchIcon from '../icons/SearchIcon/SearchIcon';
import './SearchBar.scss';

export interface SearchProp {
  placeholder?: string;
  searchText: string;
  iconPosition?: 'left' | 'right';
  autoComplete?: 'on' | 'off';
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clearText?: () => void;
  onClick?: () => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  searchIcon?: ReactNode;
  clearIcon?: ReactNode;
}

function SearchBar(props: SearchProp) {
  const {
    placeholder,
    searchText,
    iconPosition,
    autoComplete,
    onChange,
    clearText,
    onClick,
    onKeyDown,
    searchIcon,
    clearIcon,
  } = props;

  return (
    <div className='searchbar-container '>
      <div className='searchbar-main'>
        {iconPosition === 'left' && (
          <div className='search-icon-left'>
            <div
              onClick={onClick}
              onKeyDown={onKeyDown}
              data-testid='left-icon'
              className='search-img'
              role='button'
              tabIndex={0}>
              {searchIcon}
            </div>
          </div>
        )}

        <div className='search-input'>
          <InputField
            placeholder={placeholder}
            type='text'
            name='search'
            value={searchText}
            onChange={onChange}
            onKeyDown={onKeyDown}
            dataTestid='ref-input'
            autoComplete={autoComplete}
          />
        </div>
        <div className='clear-n-search-icon'>
          {searchText && (
            <button
              data-testid='clear-btn'
              className='clear-btn'
              type='button'
              onClick={clearText}>
              {clearIcon}
            </button>
          )}
          {iconPosition === 'right' && (
            <div
              onClick={onClick}
              onKeyDown={onKeyDown}
              data-testid='right-icon'
              className='search-icon-right'
              role='button'
              tabIndex={0}>
              {searchIcon}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
SearchBar.defaultProps = {
  placeholder: 'Search',
  searchIcon: <SearchIcon />,
  clearIcon: <ClearIcon />,
  iconPosition: 'left',
  autoComplete: 'off',
  clearText: () => {
    /** empty function */
  },
  onClick: () => {
    /** empty function */
  },
  onKeyDown: () => {
    /** empty function */
  },
};

export default React.memo(SearchBar);

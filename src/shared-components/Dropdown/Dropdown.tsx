import {ChangeEvent, memo} from 'react';

import './Dropdown.scss';

interface Data {
  value: string;
  label: string;
  id: string;
}

export interface Props {
  /**
   * To get the dropdown value attribute
   */
  value?: string;
  /**
   * To get the dropdown placeholder value
   */
  placeholder?: string;
  /**
   * To indicate the dropdown option list
   */
  optionsList?: Data[];
  /**
  /**
  /**
   * It indicate the onChange event
   */
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  /**
   * It indicate the checkbox in disabled mode
   */
  disabled?: boolean;
  /**
   * It indicate the dropdown name
   */
  name?: string;
  /**
   *  Passing data-testid from parent to the input element
   */
  dataTestId?: string;
}

function Dropdown({
  value,
  optionsList,
  onChange,
  placeholder,
  disabled,
  name,
  dataTestId,
}: Props) {
  return (
    <div className='select'>
      <select
        className='dropdown'
        name={name}
        onChange={onChange}
        defaultValue={placeholder}
        disabled={disabled}
        data-testid={dataTestId}>
        <option disabled className='placeholder' value={placeholder}>
          {placeholder}
        </option>
        {optionsList?.map((item) => (
          <option key={item.id} value={item.value} id={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default memo(Dropdown);

Dropdown.defaultProps = {
  value: '',
  placeholder: '',
  dataTestId: 'dropdown',
  name: '',
  optionsList: [],
  disabled: false,
};

import {CSSProperties, memo, useCallback, useEffect, useState} from 'react';

import './Checkbox.scss';

export interface Props {
  id: string;
  /**
   * It indicate the checkbox lable string
   */
  label?: string;
  /**
   * It indicate the checkbox in disabled mode
   */
  disabled?: boolean;
  /**
   * It indicate the checkbox dynamic color
   */
  color?: string;
  /** To define user-defined style */
  style?: CSSProperties;
  /**
   * It indicate the checkbox onChange event
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  name?: string;
  /**
   * It indicate the checked or not
   */
  checked?: boolean;
  /**
   * It indicate the checkbox value
   */
  value?: string;
  /**
   * It indicate the checkbox sizes
   */
  size?: 'small' | 'medium' | 'large';
  /**
   *  Passing data-testid from parent to the input element
   */
  dataTestId?: string;
}

function Checkbox({
  label = '',
  onChange,
  disabled = false,
  name = '',
  color = '',
  style = {},
  checked = false,
  value = '',
  size = 'small',
  id,
  dataTestId = 'checkbox',
}: Props) {
  const classes = `checkmarks checkbox-${size}`;
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleOnchange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event);
      setIsChecked(event.target.checked);
    },
    [onChange]
  );

  return (
    <div className='.form-group form-check'>
      <label className='label checkbox-container' style={style}>
        <span>{label}</span>
        <input
          type='checkbox'
          name={name}
          checked={isChecked}
          onChange={handleOnchange}
          disabled={disabled}
          value={value}
          id={id}
          data-testid={dataTestId}
        />
        <span
          className={classes}
          style={isChecked ? {backgroundColor: color} : {}}
        />
      </label>
    </div>
  );
}

export default memo(Checkbox);

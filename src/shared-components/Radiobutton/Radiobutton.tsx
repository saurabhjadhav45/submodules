import {CSSProperties, memo} from 'react';

import './Radiobutton.scss';

export interface Props {
  /**
   * It indicate the id
   */
  id: string;
  /**
   * It indicate the label
   */
  label?: string;
  /**
   * define radio button groups with the name property
   */
  name?: string;
  /**
   * It indicate the radiobutton color
   */
  color?: string;
  /** To define user-defined style */
  style?: CSSProperties;
  /**
   * It indicate the  onChange event
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * It indicate value
   */
  value?: string;
  /**
   * It indicate the radiobutton selected or not
   */
  isSelected?: boolean;
  /**
   * It indicate the checkbox in disabled mode
   */
  disabled?: boolean;
  /**
   * It indicate the checkbox sizes
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * It indicate the data-testid for testing
   */
  dataTestId?: string;
}
function Radiobutton({
  label,
  name,
  onChange,
  value,
  isSelected,
  id,
  color,
  style,
  disabled,
  size,
  dataTestId,
}: Props) {
  const classes = `checkmark radiobutton_${size}`;
  return (
    <div className='form-group form-check'>
      <label
        className={`containers label ${disabled ? 'disabled' : ''}`}
        style={style}>
        {label}
        <input
          type='radio'
          id={id}
          className='radioinput'
          data-testid={dataTestId}
          name={name}
          onChange={onChange}
          value={value}
          checked={isSelected}
          disabled={disabled}
        />
        <span
          className={classes}
          style={isSelected ? {backgroundColor: color} : {}}
        />
      </label>
    </div>
  );
}
export default memo(Radiobutton);

Radiobutton.defaultProps = {
  label: '',
  name: '',
  color: '',
  value: '',
  isSelected: false,
  style: {},
  disabled: false,
  size: 'small',
  dataTestId: 'radioinput',
};

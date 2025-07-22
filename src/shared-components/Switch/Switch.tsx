import React from 'react';

import './Switch.scss';

export interface SwitchProps {
  id: string;
  name: string;
  labelPosition?: 'start' | 'end' | 'top' | 'bottom';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  isActive?: boolean;
  disabled?: boolean;
  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'danger'
    | 'light'
    | 'dark'
    | 'warning';
  onToggle?: () => void;
}

function Switch(props: SwitchProps) {
  const {
    id,
    name,
    label,
    labelPosition,
    size,
    color,
    isActive,
    disabled,
    onToggle,
  } = props;

  const fontSizes = {
    small: 'fs-xs',
    medium: 'fs-lg',
    large: 'fs-xl',
  };
  type fontSizeType = keyof typeof fontSizes;
  const labelPositionHandler = (
    switchSize: fontSizeType,
    switchLabel: string
  ) => {
    return <span className={fontSizes[`${switchSize}`]}>{switchLabel}</span>;
  };

  return (
    <div
      className={`toggle-wrapper ${disabled && 'disabled-txt-color'}`}
      data-testid='switch'>
      {labelPosition === 'top' &&
        size &&
        label &&
        labelPositionHandler(size, label)}
      <div className='toggle-main'>
        {labelPosition === 'start' &&
          size &&
          label &&
          labelPositionHandler(size, label)}
        <label className='toggle' htmlFor={id}>
          <input
            name={name}
            checked={isActive}
            disabled={disabled}
            onChange={onToggle}
            className='toggle-input'
            type='checkbox'
            id={id}
            data-testid='switch-toggle'
          />
          <div
            className={`toggle-fill-${size} switch-${color}  ${
              disabled && 'disabled-switch'
            }`}
          />
        </label>
        {labelPosition === 'end' &&
          size &&
          label &&
          labelPositionHandler(size, label)}
      </div>
      {labelPosition === 'bottom' &&
        size &&
        label &&
        labelPositionHandler(size, label)}
    </div>
  );
}

Switch.defaultProps = {
  label: '',
  labelPosition: 'start',
  size: 'small',
  color: 'primary',
  isActive: false,
  disabled: false,
  onToggle: () => {
    /** empty function */
  },
};

const memoCb = (prevProps: SwitchProps, nextProps: SwitchProps) => {
  if (JSON.stringify(prevProps) !== JSON.stringify(nextProps)) {
    return false;
  }
  return true;
};
export default React.memo(Switch, memoCb);

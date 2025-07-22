import {HTMLAttributes, ReactNode} from 'react';

import './Chip.scss';

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  /* It defines the variant of the chip */
  variant?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'danger'
    | 'warning'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-danger'
    | 'outline-success'
    | 'outline-warning'
    | 'outline-info';
  /* It controls the size of the chip small|medium; */
  size?: 'small' | 'medium';
  /* It defines the action on click */
  onRightIconClick?: (id: string) => void;
  /* To define id of the chip */
  id: string;
  /** To define the children of the component */
  children: string | ReactNode;
  /* It indicate the chip in disabled mode */
  disabled?: boolean;
  /* It indicate the chip in left icon */
  leftIcon?: ReactNode;
  /* It indicate the chip in left icon */
  rightIcon?: ReactNode;
}

function Chip(props: ChipProps) {
  const {
    id,
    variant,
    size,
    children,
    onRightIconClick,
    disabled,
    leftIcon,
    rightIcon,
  } = props;

  return (
    <div
      id={id}
      className={`${variant} ${size} base-chip ${disabled && 'disable'}`}
      data-testid='chip-elem'>
      {leftIcon && (
        <span data-testid='left-icon' className={`left-icon-${size}`}>
          {leftIcon}
        </span>
      )}
      <span>{children}</span>
      {rightIcon && (
        <span
          data-testid='right-icon'
          className={`${variant} close-icon`}
          onClick={() => onRightIconClick && onRightIconClick(id)}
          aria-hidden='true'>
          {rightIcon}
        </span>
      )}
    </div>
  );
}
export default Chip;

Chip.defaultProps = {
  variant: 'primary',
  size: 'small',
  onRightIconClick: () => {
    /** */
  },
  disabled: false,
  leftIcon: ``,
  rightIcon: ``,
};

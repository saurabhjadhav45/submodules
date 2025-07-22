import React, {
  ButtonHTMLAttributes,
  ForwardedRef,
  MouseEvent,
  ReactElement,
  ReactNode,
  forwardRef,
} from 'react';

import Loader from '../Loader/Loader';
import './Button.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * It defines the variant of the button
   */
  variant?: 'text' | 'contained' | 'outlined';
  /**
   * It defines the color of the button
   */
  color?: string;
  /* It controls the size of the button small|medium|large; */
  size?: 'small' | 'medium' | 'large';
  /* It indicate the button in disabled mode */
  disabled?: boolean;
  /* It defines the action on click */
  onClick?: (e: MouseEvent) => void;
  /* To define id of the button */
  id?: string;
  /** To define the children of the component */
  children: string | ReactNode | ReactElement;
  /** To define the loading */
  isLoading?: boolean;
  /** To pass down ref from parent */
  ref?: ForwardedRef<HTMLButtonElement>;
  rounded?: boolean;
  iconBtn?: boolean;
  className?: string;
  dataTestId?: string;
}
type OmittedProp = Omit<ButtonProps, 'isLoading'>;

const RefButton = forwardRef<HTMLButtonElement, OmittedProp>((props, ref) => {
  const {
    type,
    children,
    variant,
    color,
    rounded,
    size,
    id,
    onClick,
    disabled,
    iconBtn,
    className,
    dataTestId,
  } = props;
  const classes = `${
    disabled ? `${color} disabled` : color
  } ${variant} ${size} ${rounded && `rounded-${size}`} ${
    iconBtn && `icon-btn-${size}`
  } ${className}`;

  return (
    <button
      ref={ref}
      id={id}
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${classes} base-btn`}
      data-testid={dataTestId}>
      {/* The value of the button goes here */}
      {children}
    </button>
  );
});

RefButton.defaultProps = {
  id: '',
  disabled: false,
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  type: 'button',
  ref: null,
  rounded: false,
  iconBtn: false,
  onClick: (e: MouseEvent) => {
    /** empty function */
  },
};

function Button(props: ButtonProps) {
  const {
    id,
    type,
    variant,
    color,
    rounded,
    size,
    onClick,
    disabled,
    children,
    isLoading,
    ref,
    iconBtn,
    className,
    dataTestId,
  } = props;

  return (
    <RefButton
      id={id}
      onClick={onClick}
      disabled={(!iconBtn && isLoading) || disabled}
      variant={variant}
      color={color}
      size={size}
      ref={ref}
      type={type}
      rounded={rounded}
      iconBtn={iconBtn}
      className={className}
      dataTestId={dataTestId}>
      {/* The value of the children goes here */}
      <div className='btn-children'>
        {!iconBtn && isLoading && (
          <div className='btn-loader' data-testid='loading'>
            {isLoading && <Loader isLoading color={variant} />}
          </div>
        )}
        {children}
      </div>
    </RefButton>
  );
}

Button.defaultProps = {
  size: 'medium',
  variant: 'contained',
  color: 'primary',
  ref: null,
  iconBtn: false,
  className: '',
  dataTestId: 'buttonTestId',
  ...RefButton.defaultProps,
};

const memoCb = (prevProps: ButtonProps, newProps: ButtonProps) => {
  const keys = Object.keys(prevProps);
  for (let i = 0; i < keys.length; i += 1) {
    if (
      prevProps[keys[i] as keyof ButtonProps] !==
      newProps[keys[i] as keyof ButtonProps]
    ) {
      return false;
    }
  }
  return true;
};

export default React.memo(Button, memoCb);

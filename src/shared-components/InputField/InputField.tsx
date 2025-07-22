import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  HTMLProps,
  KeyboardEvent,
  ReactNode,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import PasswordEyeCloseIcon from '../icons/PasswordEyeCloseIcon/PasswordEyeCloseIcon';
import PasswordEyeOpenIcon from '../icons/PasswordEyeOpenIcon/PasswordEyeOpenIcon';
import './InputField.scss';

export interface InputProps extends HTMLProps<HTMLInputElement> {
  /**
   *  It defines id
   */
  id?: string;
  /**
   *  It defines label fo the input field
   */
  label?: string;
  /**
   *  It defines placeholder of the input field
   */
  placeholder?: string;
  /**
   *  It defines value of the input field
   */
  value?: string;
  /**
   *  It allows value to remain unchanged
   */
  readOnly?: boolean;
  /**
   *  It defines the type of the input
   */
  type?: 'text' | 'password' | 'number' | 'search' | 'email';
  /**
   *  It sets the minimum length of the input value
   */
  minLength?: number;
  /**
   *  It sets the maximum length of the input value
   */
  maxLength?: number;
  /**
   *  It disables the input field.
   */
  disabled?: boolean;
  /**
   *  Function changes the input value
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /**
   *  Function to get the input value
   */
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  /**
   *  Function changes the blur value
   */
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  /**
   *  Var to prevent to paste text
   */
  isPreventPaste?: boolean;
  /**
   *  Passing data-testid from parent to the input element
   */
  dataTestid?: string;
  /**
   * Name prop on the input field
   */
  name?: string;
  isInvalid?: boolean;
  errorMessage?: string;
  autoComplete?: 'on' | 'off';
  isRequired?: boolean;

  passwordEyeOpenIcon?: ReactNode;
  passwordEyeCloseIcon?: ReactNode;
  isFocused?: boolean;
}
type InputRef =
  | ForwardedRef<HTMLInputElement>
  | {current: HTMLInputElement}
  | null;

type LabelOmitted = Omit<InputProps, 'label'>;
/** *Ref supporting Input component */
const RefEnabledInput = forwardRef<HTMLInputElement, LabelOmitted>(
  (props: LabelOmitted, ref) => {
    const {
      id,
      type,
      placeholder,
      value,
      disabled,
      maxLength,
      minLength,
      onChange,
      onBlur,
      isPreventPaste,
      onKeyDown,
      readOnly,
      dataTestid,
      name,
      autoComplete,
    } = props;

    return (
      <input
        id={id}
        ref={ref}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        readOnly={readOnly}
        disabled={disabled}
        value={value}
        data-testid={dataTestid}
        name={name}
        autoComplete={autoComplete}
        onPaste={
          isPreventPaste ? (event) => event?.preventDefault() : undefined
        }
      />
    );
  }
);
RefEnabledInput.defaultProps = {
  id: '',
  readOnly: false,
  disabled: false,
  dataTestid: 'input',
  placeholder: '',
  maxLength: 524288,
  minLength: 1,
  autoComplete: 'off',
  onChange: (e: ChangeEvent<HTMLInputElement>) => e.target.value,
};

function InputField(props: InputProps) {
  const {
    readOnly,
    minLength,
    maxLength,
    placeholder,
    value,
    type,
    id,
    label,
    disabled,
    onChange,
    onBlur,
    isPreventPaste,
    onKeyDown,
    dataTestid,
    name,
    errorMessage,
    isInvalid,
    autoComplete,
    isRequired,
    passwordEyeCloseIcon,
    passwordEyeOpenIcon,
    isFocused,
  } = props;

  /** HTML input ref */
  const inputRef: InputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus();
    }
  }, [isFocused]);
  const [isViewPassword, setIsViewPassword] = useState(false);

  /** set type */
  const textOrPass = isViewPassword ? 'text' : 'password';
  const determineType = type === 'password' ? textOrPass : type;

  const viewPasswordHandler = useCallback((): void => {
    setIsViewPassword(!isViewPassword);
  }, [isViewPassword]);

  return (
    <div className='input-container'>
      <div
        className={`form-input input-group pr-1 ${disabled && 'disabled'} ${
          isInvalid && 'invalid'
        }`}
        data-testid='focus-btn'>
        <RefEnabledInput
          ref={inputRef}
          id={id}
          readOnly={readOnly}
          minLength={minLength}
          maxLength={maxLength}
          type={determineType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          isPreventPaste={isPreventPaste}
          onKeyDown={onKeyDown}
          dataTestid={dataTestid}
          disabled={disabled}
          name={name}
          autoComplete={autoComplete}
        />

        {type === 'password' && (
          <button
            onClick={() => viewPasswordHandler()}
            type='button'
            className='password-icon'
            data-testid='viewBtn'>
            {isViewPassword ? passwordEyeCloseIcon : passwordEyeOpenIcon}
          </button>
        )}

        {label && (
          <label data-testid='label' htmlFor={id}>
            <span className={`fs-sm ${isRequired && 'label-star'}`}>
              {label}
            </span>
          </label>
        )}
      </div>
      {isInvalid && <p className='error-message'>{errorMessage}</p>}
    </div>
  );
}

export default memo(InputField);
InputField.defaultProps = {
  id: '',
  label: '',
  type: 'text',
  name: '',
  isInvalid: false,
  errorMessage: '',
  isRequired: false,
  isPreventPaste: false,
  passwordEyeOpenIcon: <PasswordEyeOpenIcon />,
  passwordEyeCloseIcon: <PasswordEyeCloseIcon />,
  ...RefEnabledInput.defaultProps,
};

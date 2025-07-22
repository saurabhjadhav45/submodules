import React, {ChangeEvent, RefObject, useRef} from 'react';

import './TextArea.scss';

export interface TextAreaProps {
  /**
   *  It defines id
   */
  id?: string;
  /**
   *  It defines label fo the input field
   */
  label?: string;
  /**
   *  It defines value of the input field
   */
  value: string;
  /**
   *  It allows value to remain unchanged
   */
  readOnly?: boolean;
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
   * Defines the number of rows
   */
  row?: number;
  /**
   * Defines the custom styling
   */
  className?: string;
  /**
   * It sets the placeholder for the textarea
   */
  placeholder?: string;
  /**
   * It sets the name for the textarea
   */
  name?: string;
  /**
   *  Function changes the input value
   */
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextField(textAreaProps: TextAreaProps) {
  const {
    value,
    label,
    readOnly,
    disabled,
    maxLength,
    id,
    row,
    className,
    placeholder,
    onChange,
    minLength,
    name,
  } = textAreaProps;
  const ref: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);

  return (
    <div className='textarea-container'>
      <div className={`form-textarea ${disabled && 'disabled'} ${className}`}>
        <button
          type='button'
          className='textarea-group'
          data-testid='focus-btn'>
          <textarea
            ref={ref}
            id={id}
            readOnly={readOnly}
            value={value}
            placeholder={placeholder}
            rows={row}
            onChange={onChange}
            maxLength={maxLength}
            minLength={minLength}
            name={name}
            disabled={disabled}
            data-testid='textarea'
            className='mt-1'
          />
          {label && (
            <label data-testid='label' htmlFor={id}>
              <span className='fs-sm'>{label}</span>
            </label>
          )}
        </button>
      </div>
    </div>
  );
}

TextField.defaultProps = {
  disabled: false,
  readOnly: false,
  label: '',
  minLength: 0,
  maxLength: 524288,
  row: 1,
  className: '',
  placeholder: '',
  name: '',
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => e.target.value,
};

const memoCb = (prevProps: TextAreaProps, nextProps: TextAreaProps) => {
  if (JSON.stringify(prevProps) !== JSON.stringify(nextProps)) {
    return false;
  }
  return true;
};
export default React.memo(TextField, memoCb);

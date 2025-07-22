import {
  ChangeEvent,
  ClipboardEvent,
  FocusEvent,
  FocusEventHandler,
  FormEvent,
  KeyboardEvent,
  SyntheticEvent,
} from 'react';

interface Events {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onInput?: (e: SyntheticEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onKeyDown?: (
    e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSelect?: (
    e: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onKeyPress?: (
    e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onInvalid?: (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onPaste?: (
    event: ClipboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onCopy?: (
    event: ClipboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onCut?: (
    event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    event:
      | FocusEvent<HTMLInputElement | HTMLTextAreaElement>
      | FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
export interface InputProps extends Events {
  id?: string;
  label?: string;
  placeholder: string;
  fullWidth?: boolean;
  autoFocus?: boolean;
  value: string;
  readOnly?: boolean;
  isInvalid?: boolean;
  class?: string;
  type: string;
  minLength?: number;
  maxLength?: number;
  size?: number;
  step?: number;
  clearIcon?: boolean;
  clearText?: () => void;
  ref?: string;
  errorMessage?: string;
  wrap?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  rows?: number;
}

export interface PasswordInputProps extends Events {
  value: string;
  isInvalid?: boolean;
  errorMessage?: string;
  label?: string;
}
export interface TextAreaProps extends InputProps {
  autoResize?: boolean;
  rows?: number;
  cols?: number;
  textArea?: boolean;
  className?: string;
}

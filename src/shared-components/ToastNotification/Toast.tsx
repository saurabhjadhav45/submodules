import {ReactNode, memo, useCallback} from 'react';

import DangerIcon from '../icons/DangerIcon/DangerIcon';
import InfoIcon from '../icons/InfoIcon/InfoIcon';
import SuccessIcon from '../icons/SuccessIcon/SuccessIcon';
import WarningIcon from '../icons/WarningIcon/WarningIcon';
import './Toast.scss';

type toastTypes = 'warning' | 'success' | 'danger' | 'info';
export interface ToastProps {
  /** Type of Toast (success,error,warning,info) */
  typeofToast?: toastTypes;
  /** ID is unique */
  id: string;
  /** Body content of Toast */
  content: ReactNode;
  /** Heading content of Toast */
  heading?: string;
  /** CloseIcon is required or not */
  isCloseVisible?: boolean;
  /** Toast is to be displayed according position given */
  position?:
    | 'top-right'
    | 'top-left'
    | 'bottom-left'
    | 'bottom-right'
    | 'top'
    | 'static';
  /** Close function helps to send a id to parent or store, with the help of this id we going to be delete the toast */
  closeFn: (id: string) => void;
  /** Icon is visible or not */
  showIcon?: boolean;
  variant?: 'outlined' | 'filled';
  closeIcon?: ReactNode;
  dataTestId?: string;
}

function Toast(props: ToastProps) {
  const {
    isCloseVisible,
    closeFn,
    typeofToast,
    id,
    content,
    position,
    showIcon,
    heading,
    variant,
    closeIcon,
    dataTestId,
  } = props;

  const toastIcon = useCallback((iconName: string) => {
    switch (iconName) {
      case 'info':
        return <InfoIcon />;
      case 'warning':
        return <WarningIcon />;
      case 'danger':
        return <DangerIcon />;
      default:
        return <SuccessIcon />;
    }
  }, []);

  return (
    <div
      id={id}
      data-testid={dataTestId}
      className={`toast-container border-${
        variant === 'outlined' && `${typeofToast}`
      }  bg-${variant === 'filled' && `${typeofToast}`} ${position} `}>
      {showIcon && (
        <div
          data-testid='toast-icon-container'
          className={` text-${typeofToast} text-${
            variant === 'filled' && 'light'
          }`}>
          <div className='toast-icon'>{toastIcon(typeofToast as string)}</div>
        </div>
      )}
      <div className='toast-text-container'>
        {heading && (
          <p
            data-testid='toast-header'
            className={`toast-header fw-7 text-${
              variant === 'filled' ? 'white' : 'black'
            }`}>
            {heading}
          </p>
        )}
        <div
          className={`toast-content fs-sm fw-4 text-${
            variant === 'filled' ? 'white' : 'black'
          }`}>
          {content}
        </div>
      </div>
      {isCloseVisible && (
        <button
          type='button'
          className={`close-btn ${!heading && 'close-btn-small'} bg-black bg-${
            variant === 'filled' && 'white'
          } text-white text-${variant === 'filled' && `${typeofToast}`} 
           `}
          data-testid='close-btn'
          onClick={() => closeFn && closeFn(id)}>
          {closeIcon}
        </button>
      )}
    </div>
  );
}
export default memo(Toast);

Toast.defaultProps = {
  heading: '',
  position: 'top-left',
  isCloseVisible: false,
  typeofToast: 'success',
  showIcon: true,
  variant: 'outlined',
  closeIcon: '',
  dataTestId: '',
};

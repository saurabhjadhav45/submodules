import React, {ReactNode, useEffect, useRef} from 'react';

import CloseIcon from '../icons/CloseIcon/CloseButtonIcon';
import './Modal.scss';

interface IModalProps {
  isOpen: boolean;
  content?: ReactNode;
  onClose: () => void;
  isCloseIconVisible?: boolean;
  onOutSideClickClose: () => void;
  header?: ReactNode;
  footer?: ReactNode;
  closeIcon?: ReactNode;
}

const useClickOutSide = (handler: () => void) => {
  const domNode = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const maybeHandler = (event: MouseEvent) => {
      if (!domNode.current?.contains(event.target as HTMLElement)) {
        handler();
      }
    };
    document.addEventListener('mousedown', maybeHandler);
    return () => document.removeEventListener('mousedown', maybeHandler);
  }, [handler]);
  return domNode;
};

function Modal(props: IModalProps) {
  const {
    content,
    header,
    footer,
    isCloseIconVisible,
    onOutSideClickClose,
    onClose,
    isOpen,
    closeIcon,
  } = props;

  const domNode = useClickOutSide(onOutSideClickClose);

  if (!isOpen) {
    return null;
  }

  return (
    <div className='modal' role='button'>
      <div className='modal-body' data-testid='modalBody' ref={domNode}>
        <div className='modal-header'>
          {header && <div className='modal-title'>{header}</div>}
          {isCloseIconVisible && (
            <button
              type='button'
              data-testid='modalCloseButton'
              onClick={onClose}
              className='close-button'>
              {closeIcon}
            </button>
          )}
        </div>
        <div className='modal-content'>{content}</div>
        {footer && <div className='modal-footer'>{footer}</div>}
      </div>
    </div>
  );
}

export default Modal;

Modal.defaultProps = {
  content: '',
  header: '',
  footer: '',
  isCloseIconVisible: '',
  closeIcon: <CloseIcon />,
};

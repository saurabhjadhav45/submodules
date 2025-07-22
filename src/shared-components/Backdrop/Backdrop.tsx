import {ReactNode, forwardRef, useEffect, useRef} from 'react';

import './Backdrop.scss';

interface BackdropProps {
  /**
   *  It indicates if the Backdrop is close or open
   */
  isOpen: boolean;
  /**
   * Function to close the backdrop using close icon
   */
  handleClose: () => void;
  /**
   * To define the children of the component
   */
  children: ReactNode;
}

type OmittedBackdropProps = Omit<BackdropProps, 'handleClose'>;

const RefBackdrop = forwardRef<HTMLDivElement, OmittedBackdropProps>(
  (props: OmittedBackdropProps, ref) => {
    const {children, isOpen} = props;

    return (
      <div
        data-testid='backdrop-container'
        className={isOpen ? 'backdrop-wrapper' : 'backdrop-nonactive'}
        ref={ref}>
        {children}
      </div>
    );
  }
);

RefBackdrop.defaultProps = {};

function Backdrop(props: BackdropProps) {
  const {children, handleClose, isOpen} = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const eventHandler = (e: MouseEvent) => {
      if (e.target === ref.current) {
        handleClose();
      }
    };
    window.addEventListener('click', eventHandler);
    return () => window.removeEventListener('click', eventHandler);
  }, [handleClose, ref]);

  return (
    <RefBackdrop isOpen={isOpen} ref={ref}>
      {children}
    </RefBackdrop>
  );
}

Backdrop.defaultProps = {
  ...RefBackdrop.defaultProps,
};

export default Backdrop;

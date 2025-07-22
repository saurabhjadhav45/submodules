import {ReactNode, memo, useCallback, useMemo, useState} from 'react';

import './Tooltip.scss';

export interface TooltipProps {
  behavior?: 'focus' | 'hover';
  children: ReactNode;
  content: ReactNode | string;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  hasArrowPointer?: boolean;
  /** this variantClassName prop acts as className with the help of this we change the styling and functionality of tooltip */
  pointerClassName?: string;
  className?: string;
  dataTestId?: string;
}

function Tooltip(props: TooltipProps) {
  const {
    children,
    behavior,
    content,
    direction,
    hasArrowPointer,
    pointerClassName,
    className,
    dataTestId,
  } = props;
  const [isHover, setIsHover] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const showToolTip = useMemo(() => {
    if (behavior === 'focus') {
      return isFocus;
    }
    return isHover;
  }, [behavior, isHover, isFocus]);

  const handleMouseEnter = useCallback(() => setIsHover(true), []);
  const handleMouseLeave = useCallback(() => setIsHover(false), []);

  const handleFocus = useCallback(() => setIsFocus(true), []);

  const handleBlur = useCallback(() => setIsFocus(false), []);
  return (
    <div className={`display-inline ${className}`}>
      <div
        className={content ? 'tooltip-wrapper' : ''}
        data-testid={dataTestId}>
        {showToolTip && content ? (
          <div
            className={`${
              hasArrowPointer ? 'tooltip-arrow' : 'tooltip-tip'
            } tooltip-${direction} fs-sm ${pointerClassName}`}>
            <div className='content-tag'>{content}</div>
          </div>
        ) : null}
        {hasArrowPointer && showToolTip && content ? (
          <div className={`tip tip-${direction} ${pointerClassName}`}>{}</div>
        ) : null}
        <span
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {children}
        </span>
      </div>
    </div>
  );
}

Tooltip.defaultProps = {
  behavior: 'hover',
  hasArrowPointer: true,
  pointerClassName: '',
  direction: 'bottom',
  className: '',
  dataTestId: 'tooltip-wrapper',
};

export default memo(Tooltip);

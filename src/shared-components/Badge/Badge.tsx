import {HTMLAttributes, ReactNode, memo, useCallback} from 'react';

import './Badge.scss';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  /* It defines the color of the badge */
  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'danger'
    | 'warning'
    | 'tertiary';
  /* It defines the variant of the badge */
  variant?: 'dot' | 'standard';
  /* To define id of the badge */
  id: string;
  /** To define the children of the component */
  children: ReactNode;
  /* It indicate the badge icon vertical position */
  vertical?: 'top' | 'bottom';
  /* It indicate the badge icon horizontal position */
  horizontal?: 'left' | 'right';
  /* It indicate the badge content */
  content?: ReactNode;
  /* It indicate the max value on the badge content */
  maxValue?: number | string;
}

function Badge(props: BadgeProps) {
  const {
    id,
    color,
    variant,
    children,
    vertical,
    horizontal,
    content,
    maxValue,
  } = props;

  const contentType = useCallback(() => {
    if (typeof content === 'number') return true;
    return false;
  }, [content]);

  const strToNum = useCallback(
    (isMaxValue: boolean) => {
      const dataContent = isMaxValue
        ? (maxValue as number)
        : (content as number);
      return dataContent;
    },
    [content, maxValue]
  );

  const showContent = useCallback(() => {
    const val = strToNum(false);
    const maxVal = maxValue && strToNum(true);
    if (maxVal && maxVal < val) return `${maxVal}+`;
    return `${val}`;
  }, [maxValue, strToNum]);

  return (
    <div id={id} className={`base-badge ${variant}`} data-testid='badge-elem'>
      {variant === 'standard' ? (
        <span
          className={`${vertical}-${horizontal} icon-type 
          ${content && color} ${variant}-type`}
          data-testid='standard-elem'>
          {content && contentType() ? showContent() : content}
        </span>
      ) : (
        <span
          className={`${color} ${variant}-type ${vertical}-${horizontal}`}
          data-testid='dot-elem'
        />
      )}
      <div className='content'> {children}</div>
    </div>
  );
}

export default memo(Badge);

Badge.defaultProps = {
  color: 'primary',
  variant: 'standard',
  vertical: '',
  horizontal: 'right',
  content: '',
  maxValue: '',
};

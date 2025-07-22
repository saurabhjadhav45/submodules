import {CSSProperties, ReactNode} from 'react';

import './Link.scss';

export interface Props {
  /**
   * It indicate the link
   */
  href: string;
  /**
   * It indicate the children string
   */
  children: string | ReactNode;
  /**
   * It indicate the style
   */
  underline?: 'hover' | 'always';
  /**
   *  specifies where to open the linked document.
   */
  target?: string;
  /**
   *   specify a unique id for an HTML element.
   */
  id?: string;
  /** To define user-defined style */
  style?: CSSProperties;
  /* It defines the action on click */
  onClick?: () => void;

  className?: ReactNode;
}

function Link({
  children,
  href,
  underline,
  target,
  id,
  style,
  onClick,
  className,
}: Props) {
  const classes = `default-link ${className} ${underline && underline}`;
  return (
    <a
      href={href}
      className={classes}
      target={target}
      id={id}
      style={style}
      onClick={onClick}>
      {children}
    </a>
  );
}

export default Link;

Link.defaultProps = {
  underline: '',
  target: '_self',
  id: '',
  onClick: () => {
    /** empty function */
  },
  style: {},
  className: '',
};

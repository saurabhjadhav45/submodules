import {CSSProperties, ReactNode, memo} from 'react';

import './Card.scss';

interface Props {
  /**
   * It indicate the card Header
   */
  header?: ReactNode | string;
  /**
   * It indicate the card content
   */
  content?: ReactNode | string;
  /**
   * It indicate the card footer
   */
  footer?: ReactNode | string;
  /**
   * It indicate add border to card
   */
  border?: boolean;
  /** To define user-defined style */
  style?: CSSProperties;
}

function Card({header, content, footer, border, style}: Props) {
  return (
    <div className={`card-wrapper rounded ${border && 'border'}`} style={style}>
      {header && <div className='card-header'>{header}</div>}
      {content && <div className='card-content'>{content}</div>}
      {footer && <div className='card-footer'>{footer}</div>}
    </div>
  );
}

export default memo(Card);

Card.defaultProps = {
  header: '',
  content: '',
  footer: '',
  border: false,
  style: {},
};

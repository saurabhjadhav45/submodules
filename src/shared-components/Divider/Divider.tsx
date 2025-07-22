import {CSSProperties, memo} from 'react';

import './Divider.scss';

export interface Props {
  type: 'dashed' | 'dotted' | 'solid';
  text?: string;
  textAlign?: 'left' | 'right' | 'center';
  orientation?: 'vertical';
  style?: CSSProperties;
  classes?: string;
}

function Divider({type, orientation, text, style, textAlign, classes}: Props) {
  const className = `divider-${textAlign} ${type} ${orientation} ${classes} ${
    text && 'divider-text'
  }`;
  return (
    <div data-testid='divider'>
      <hr className={className} data-content={text} style={style} />
    </div>
  );
}

export default memo(Divider);

Divider.defaultProps = {
  text: '',
  textAlign: 'center',
  orientation: '',
  style: {},
  classes: '',
};

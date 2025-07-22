import {ReactNode} from 'react';

import EmptyIcon from '../icons/EmptyIcon/EmptyIcon';
import './Empty.scss';

export interface EmptyProps {
  emptyIcon?: ReactNode;
  content?: ReactNode;
  headingText?: string;
}

function Empty(props: EmptyProps) {
  const {emptyIcon, headingText, content} = props;
  return (
    <div className='empty-wrapper'>
      <div className='empty-icon'>{emptyIcon}</div>
      <div className='heading-text'>{headingText}</div>
      <div className='empty-content fw-3 text-secondary'>{content}</div>
    </div>
  );
}

Empty.defaultProps = {
  emptyIcon: <EmptyIcon />,
  content: 'No Data found',
  headingText: '',
};

export default Empty;

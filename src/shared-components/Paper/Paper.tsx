import React, {ReactNode} from 'react';

import './Paper.scss';

export interface PaperProps {
  variant?: 'outlined' | 'elevation';
  children?: ReactNode;
  elevation?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24;
  square?: boolean;
}

function Paper(props: PaperProps) {
  const {variant, children, elevation, square} = props;
  const borderType = square ? 'square' : 'rounded';
  return (
    <div
      className={`paper-wrapper-${borderType} ${
        variant === `outlined` ? 'outlined-paper' : `elevation-${elevation}`
      }`}
      data-testid='paper'>
      {children}
    </div>
  );
}
export default React.memo(Paper);
Paper.defaultProps = {
  variant: 'outlined',
  elevation: 1,
  square: false,
  children: '',
};

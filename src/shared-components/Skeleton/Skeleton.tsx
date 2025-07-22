import {memo} from 'react';

import './Skeleton.scss';

interface Props {
  /**
   * It indicate type of the skeleton
   */
  type: 'thumbnail' | 'text' | 'title' | 'avatar' | 'rectangle';
  /**
   * It indicate width of the skeleton
   */
  width?: string;
  /**
   * It indicate height of the skeleton
   */
  height?: string;
  /**
   * It indicate animation of the skeleton
   */
  animation?: 'wave' | 'none';
}

function Skeleton({type, width, height, animation}: Props) {
  const classes = `skeleton animation_${animation} ${type}`;
  return (
    <div
      className={classes}
      data-testid='skeleton-test'
      style={{width: `${width}`, height: `${height}`}}
    />
  );
}

export default memo(Skeleton);

Skeleton.defaultProps = {
  width: '',
  height: '',
  animation: 'none',
};

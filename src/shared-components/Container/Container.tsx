import {CSSProperties} from 'react';

import './Container.scss';

interface Props {
  /** To define the children of the component */
  children: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: string;
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   *
   */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  style?: CSSProperties;
}

function Container({children, maxWidth, style, classes}: Props) {
  const className = `container-${maxWidth} ${classes}`;
  return (
    <div>
      <div className={className} style={style} data-testid='container'>
        {children}
      </div>
    </div>
  );
}

export default Container;

Container.defaultProps = {
  classes: '',
  maxWidth: 'sm',
  style: {},
};

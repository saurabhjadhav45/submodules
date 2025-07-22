import {memo} from 'react';

import './Loader.scss';

export interface ILoaderProps {
  /** To define the render loader component */
  isLoading: boolean;
  content?: JSX.Element | string;
  color?: string;
  gif?: string;
}
function Loader(props: ILoaderProps) {
  const {isLoading, content, color, gif} = props;
  if (!isLoading) {
    return null;
  }
  return (
    <div className='main-loader-wrapper'>
      {gif ? (
        <div className='gif'>
          <img src={gif} alt='loading...' />
          {content && <div className='loader-content'>{content}</div>}
        </div>
      ) : (
        <div className='loader' id='mainLoader'>
          <svg className='spinner' viewBox='25 25 50 50'>
            <circle style={{stroke: `${color}`}} cx='50' cy='50' r='20' />
          </svg>
          {content && <div className='loader-content'>{content}</div>}
        </div>
      )}
    </div>
  );
}

export default memo(Loader);

Loader.defaultProps = {
  content: '',
  color: '',
  gif: '',
};

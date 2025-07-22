import {render} from '@testing-library/react';

import Gif from '../../assets/images/loader.svg';
import Loader from './Loader';

describe('MainLoader component', () => {
  it('should render Loader with content if isLoading true', async () => {
    render(<Loader isLoading content='Loading...' color='' />);
    expect(document.querySelectorAll('.loader')).toHaveLength(1);
  });

  it('should not render Loader component if isLoading false', async () => {
    render(<Loader isLoading={false} content='Loading...' color='' />);
    expect(document.querySelectorAll('.loader')).toHaveLength(0);
  });
  it('should render Loader with image', async () => {
    render(<Loader isLoading content='Loading...' color='' gif={Gif} />);
    expect(document.querySelectorAll('.gif')).toHaveLength(1);
  });
});

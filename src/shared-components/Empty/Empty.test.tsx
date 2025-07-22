import {render} from '@testing-library/react';

import Empty from './Empty';

describe('render the component', () => {
  it('should component render with default props', () => {
    const {container} = render(<Empty />);
    expect(container.firstChild).toHaveClass('empty-wrapper');
  });
});

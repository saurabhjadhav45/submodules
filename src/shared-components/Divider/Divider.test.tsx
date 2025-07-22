import {render, screen} from '@testing-library/react';

import Divider from './Divider';

test('Should render divider component', () => {
  render(<Divider type='dashed' text='text' />);
  expect(screen.getByTestId('divider')).toBeInTheDocument();
});

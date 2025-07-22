import {render, screen} from '@testing-library/react';

import Skeleton from './Skeleton';

test('Should render skeleton Component', () => {
  render(<Skeleton type='text' />);
  expect(screen.getByTestId('skeleton-test')).toBeInTheDocument();
});

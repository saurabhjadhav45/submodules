import {render, screen} from '@testing-library/react';

import Container from './Container';

test('Should render card component', () => {
  render(
    <Container>
      <div />
    </Container>
  );
  expect(screen.getByTestId('container')).toBeInTheDocument();
});

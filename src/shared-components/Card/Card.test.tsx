import {render, screen} from '@testing-library/react';

import Card from './Card';

test('Should render card component', () => {
  render(
    <Card
      header='Heading'
      content='this is Content'
      footer='footer element'
      border
    />
  );
  expect(screen.getByText(/Heading/i)).toBeInTheDocument();
  expect(screen.getByText(/this is Content/i)).toBeInTheDocument();
  expect(screen.getByText(/footer element/i)).toBeInTheDocument();
});

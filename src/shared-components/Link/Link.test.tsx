import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import Link from './Link';

test('Should render Link Component', () => {
  render(
    <BrowserRouter>
      <Link href='/' underline='always'>
        Home
      </Link>
    </BrowserRouter>
  );
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});

it('Should perform click event', () => {
  render(<Link href='about'>About</Link>);
  const linkElement = screen.getByRole('link');
  expect(linkElement).toBeInTheDocument();
  expect(Link.defaultProps.onClick()).toBe(undefined);
});

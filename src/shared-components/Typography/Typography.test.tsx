import {render, screen} from '@testing-library/react';

import Typography from './Typography';

describe('Typography component testing', () => {
  it('Should render the the component with default props', () => {
    render(<Typography>Hi this is Typography</Typography>);

    const typographyElement = screen.getByTestId('typography');

    expect(typographyElement).toBeInTheDocument();
  });

  it('Should render the the component with variant subtitle1 props', () => {
    render(
      <Typography variant='subtitle1' gutterBottom>
        Hi this is Typography
      </Typography>
    );

    const typographyElement = screen.getByTestId('typography');

    expect(typographyElement).toBeInTheDocument();
  });

  it('Should render the the component with variant subtitle2 props', () => {
    render(
      <Typography variant='subtitle2' gutterBottom>
        Hi this is Typography
      </Typography>
    );

    const typographyElement = screen.getByTestId('typography');

    expect(typographyElement).toBeInTheDocument();
  });

  it('Should render the the component with variant body2 props', () => {
    render(
      <Typography variant='body2' gutterBottom>
        Hi this is Typography
      </Typography>
    );

    const typographyElement = screen.getByTestId('typography');

    expect(typographyElement).toBeInTheDocument();
  });

  it('Should render the the component with variant button props', () => {
    render(
      <Typography variant='button' gutterBottom noWrap>
        Hi this is Typography
      </Typography>
    );

    const typographyElement = screen.getByTestId('typography');

    expect(typographyElement).toBeInTheDocument();
  });

  it('Should render the the component with variant caption props', () => {
    render(
      <Typography variant='caption' gutterBottom>
        Hi this is Typography
      </Typography>
    );

    const typographyElement = screen.getByTestId('typography');

    expect(typographyElement).toBeInTheDocument();
  });

  it('Should render the the component with variant header props', () => {
    render(
      <Typography variant='h1' gutterBottom>
        Hi this is Typography
      </Typography>
    );

    const typographyElement = screen.getByTestId('typography');

    expect(typographyElement).toBeInTheDocument();
  });

  it('Should render the the component with variant header props', () => {
    render(
      <Typography variant='h6' gutterBottom>
        Hi this is Typography
      </Typography>
    );

    const typographyElement = screen.getByTestId('typography');

    expect(typographyElement).toBeInTheDocument();
  });
});

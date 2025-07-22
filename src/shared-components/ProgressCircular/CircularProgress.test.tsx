import {render, screen} from '@testing-library/react';

import CircularProgress from './CircularProgress';

describe('render test the circularProgress component ', () => {
  it('should render the circularProgress with default props', () => {
    render(<CircularProgress progress={25} />);

    const container = screen.getByTestId('pro-cir-warper');
    const progressPercent = screen.getByTestId('progress-percent');

    expect(container).toBeInTheDocument();
    expect(progressPercent).toBeInTheDocument();
  });

  it('should render the circularProgress without percentage', () => {
    render(<CircularProgress progress={25} showProgressPercent={false} />);

    const progressPercent = screen.queryByTestId('progress-percent');
    expect(progressPercent).not.toBeInTheDocument();
  });

  it('functionality part of circularProgress component (progress above the total)', () => {
    render(<CircularProgress progress={150} />);

    const progressPercent = screen.queryByTestId('progress-percent');

    expect(progressPercent).toHaveTextContent('100%');
  });

  it('functionality part of circularProgress component (progress in negative)', () => {
    render(<CircularProgress progress={-150} />);

    const progressPercent = screen.queryByTestId('progress-percent');

    expect(progressPercent).toHaveTextContent('0%');
  });
});

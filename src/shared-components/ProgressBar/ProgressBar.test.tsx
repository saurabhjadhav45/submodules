import {render, screen} from '@testing-library/react';

import ProgressBar from './ProgressBar';

describe('Test the ProgressBar component', () => {
  test('should render Progress bar component', () => {
    render(
      <ProgressBar bgColor='primary' progress={70} showProgressPercentage />
    );
    expect(screen.getByTestId('progress-bar')).toBeInTheDocument();
    expect(screen.getByTestId('pro-bg')).toBeInTheDocument();
    expect(screen.getByTestId('prog-percent')).toBeInTheDocument();
  });

  test('should render percentage', () => {
    render(
      <ProgressBar bgColor='primary' progress={70} showProgressPercentage />
    );
    expect(screen.getByTestId('progress-bar')).toBeInTheDocument();
    expect(screen.getByText('70%')).toBeInTheDocument();
  });
  test('should render percentage 100% in progress exceeds more then total', () => {
    render(
      <ProgressBar bgColor='primary' progress={150} showProgressPercentage />
    );
    expect(screen.getByTestId('progress-bar')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
  });
  test('should render percentage 0% in negative progress', () => {
    render(
      <ProgressBar bgColor='primary' progress={-30} showProgressPercentage />
    );
    expect(screen.getByTestId('progress-bar')).toBeInTheDocument();
    expect(screen.getByText('0%')).toBeInTheDocument();
  });
});

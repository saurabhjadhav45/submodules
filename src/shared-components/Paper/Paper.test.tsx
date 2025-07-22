import {render} from '@testing-library/react';

import Paper from './Paper';

describe('Paper component', () => {
  it('Should render default Paper', () => {
    const {getByTestId} = render(<Paper />);
    const paper = getByTestId('paper');
    expect(paper).toBeInTheDocument();
  });

  it('Should render elevated Paper', () => {
    const {getByTestId} = render(<Paper variant='elevation' />);
    const paper = getByTestId('paper');
    expect(paper.classList).toContain('elevation-1');
  });

  it('Should render sqaure Paper', () => {
    const {getByTestId} = render(<Paper square />);
    const paper = getByTestId('paper');
    expect(paper.classList).toContain('paper-wrapper-square');
  });

  it('Should render outlined Paper', () => {
    const {getByTestId} = render(<Paper variant='outlined' />);
    const paper = getByTestId('paper');
    expect(paper.classList).toContain('outlined-paper');
  });

  it('Should render memoized component with diffrent props', () => {
    const {rerender, getByTestId} = render(<Paper variant='outlined'>1</Paper>);
    const paper = getByTestId('paper');
    expect(paper.classList).toContain('outlined-paper');

    rerender(<Paper variant='elevation'>1</Paper>);
    expect(paper.classList).not.toContain('outlined-paper');
  });

  it('Should render memoized component with same props', () => {
    const {rerender, getByTestId} = render(<Paper variant='outlined'>1</Paper>);
    const paper = getByTestId('paper');
    expect(paper.classList).toContain('outlined-paper');
    rerender(<Paper variant='outlined'>1</Paper>);
    expect(paper.classList).toContain('outlined-paper');
  });
});

import {fireEvent, render, screen} from '@testing-library/react';

import Backdrop from './Backdrop';

describe('Backdrop Component', () => {
  it('should render the component properly', async () => {
    render(
      <Backdrop isOpen handleClose={() => jest.fn()}>
        Hello
      </Backdrop>
    );
    expect(screen.getByTestId('backdrop-container')).toBeInTheDocument();
  });

  it('should close onClick outside', async () => {
    const closeBackdrop = jest.fn();
    render(
      <div id='backdrop-container'>
        <Backdrop isOpen handleClose={closeBackdrop}>
          Hello
        </Backdrop>
      </div>
    );
    const container = screen.getByTestId('backdrop-container');
    fireEvent.click(container);
    expect(closeBackdrop).toHaveBeenCalledTimes(1);
  });

  it('should close onClick inside, ELSE CONDITION', async () => {
    const closeBackdrop = jest.fn();
    render(
      <div id='backdrop-container'>
        <Backdrop isOpen handleClose={closeBackdrop}>
          <div data-testid='child-container'>Hello</div>
        </Backdrop>
      </div>
    );
    const container = screen.getByTestId('child-container');
    fireEvent.click(container);
    expect(closeBackdrop).toHaveBeenCalledTimes(0);
  });

  it('should render with isOpen close', async () => {
    const closeBackdrop = jest.fn();
    render(
      <Backdrop isOpen={false} handleClose={closeBackdrop}>
        Hello
      </Backdrop>
    );
  });
});

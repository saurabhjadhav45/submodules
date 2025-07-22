/**
 * imports
 * library
 * react-testing methods
 * Chip component
 */
import {fireEvent, render, screen} from '@testing-library/react';

import Chip from './Chip';

describe('Chip Component', () => {
  it('Should render default Chip and not called function', () => {
    const mockFn = jest.fn();
    render(
      <Chip id='1' disabled>
        Small Chip
      </Chip>
    );
    const chipElem = screen.getByTestId('chip-elem');
    expect(chipElem).toBeInTheDocument();

    expect(mockFn).toHaveBeenCalledTimes(0);
  });

  it('Should render primary and small Chip and perform click event', () => {
    const mockFn = jest.fn();
    render(
      <Chip
        id='1'
        variant='primary'
        size='small'
        onRightIconClick={mockFn}
        rightIcon
        leftIcon>
        Small Chip
      </Chip>
    );

    const chipElem = screen.getByTestId('chip-elem');
    expect(chipElem).toBeInTheDocument();

    const leftIcon = screen.getByTestId('left-icon');
    expect(leftIcon).toBeInTheDocument();

    const closeIcon = screen.getByTestId('right-icon');
    fireEvent.click(closeIcon);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('Should render primary and small Chip and perform click event if close chip available', () => {
    render(
      <Chip id='1' variant='primary' size='small' rightIcon>
        Small Chip
      </Chip>
    );

    const chipElem = screen.getByTestId('chip-elem');
    expect(chipElem).toBeInTheDocument();

    const closeIcon = screen.getByTestId('right-icon');
    fireEvent.click(closeIcon);
  });
});

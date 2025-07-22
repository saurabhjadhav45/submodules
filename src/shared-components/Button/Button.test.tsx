/**
 * imports
 * library
 * react-testing methods
 * Button component
 */
import {fireEvent, render, screen} from '@testing-library/react';

import ButtonMemo from './Button';

const Button = ButtonMemo.type;

describe('Button component', () => {
  it('Should render default button without click prop', () => {
    render(<Button>small Button</Button>);
    Button.defaultProps.onClick = jest.fn();
    const btnElement = screen.getByRole('button');
    // expecting button
    expect(btnElement).toBeInTheDocument();
    fireEvent.click(btnElement);
    expect(Button.defaultProps.onClick).toBeDefined();
  });

  it('Should render primary and small Button and peroform click event', () => {
    const mockFn = jest.fn();
    // Button component rendere
    render(
      <Button variant='contained' color='primary' onClick={mockFn} size='small'>
        small Button
      </Button>
    );
    const btnElement = screen.getByRole('button');

    // expecting button
    expect(btnElement).toBeInTheDocument();

    // performing click event
    fireEvent.click(btnElement);
    expect(mockFn).toHaveBeenCalled();

    //
    expect(btnElement.className.includes('primary')).toBe(true);
    expect(btnElement.className.includes('small')).toBe(true);
  });

  it('Should render disabled and large button', () => {
    render(
      <Button disabled variant='contained' color='primary' size='large'>
        small Button
      </Button>
    );
    const btnElement = screen.getByRole('button');
    expect(btnElement.className.includes('disabled')).toBe(true);
    expect(btnElement.className.includes('large')).toBe(true);
    expect(btnElement).toBeDisabled();
  });

  it('Should render loading button', () => {
    const {getByTestId} = render(
      <Button isLoading variant='contained' color='primary' size='small'>
        small Button
      </Button>
    );
    const btnElement = document.querySelector('button');
    const loading = getByTestId('loading');
    expect(btnElement).toBeDisabled();
    expect(loading).toHaveClass('btn-loader');
  });

  it('Should render rounded button', () => {
    render(
      <Button rounded variant='contained' color='primary' size='large'>
        large Button
      </Button>
    );
    const btnElement = document.querySelector('button');
    expect(btnElement?.classList).toContain('rounded-large');
  });

  it('Should render circular button', () => {
    render(
      <Button rounded variant='contained' iconBtn color='primary' size='small'>
        1
      </Button>
    );
    const btnElement = document.querySelector('button');
    expect(btnElement?.classList).toContain('icon-btn-small');
  });
  it('Should render memoized component with diffrent props', () => {
    const {rerender} = render(
      <ButtonMemo rounded iconBtn color='primary' size='small'>
        1
      </ButtonMemo>
    );
    const btnElement = document.querySelector('button');
    expect(btnElement?.classList).toContain('icon-btn-small');
    rerender(
      <ButtonMemo color='secondary' size='medium'>
        1
      </ButtonMemo>
    );
    expect(btnElement?.classList).not.toContain('icon-btn-small');
  });

  it('Should render memoized component with same props', () => {
    const {rerender} = render(
      <ButtonMemo rounded iconBtn color='primary' size='small'>
        1
      </ButtonMemo>
    );
    const btnElement = document.querySelector('button');
    expect(btnElement?.classList).toContain('icon-btn-small');
    rerender(
      <ButtonMemo rounded iconBtn color='primary' size='small'>
        1
      </ButtonMemo>
    );
    expect(btnElement?.classList).toContain('icon-btn-small');
  });
});

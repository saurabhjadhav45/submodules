import {fireEvent, render, screen} from '@testing-library/react';

import Radiobuttion from './Radiobutton';

test('Should render radio Button', () => {
  const isSelected = true;
  const onChange = jest.fn();
  render(<Radiobuttion id='1' isSelected={isSelected} onChange={onChange} />);
  const {getByRole} = screen;
  const radio = getByRole('radio');
  fireEvent.click(radio);
  expect(screen.getByTestId('radioinput')).toBeInTheDocument();
});

test('Should deselect radio button', () => {
  const isSelected = false;
  const onChange = jest.fn();
  render(
    <Radiobuttion
      id='1'
      label='radio'
      isSelected={isSelected}
      onChange={onChange}
    />
  );
  expect(screen.getByTestId('radioinput')).toBeInTheDocument();
});

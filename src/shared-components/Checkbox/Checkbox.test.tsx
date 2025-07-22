import {fireEvent, render, screen} from '@testing-library/react';

import Checkbox from './Checkbox';

test('Should render checkbox Button', () => {
  const onChange = jest.fn();
  render(<Checkbox id='1' onChange={onChange} style={{marginRight: '0'}} />);
  const {getByRole} = screen;
  const checkbox = getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(onChange).toBeCalled();
});

test('Should able to checked checkbox', () => {
  const checked = true;
  const onChange = jest.fn();
  render(
    <Checkbox
      id='1'
      onChange={onChange}
      checked={checked}
      style={{marginRight: '0'}}
    />
  );
  const {getByRole} = screen;
  const checkbox = getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(onChange).toBeCalled();
});

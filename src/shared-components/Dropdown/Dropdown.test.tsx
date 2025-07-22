import {fireEvent, render, screen} from '@testing-library/react';

import Dropdown from './Dropdown';

test('Should render dropdown', () => {
  const optionsList = [
    {
      id: '1',
      value: 'green',
      label: 'Green',
    },
  ];
  const onChange = jest.fn;
  render(<Dropdown onChange={onChange} optionsList={optionsList} />);
  const {getByRole} = screen;
  const dropdown = getByRole('combobox');
  fireEvent.click(dropdown);
  fireEvent.change(dropdown, {target: {value: 'green'}});
  expect(screen.getByText('Green')).toBeInTheDocument();
});

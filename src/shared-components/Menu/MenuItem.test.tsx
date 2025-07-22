import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import homeIcon from '../../assets/images/home.svg';
import MenuItem from './MenuItem';

test('Should render Menu item Component', () => {
  render(
    <BrowserRouter>
      <MenuItem
        text='Home'
        href='1'
        icon={homeIcon}
        submenu={[{text: 'help', href: '11', icon: 'successimg'}]}
      />
    </BrowserRouter>
  );
  expect(screen.getByTestId('side_menu')).toBeInTheDocument();
});

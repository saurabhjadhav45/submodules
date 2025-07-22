import aboutIcon from '../../assets/images/about.png';
import contactsIcon from '../../assets/images/contacts.png';
import homeIcon from '../../assets/images/home.svg?url';
import optionIcon from '../../assets/images/option.png';
import serviceIcon from '../../assets/images/service.png';
import MenuItem from './MenuItem';
import './MenuItem.scss';
import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof MenuItem> = {
  title: 'SideMenu',
  component: MenuItem,
};
export default meta;

type Story = StoryObj<typeof meta>;

function Template() {
  const menuItems = [
    { text: 'Home', icon: homeIcon, href: '1' },
    { text: 'About', href: '2', icon: aboutIcon },
    {
      text: 'Services',
      href: 'help',
      icon: serviceIcon,
      submenu: [
        { text: 'Option 1', href: '11', icon: optionIcon },
        { text: 'Option 2', href: '12', icon: optionIcon },
      ],
    },
    { text: 'Contact', href: '3', icon: contactsIcon },
  ];

  return (
    <div className="sidebar_items">
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.text} {...menuItem} />
      ))}
    </div>
  );
}

export const SideMenu: Story = {
  render: () => (
    <BrowserRouter>
      <Template />
    </BrowserRouter>
  ),
};

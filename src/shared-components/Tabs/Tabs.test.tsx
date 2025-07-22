import {fireEvent, render, screen} from '@testing-library/react';

import PhoneIcon from '../icons/PhoneIcon/PhoneIcon';
import Tabs, {valuesTypes} from './Tabs';

const data: valuesTypes[] = [
  {
    id: 1,
    tabName: 'Tab - 1',
    tabContent: <p> Hi i am Tab - 1</p>,
  },
  {
    id: 2,
    tabName: 'Tab - 2',
    tabContent: <p> Hi i am Tab - 2</p>,
  },
  {
    id: 3,
    tabName: 'Tab - 3',
    tabContent: <p> Hi i am Tab - 3</p>,
  },
];

const dataTextIcons: valuesTypes[] = [
  {
    id: 1,
    icon: <PhoneIcon />,
    tabName: 'Tab - 1',
  },
  {
    id: 2,
    icon: <PhoneIcon />,
    tabName: 'Tab - 2',
  },
  {
    id: 3,
    icon: <PhoneIcon />,
    tabName: 'Tab - 3',
  },
  {
    id: 4,
    icon: <PhoneIcon />,
    tabName: 'Tab - 4',
  },
];
const handleChange = (id: string | number) => {
  return id;
};

describe('Rendering part for Tabs component testing', () => {
  it('should render the Tabs with default props', () => {
    render(<Tabs values={data} onChange={handleChange} />);

    const tabsContainer = screen.getByTestId('tabs-container');
    const tabsButtons = document.querySelectorAll('.tab-button');

    expect(tabsContainer).toBeInTheDocument();
    expect(tabsButtons).toHaveLength(3);

    fireEvent.click(tabsButtons[0]); // tab1 click then
    expect(screen.getByTestId(1)).toBeInTheDocument(); // tab-1 content shown
    expect(screen.queryByTestId(2)).not.toBeInTheDocument(); // not tab-2 content
  });

  it('should render the vertical tabs', () => {
    render(<Tabs values={data} onChange={handleChange} vertical />);

    const verticalTabs = document.querySelector('.tab-vertical');

    expect(verticalTabs).toBeInTheDocument();
  });

  it('should render the Tabs with centered border inactiveTab props ', () => {
    render(
      <Tabs
        values={data}
        onChange={handleChange}
        inactiveTab={1}
        border={false}
        centered
      />
    );

    const tabsButtons = document.querySelectorAll('.tab-button');

    fireEvent.click(tabsButtons[1]); // tab1 click
    expect(screen.queryByTestId(1)).not.toBeInTheDocument(); // not showing tab-1 content bcz of tab-2 is diactive
    expect(screen.queryByTestId(2)).toBeInTheDocument(); // showing content non inactive nearest component
  });

  it('should render the Tabs with icons with text and its alignment default props ', () => {
    render(
      <Tabs
        values={dataTextIcons}
        onChange={handleChange}
        inactiveTab={2}
        border={false}
      />
    );
    const tabsButtons = document.querySelectorAll('.tab-button');
    const icons = screen.getAllByTestId('tab-icon');
    const iconsAlinementTop = document.querySelector('.button-content-topIcon');

    expect(tabsButtons).toHaveLength(4);
    expect(icons).toHaveLength(4);
    expect(iconsAlinementTop).toBeInTheDocument();
  });

  it('should render the Tabs with icons with text and its alignment right props ', () => {
    render(
      <Tabs
        values={dataTextIcons}
        onChange={handleChange}
        border={false}
        iconPosition='right'
      />
    );
    const iconsAlinementRight = document.querySelector(
      '.button-content-rightIcon'
    );
    expect(iconsAlinementRight).toBeInTheDocument();
  });

  it('should render the Tabs with icons with text and its alignment bottom props ', () => {
    render(
      <Tabs
        values={dataTextIcons}
        onChange={handleChange}
        border={false}
        iconPosition='bottom'
      />
    );
    const iconsAlinementBottom = document.querySelector(
      '.button-content-bottomIcon'
    );
    expect(iconsAlinementBottom).toBeInTheDocument();
  });

  it('should render the Tabs with icons with text and its alignment bottom props ', () => {
    render(
      <Tabs
        values={dataTextIcons}
        onChange={handleChange}
        border={false}
        iconPosition='left'
      />
    );
    const iconsAlinementLeft = document.querySelector(
      '.button-content-leftIcon'
    );
    expect(iconsAlinementLeft).toBeInTheDocument();
  });
});

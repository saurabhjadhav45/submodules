import type { Meta, StoryObj } from '@storybook/react';

import PhoneIcon from '../icons/PhoneIcon/PhoneIcon';
import Tabs, {ITabsProps, valuesTypes} from './Tabs';

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

const dataIcons: valuesTypes[] = [
  {
    id: 1,
    icon: <PhoneIcon />,
  },
  {
    id: 2,
    icon: <PhoneIcon />,
  },
  {
    id: 3,
    icon: <PhoneIcon />,
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
const meta: Meta = {
  title: 'Tabs',
  component: Tabs,
};

export default meta;

const Template: StoryObj<ITabsProps> = function TabsComponent(args) {
  const {
    values,
    onChange,
    activeTab,
    inactiveTab,
    border,
    centered,
    vertical,
    iconPosition,
    activeTabColor,
  } = args;
  return (
    <Tabs
      values={values}
      onChange={onChange}
      activeTab={activeTab}
      inactiveTab={inactiveTab}
      border={border}
      centered={centered}
      vertical={vertical}
      iconPosition={iconPosition}
      activeTabColor={activeTabColor}
    />
  );
};

export const defaultTabs = Template.bind({});
export const inactiveTabs = Template.bind({});
export const verticalTabs = Template.bind({});
export const iconTextTabs = Template.bind({});
export const iconTabs = Template.bind({});

defaultTabs.args = {
  values: data,
  onChange: handleChange,
};

inactiveTabs.args = {
  values: data,
  onChange: handleChange,
  inactiveTab: 2,
};

verticalTabs.args = {
  values: data,
  onChange: handleChange,
  vertical: true,
};

iconTabs.args = {
  values: dataIcons,
  onChange: handleChange,
  border: false,
};

iconTextTabs.args = {
  values: dataTextIcons,
  onChange: handleChange,
  border: false,
  iconPosition: 'left',
};

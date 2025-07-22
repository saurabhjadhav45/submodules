import type { Meta, StoryObj } from '@storybook/react';

import HomeIcon from '../icons/HomeIcon/HomeIcon';
import Breadcrumbs, {BreadcrumbType, IBreadcrumbsProps} from './Breadcrumbs';

const meta: Meta = {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
};

export default meta;

const breadcrumbsData: BreadcrumbType[] = [
  {
    id: 1,
    text: 'MUI',
  },
  {
    id: 2,
    text: 'Core',
  },
  {
    id: 3,
    text: 'Breadcrumbs',
  },
];

const breadcrumbsWithIcons: BreadcrumbType[] = [
  {
    id: 1,
    text: 'MUI',
    icon: <HomeIcon width={14} height={14} />,
  },
  {
    id: 2,
    text: 'Core',
    icon: <HomeIcon width={14} height={14} />,
  },
  {
    id: 3,
    text: 'Breadcrumbs',
    icon: <HomeIcon width={14} height={14} />,
  },
];

const breadcrumbsWithROutes: BreadcrumbType[] = [
  {
    id: 1,
    text: 'MUI',
    icon: <HomeIcon width={14} height={14} />,
    route: 'https://perennialsys.com/',
  },
  {
    id: 2,
    text: 'Core',
    icon: <HomeIcon width={14} height={14} />,
    route: 'https://storybook.js.org/',
  },
  {
    id: 3,
    text: 'Breadcrumbs',
    icon: <HomeIcon width={14} height={14} />,
    route: 'https://reactjs.org/',
  },
];

const Template: StoryObj<IBreadcrumbsProps> = function breadcrumbsFun(args) {
  const {
    breadcrumbs,
    separator,
    inactiveBreadcrumbColor,
    activeBreadcrumbColor,
  } = args;
  return (
    <Breadcrumbs
      breadcrumbs={breadcrumbs}
      separator={separator}
      inactiveBreadcrumbColor={inactiveBreadcrumbColor}
      activeBreadcrumbColor={activeBreadcrumbColor}
    />
  );
};

export const defaultBreadcrumbs = Template.bind({});

defaultBreadcrumbs.args = {
  breadcrumbs: breadcrumbsData,
};

export const iconsBreadcrumbs = Template.bind({});

iconsBreadcrumbs.args = {
  breadcrumbs: breadcrumbsWithIcons,
};

export const routeBreadcrumbs = Template.bind({});

routeBreadcrumbs.args = {
  breadcrumbs: breadcrumbsWithROutes,
};

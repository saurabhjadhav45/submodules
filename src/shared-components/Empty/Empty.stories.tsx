import type { Meta, StoryObj } from '@storybook/react';

import EmptyIcon from '../icons/EmptyIcon/EmptyIcon';
import Empty, {EmptyProps} from './Empty';

const meta: Meta = {
  title: 'Empty',
  component: Empty,
};

export default meta;

const Template: StoryObj<EmptyProps> = function empty(args) {
  const {content, emptyIcon} = args;
  return <Empty content={content} emptyIcon={emptyIcon} />;
};

export const defaultEmpty = Template.bind({});

defaultEmpty.args = {
  emptyIcon: <EmptyIcon />,
  content: 'No Data Found',
};

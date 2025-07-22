import type { Meta, StoryObj } from '@storybook/react';

import {ReactComponent as Icon} from '../../assets/images/email.svg';
import Badge, {BadgeProps} from './Badge';

const meta: Meta = {
  title: 'Badge',
  component: Badge,
};
export default meta;

const Template: StoryObj<BadgeProps> = function BadgeComp(args) {
  const {
    id,
    variant,
    color,
    vertical,
    horizontal,
    children,
    content,
    maxValue,
  } = args;

  return (
    <Badge
      id={id}
      variant={variant}
      color={color}
      content={content}
      maxValue={maxValue}
      vertical={vertical}
      horizontal={horizontal}>
      {children}
    </Badge>
  );
};

export const Default = Template.bind({});

Default.args = {
  id: 'badge-default',
  color: 'primary',
  content: 222,
  maxValue: 99,
  variant: 'standard',
  vertical: 'top',
  horizontal: 'right',
  children: <Icon />,
};

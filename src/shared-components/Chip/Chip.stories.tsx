import type { Meta, StoryObj } from '@storybook/react';

import {ReactComponent as CloseIcon} from '../../assets/images/closeIcon.svg';
import {ReactComponent as UserIcon} from '../../assets/images/userIcon.svg';
import Chip, {ChipProps} from './Chip';

const meta: Meta = {
  title: 'Chip',
  component: Chip,
};
export default meta;

const Template: StoryObj<ChipProps> = function ChipComp(args) {
  const {
    id,
    disabled,
    variant,
    leftIcon,
    rightIcon,
    size,
    children = 'Chip Component',
  } = args;

  return (
    <div style={{display: 'flex'}}>
      <Chip
        id={id}
        variant={variant}
        size={size}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        disabled={disabled}
        onRightIconClick={() => {
          /** */
        }}>
        {children}
      </Chip>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  id: 'chip-default',
  variant: 'primary',
  size: 'small',
  leftIcon: <UserIcon />,
  rightIcon: <CloseIcon />,
  children: 'Chip Component',
  disabled: false,
};

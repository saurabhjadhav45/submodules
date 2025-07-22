import type { Meta, StoryObj } from '@storybook/react';
import {useState} from 'react';

import Switch from './Switch';

/** Switch story */

const meta: Meta = {
  title: 'Switch',
  component: Switch,
};

export default meta;
export const Template: StoryObj<typeof Switch> = function SwitchStory(
  args
) {
  const {id, name, isActive, label, labelPosition, color, size, disabled} =
    args;
  const [toggle, setToggle] = useState(isActive);
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <Switch
      id={id}
      name={name}
      isActive={toggle}
      onToggle={toggleHandler}
      labelPosition={labelPosition}
      label={label}
      size={size}
      color={color}
      disabled={disabled}
    />
  );
};

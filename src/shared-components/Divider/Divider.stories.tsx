import type { Meta, StoryObj } from '@storybook/react';

import Divider from './Divider';

export default {
  title: 'Divider',
  component: Divider,
} as Meta<typeof Divider>;

const Template: StoryObj<typeof Divider> = function DividerComponent(
  args
) {
  const {type, text, textAlign, orientation} = args;
  return (
    <Divider
      type={type}
      text={text}
      textAlign={textAlign}
      orientation={orientation}
    />
  );
};

export const DividerComponent = Template.bind({});
export const DividerDashed = Template.bind({});
export const DividerDotted = Template.bind({});
export const DividerWithText = Template.bind({});
export const DividerVericalOrientation = Template.bind({});

DividerComponent.args = {
  type: 'solid',
};

DividerDashed.args = {
  type: 'dashed',
};

DividerDotted.args = {
  type: 'dotted',
};

DividerWithText.args = {
  text: 'text',
  textAlign: 'center',
};

DividerVericalOrientation.args = {
  type: 'solid',
  orientation: 'vertical',
};

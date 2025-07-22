import type { Meta, StoryObj } from '@storybook/react';

import Stepper from './Stepper';

const meta: Meta = {
  title: 'Stepper',
  component: Stepper,
};
export default meta;

export const Template: StoryObj<typeof Stepper> = function StepperStory(
  args
) {
  const {variant} = args;
  const steps = [
    {label: 'Step1', isActive: true, isCompleted: true},
    {label: 'Step2', isActive: true, isCompleted: false},
    {label: 'Step3', isActive: false, isCompleted: false},
  ];

  return <Stepper variant={variant} steps={steps} />;
};

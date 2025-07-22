import type { Meta, StoryObj } from '@storybook/react';

import CircularProgress, {CircularProgressProps} from './CircularProgress';

const meta: Meta = {
  title: 'CircularProgress',
  component: CircularProgress,
};

export default meta;

const Template: StoryObj<CircularProgressProps> = function circularProgress(args) {
  const {
    size,
    progress,
    strokeWidth,
    progressColor,
    total,
    showProgressPercent,
  } = args;
  return (
    <CircularProgress
      size={size}
      progress={progress}
      strokeWidth={strokeWidth}
      progressColor={progressColor}
      total={total}
      showProgressPercent={showProgressPercent}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  progress: 25,
};

import ProgressBar from './ProgressBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProgressBar> = {
  title: 'ProgressBar',
  component: ProgressBar,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 80,
    bgColor: 'primary',
    showProgressPercentage: false,
    total: 100,
  },
};

export const WithPercentage: Story = {
  args: {
    progress: 80,
    bgColor: 'warning',
    showProgressPercentage: true,
    total: 100,
  },
};

export const ZeroProgress: Story = {
  args: {
    progress: 0,
    bgColor: 'danger',
    showProgressPercentage: true,
    total: 100,
  },
};

export const FullProgress: Story = {
  args: {
    progress: 100,
    bgColor: 'success',
    showProgressPercentage: true,
    total: 100,
  },
};

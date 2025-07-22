import type { Meta, StoryObj } from '@storybook/react';

import Skeleton from './Skeleton';

export default {
  title: 'Skeleton',

  component: Skeleton,
} as Meta<typeof Skeleton>;

const Template: StoryObj<typeof Skeleton> = function SkeletonTemplate(
  args
) {
  const {type, width, height, animation} = args;
  return (
    <div>
      <Skeleton
        type={type}
        width={width}
        height={height}
        animation={animation}
      />
    </div>
  );
};

export const SkeletonTitle = Template.bind({});
export const SkeletonText = Template.bind({});
export const SkeletonAvatar = Template.bind({});
export const SkeletonThambnail = Template.bind({});
export const SkeletonRectangle = Template.bind({});

SkeletonTitle.args = {
  type: 'title',
};
SkeletonText.args = {
  type: 'text',
};
SkeletonAvatar.args = {
  type: 'avatar',
};
SkeletonThambnail.args = {
  type: 'thumbnail',
};

SkeletonRectangle.args = {
  type: 'rectangle',
};

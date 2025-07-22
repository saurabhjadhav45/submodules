import Avatar from './Avatar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof meta>;

const AvatarStyle = {
  width: '500px',
  margin: '20px',
  display: 'flex',
  gap: '50px',
};

export const AvatarComponent: Story = {
  render: (args) => (
    <div style={AvatarStyle}>
      <div>
        <Avatar
          firstName={args.firstName}
          lastName={args.lastName}
          rounded={args.rounded}
          imageUrl={args.imageUrl}
          alt={args.alt}
          size={args.size}
        />
      </div>
    </div>
  ),
  args: {
    firstName: 'John',
    lastName: 'David',
    imageUrl:
      'https://res.cloudinary.com/de9kghuz8/image/upload/v1658372152/thumbnail_Newuser_58f9959886.png',
    alt: 'avatar',
  },
};

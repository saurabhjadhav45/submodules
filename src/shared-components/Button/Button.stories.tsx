import Button, { ButtonProps } from './Button';
import DeleteIcon from './assets/icons8-delete.png';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const colors = ['primary', 'secondary', 'info', 'success', 'danger', 'dark', 'warning'] as const;

const meta: Meta<typeof Button> = {
  title: 'Shared Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper wrapper to display a row of buttons
const Row: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>{children}</div>
);

// 1. Solid Buttons
export const SolidButtons: Story = {
  render: () => (
    <Row>
      {colors.map((c) => (
        <Button key={c} variant="contained" color={c} size="small">
          {c.charAt(0).toUpperCase() + c.slice(1)}
        </Button>
      ))}
    </Row>
  ),
  name: 'Solid Buttons',
};

// 2. Text Buttons
export const TextButtons: Story = {
  render: () => (
    <Row>
      {colors.map((c) => (
        <Button key={c} variant="text" color={c} size="small">
          {c.charAt(0).toUpperCase() + c.slice(1)}
        </Button>
      ))}
    </Row>
  ),
  name: 'Text Buttons',
};

// 3. Outlined Buttons
export const OutlinedButtons: Story = {
  render: () => (
    <Row>
      {colors.map((c) => (
        <Button key={c} variant="outlined" color={c} size="small">
          {c.charAt(0).toUpperCase() + c.slice(1)}
        </Button>
      ))}
    </Row>
  ),
  name: 'Outlined Buttons',
};

// 4. Disabled
export const Disabled: StoryObj<ButtonProps> = () => (
  <div style={{ textAlign: 'start' }}>
    <Button disabled variant="contained" color="info" size="small">
      Disabled
    </Button>
  </div>
);

// 5. Size
export const SizeVariants: StoryObj<ButtonProps> = () => (
  <Row>
    <Button variant="outlined" color="outline-primary" size="small">
      Small
    </Button>
    <Button variant="outlined" color="outline-primary" size="medium">
      Medium
    </Button>
    <Button variant="outlined" color="outline-primary" size="large">
      Large
    </Button>
  </Row>
);
SizeVariants.storyName = 'Size';

// 6. Loading
export const Loading: StoryObj<ButtonProps> = () => (
  <Row>
    <Button isLoading size="small">
      Loading...
    </Button>
  </Row>
);

// 7. Rounded
export const Rounded: StoryObj<ButtonProps> = () => (
  <Row>
    <Button rounded variant="outlined" color="success" size="medium">
      Rounded
    </Button>
  </Row>
);

// 8. Circular Button
export const CircularButtons: StoryObj<ButtonProps> = () => (
  <Row>
    {colors.map((c) => (
      <Button key={c} variant="outlined" color={c} iconBtn size="small">
        1
      </Button>
    ))}
  </Row>
);
CircularButtons.storyName = 'Circular button';

// 9. Button with Icon
export const WithIcon: StoryObj<ButtonProps> = () => (
  <Row>
    {/* Circular icon button */}
    <Button variant="contained" color="light" iconBtn size="small">
      <img width={20} height={20} src={DeleteIcon} alt="delete" />
    </Button>
    {/* Square icon button */}
    <Button variant="contained" color="light" size="small">
      <img width={20} height={20} src={DeleteIcon} alt="delete" />
    </Button>
  </Row>
);
WithIcon.storyName = 'Button with icon';

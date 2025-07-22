import Button from '../Button/Button';
import Backdrop from './Backdrop';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof Backdrop> = {
  title: 'Backdrop',
  component: Backdrop,
};

export default meta;
type Story = StoryObj<typeof meta>;

function BackdropStory() {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = (state: boolean) => {
    setIsOpen(state);
  };

  return (
    <>
      <Button type="button" variant="contained" color="info" onClick={() => handleIsOpen(true)}>
        Show Backdrop
      </Button>
      <Backdrop isOpen={isOpen} handleClose={() => handleIsOpen(false)}>
        <div
          style={{
            width: '200px',
            height: '200px',
            background: 'white',
            padding: '2rem',
          }}
        >
          Hello
        </div>
      </Backdrop>
    </>
  );
}

export const BackdropComponent: Story = {
  render: () => <BackdropStory />,
  args: {
    isOpen: false,
  },
};

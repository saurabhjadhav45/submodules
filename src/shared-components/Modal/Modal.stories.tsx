import Modal from './Modal';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof meta>;

function ModalStory(args: any) {
  const { isCloseIconVisible, content, header, footer, closeIcon } = args;
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = (state: boolean) => {
    setIsOpen(state);
  };

  return (
    <>
      <button type="button" onClick={() => handleIsOpen(true)}>
        Click to open modal
      </button>
      <Modal
        isOpen={isOpen}
        isCloseIconVisible={isCloseIconVisible}
        content={content}
        header={header}
        footer={footer}
        closeIcon={closeIcon}
        onClose={() => handleIsOpen(false)}
        onOutSideClickClose={() => handleIsOpen(false)}
      />
    </>
  );
}

export const ModalComponent: Story = {
  render: (args) => <ModalStory {...args} />,
  args: {
    content: 'Content',
    isCloseIconVisible: true,
    header: 'Title',
    footer: 'footer section',
  },
};

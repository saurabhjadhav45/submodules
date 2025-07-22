import {fireEvent, render, screen, waitFor} from '@testing-library/react';

import Modal from './Modal';

describe('Modal component', () => {
  it('should render modal with content', async () => {
    render(
      <Modal
        onOutSideClickClose={() => jest.fn()}
        isOpen
        isCloseIconVisible
        content={<>Some JSX code</>}
        header='header title'
        footer='footer section'
        onClose={() => jest.fn()}
      />
    );
    expect(screen.getByText(/some JSX code/i)).toBeInTheDocument();
  });

  it('should modal close button work', async () => {
    const toggleModal = jest.fn(() => Promise.resolve());

    render(
      <Modal
        isOpen
        isCloseIconVisible
        content={<>Some JSX code</>}
        onClose={toggleModal}
        onOutSideClickClose={() => jest.fn()}
        header=''
        footer=''
      />
    );
    const closeButton = await waitFor(() =>
      screen.getByTestId('modalCloseButton')
    );
    fireEvent.click(closeButton);
    expect(toggleModal).toHaveBeenCalledTimes(1);
  });

  it('should call onClick() when clicking outside', async () => {
    const onClick = jest.fn();
    render(
      <Modal
        isOpen
        onOutSideClickClose={onClick}
        isCloseIconVisible
        content={<>Some JSX code</>}
        onClose={() => jest.fn()}
        header=''
        footer=''
      />
    );
    fireEvent.mouseDown(document.body);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick() when clicking onMdal', async () => {
    const onClick = jest.fn();
    render(
      <Modal
        isOpen
        onOutSideClickClose={onClick}
        isCloseIconVisible
        content={<>Some JSX code</>}
        onClose={() => jest.fn()}
        header=''
        footer=''
      />
    );
    const modalBody = await waitFor(() => screen.getByTestId('modalBody'));
    fireEvent.mouseDown(modalBody);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('should not render modal component', async () => {
    render(
      <Modal
        onOutSideClickClose={() => jest.fn()}
        isCloseIconVisible
        content={<>Some JSX code</>}
        isOpen={false}
        onClose={() => jest.fn()}
        header=''
        footer=''
      />
    );
    expect(document.querySelectorAll('.modal')).toHaveLength(0);
  });
});

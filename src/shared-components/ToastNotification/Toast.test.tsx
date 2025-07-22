import {act, fireEvent, render, screen} from '@testing-library/react';

import Toast from './Toast';

const getIdToast = (id: string) => {
  return id;
};

describe('Test the Toast component', () => {
  it('render the Toast notification component with default props and info icon', async () => {
    await act(async () => {
      render(
        <Toast
          id='0'
          heading='test for success too'
          content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, porro.'
          position='top-right'
          closeFn={getIdToast}
          isCloseVisible={false}
          showIcon
          typeofToast='success'
          variant='filled'
        />
      );
    });
    const button = screen.queryByTestId('close-btn');
    expect(screen.getByTestId('toast-icon-container')).toBeInTheDocument();
    expect(screen.getByTestId('toast-header')).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });

  it('render the button and fireClick event and warning icon', async () => {
    const handleClick = jest.fn();
    await act(() => {
      render(
        <Toast
          id='1'
          typeofToast='warning'
          content='Lorem ipsum dolor sit, amet consectetur adipisicing eplit. Nihil, porro.'
          isCloseVisible
          position='bottom-right'
          closeFn={handleClick}
          heading=''
          showIcon
          variant='filled'
        />
      );
    });
    const button = screen.getByTestId('close-btn');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledWith('1');
  });

  it('render the button and fireClick event and danger icon', async () => {
    const handleClick = jest.fn();
    await act(() => {
      render(
        <Toast
          id='1'
          typeofToast='danger'
          content='Lorem ipsum dolor sit, amet consectetur adipisicing eplit. Nihil, porro.'
          isCloseVisible
          position='bottom-right'
          closeFn={handleClick}
          heading=''
          showIcon
        />
      );
    });
    const button = screen.getByTestId('close-btn');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledWith('1');
  });

  it('render the button and fireClick event and info icon', async () => {
    const handleClick = jest.fn();
    await act(() => {
      render(
        <Toast
          id='1'
          typeofToast='info'
          content='Lorem ipsum dolor sit, amet consectetur adipisicing eplit. Nihil, porro.'
          isCloseVisible
          position='bottom-right'
          closeFn={handleClick}
          heading=''
          showIcon
        />
      );
    });
    const button = screen.getByTestId('close-btn');
    expect(button).toBeInTheDocument();
  });

  it('render toast without icon', async () => {
    await act(() => {
      render(
        <Toast
          id='1'
          typeofToast='info'
          content='Lorem ipsum dolor sit, amet consectetur adipisicing eplit. Nihil, porro.'
          isCloseVisible
          position='bottom-right'
          showIcon={false}
          heading='Notification success'
          closeFn={getIdToast}
        />
      );
    });
    expect(
      screen.queryByTestId('toast-icon-container')
    ).not.toBeInTheDocument();
  });
});

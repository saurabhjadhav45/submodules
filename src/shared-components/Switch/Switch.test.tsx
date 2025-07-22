import {fireEvent, render} from '@testing-library/react';

import Switch from './Switch';

const SwitchMemoized = Switch.type;

describe('Switch component', () => {
  it('Should render default Switch ', () => {
    const {getByTestId} = render(<Switch id='my-toggle' name='my-toggle' />);
    const switchComp = getByTestId('switch');
    expect(switchComp).toBeInTheDocument();
  });

  it('Should render the Switch with top label', () => {
    const {getByText} = render(
      <Switch id='my-toggle' name='my-toggle' labelPosition='top' label='Top' />
    );
    const top = getByText('Top');
    expect(top.textContent).toBe('Top');
  });

  it('Should render the Switch with bottom label', () => {
    const {getByText} = render(
      <Switch
        id='my-toggle'
        name='my-toggle'
        labelPosition='bottom'
        label='Bottom'
      />
    );
    const bottom = getByText('Bottom');
    expect(bottom.textContent).toBe('Bottom');
  });

  it('Should render the Switch with start label', () => {
    const {getByText} = render(
      <Switch
        id='my-toggle'
        name='my-toggle'
        labelPosition='start'
        label='Start'
      />
    );
    const start = getByText('Start');
    expect(start.textContent).toBe('Start');
  });

  it('Should render the Switch with bottom label', () => {
    const {getByText} = render(
      <Switch id='my-toggle' name='my-toggle' labelPosition='end' label='End' />
    );
    const end = getByText('End');
    expect(end.textContent).toBe('End');
  });

  it('Should toggle the Switch', () => {
    const toggleMock = jest.fn();
    const {getByTestId} = render(
      <Switch
        id='my-toggle'
        name='my-toggle'
        onToggle={toggleMock}
        labelPosition='end'
        label='End'
      />
    );
    const switchEl = getByTestId('switch-toggle');
    fireEvent.click(switchEl);
    expect(toggleMock).toHaveBeenCalledTimes(1);
  });

  it('Should not toggle the Switch', () => {
    render(
      <SwitchMemoized
        id='my-toggle'
        name='my-toggle'
        labelPosition='end'
        label='End'
      />
    );
    expect(SwitchMemoized.defaultProps.onToggle()).toBe(undefined);
  });

  it('Should render disabled toggle Switch', () => {
    const {getByTestId} = render(
      <Switch
        id='my-toggle'
        name='my-toggle'
        labelPosition='end'
        disabled
        label='End'
      />
    );
    const el = getByTestId('switch-toggle');
    expect(el).toBeDisabled();
  });
  it('Should render memoized component with same props', () => {
    const {getByText, rerender} = render(
      <Switch
        id='my-toggle'
        name='my-toggle'
        labelPosition='end'
        disabled
        label='End'
      />
    );
    const end = getByText('End');
    expect(end.textContent).toBe('End');
    rerender(
      <Switch
        id='my-toggle'
        name='my-toggle'
        labelPosition='end'
        disabled
        label='End'
      />
    );
    expect(end.textContent).toBe('End');
  });

  it('Should render memoized component with diffrent props', () => {
    const {getByText, rerender} = render(
      <Switch
        id='my-toggle'
        name='my-toggle'
        labelPosition='end'
        disabled
        label='End'
      />
    );
    const end = getByText('End');
    expect(end.textContent).toBe('End');
    rerender(
      <Switch
        id='my-toggle'
        name='my-toggle'
        labelPosition='start'
        label='start'
      />
    );
    const start = getByText('start');
    expect(start.textContent).toBe('start');
  });
});

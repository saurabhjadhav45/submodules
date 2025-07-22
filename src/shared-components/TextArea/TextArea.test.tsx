import {fireEvent, render, screen} from '@testing-library/react';

import TextArea from './TextArea';

describe('TextArea component', () => {
  const setValue = jest.fn();

  render(
    <TextArea
      placeholder='placeholder'
      label='Comment'
      className='className'
      value='I am input'
      onChange={setValue}
    />
  );

  const textAreaEl = screen.getByTestId('textarea');

  it('Should render the TextArea', () => {
    expect(textAreaEl).toBeInTheDocument();
  });
  it('Should render the readonly TextArea', () => {
    render(
      <TextArea
        placeholder='placeholder'
        label='Comment'
        className='className'
        value='I am input'
        onChange={setValue}
        readOnly
      />
    );
    const el = screen.getByTestId('textarea');
    expect(el).toBeInTheDocument();
  });
  it('Should render the disabled TextArea', () => {
    render(
      <TextArea
        placeholder='placeholder'
        label='Comment'
        className='className'
        value=''
        onChange={setValue}
        disabled
      />
    );
    const el = screen.getByTestId('textarea');
    expect(el).toBeInTheDocument();
  });

  it('Should render the readonly and disabled TextArea', () => {
    render(
      <TextArea
        placeholder='placeholder'
        label='Comment'
        className='className'
        value='I am value'
        onChange={setValue}
        disabled
        readOnly
      />
    );
    const el = screen.getByTestId('textarea');
    expect(el).toBeInTheDocument();
  });

  it('Should change the value', () => {
    expect(textAreaEl).toHaveValue('I am input');
    fireEvent.change(textAreaEl, {target: {value: 'I am test'}});
    expect(textAreaEl).toHaveValue('I am test');
  });

  it('Should render TextArea without label', () => {
    const {queryByTestId, getByTestId} = render(
      <TextArea
        placeholder='placeholder'
        className='className'
        value='I am input'
      />
    );
    const label = queryByTestId('label');
    const el = getByTestId('textarea');
    fireEvent.change(el, {target: {value: 'I am test'}});
    expect(label).toBeFalsy();
    expect(el).toHaveValue('I am input');
  });

  it('Should render TextArea with diffrent props', () => {
    const {queryByPlaceholderText, rerender} = render(
      <TextArea
        placeholder='this is a placeholder'
        className='className'
        value='I am input'
      />
    );
    const placeholder1 = queryByPlaceholderText('this is a placeholder');
    expect(placeholder1?.getAttribute('placeholder')).toBe(
      'this is a placeholder'
    );

    rerender(
      <TextArea
        placeholder='placeholder2'
        className='className'
        value='I am input'
      />
    );
    const placeholder2 = queryByPlaceholderText('placeholder2');
    expect(placeholder2?.getAttribute('placeholder')).toBe('placeholder2');
  });

  it('Should render TextArea with same props', () => {
    const {queryByPlaceholderText, rerender} = render(
      <TextArea
        placeholder='placeholder'
        className='className'
        value='I am input'
      />
    );
    const placeholder1 = queryByPlaceholderText('placeholder');
    expect(placeholder1?.getAttribute('placeholder')).toBe('placeholder');

    rerender(
      <TextArea
        placeholder='placeholder'
        className='className'
        value='I am input'
      />
    );
    const placeholder2 = queryByPlaceholderText('placeholder');
    expect(placeholder2?.getAttribute('placeholder')).toBe('placeholder');
  });
});

import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/** InputField component */
import InputField from './InputField';

describe('InputField component', () => {
  const setValue = jest.fn();

  it('Should render the InputField', () => {
    render(
      <InputField
        isRequired
        label='test'
        placeholder='Placeholder'
        value='I am input'
        onChange={setValue}
        dataTestid='ref-input'
      />
    );
    const inputEl = screen.getByTestId('ref-input');
    expect(inputEl).toBeInTheDocument();
  });

  it('Should be of type password', () => {
    render(
      <InputField
        placeholder='Placeholder'
        value='I am input'
        onChange={setValue}
        type='password'
        dataTestid='ref-input'
      />
    );
    const inputEl = screen.getByTestId('ref-input');
    expect(inputEl).toHaveAttribute('type', 'password');
  });

  it('Should change the value', async () => {
    const mockFunction = jest.fn();
    const {getByTestId} = render(
      <InputField
        placeholder='Placeholder'
        value='I am input'
        onChange={mockFunction}
        dataTestid='ref-input'
      />
    );
    const inputEl = getByTestId('ref-input');
    expect(inputEl).toHaveValue('I am input');

    fireEvent.change(inputEl, {target: {value: 'I am test'}});
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('Should render disabled Input field', async () => {
    render(
      <InputField
        placeholder='Placeholder'
        value='I am input'
        onChange={setValue}
        disabled
        dataTestid='ref-input'
      />
    );

    const btnWrapper = await waitFor(() => screen.getByTestId('focus-btn'));
    expect(btnWrapper.classList.contains('disabled')).toBeTruthy();
  });

  it('Should click password view icon', async () => {
    const {getByTestId} = render(
      <InputField
        placeholder='Placeholder'
        value='I am input'
        onChange={setValue}
        type='password'
        dataTestid='ref-input'
      />
    );
    const passwordViewBtn = getByTestId('viewBtn');
    const inputEl = getByTestId('ref-input');

    userEvent.click(passwordViewBtn);
    expect(inputEl).toHaveAttribute('type', 'text');
  });

  it('Should render disabled Input field', async () => {
    const outSideClickMock = jest.fn();
    const {getByTestId} = render(
      <button
        type='button'
        data-testid='test-btn'
        style={{padding: '20px'}}
        onClick={outSideClickMock}>
        <InputField
          type='password'
          label='label'
          placeholder=''
          value=''
          onChange={setValue}
          dataTestid='ref-input'
          isFocused
        />
      </button>
    );

    const focusBtn = await waitFor(() => getByTestId('focus-btn'));
    const testBtn = await waitFor(() => getByTestId('test-btn'));

    userEvent.click(focusBtn);
    expect(getByTestId('ref-input')).toHaveValue('');

    userEvent.click(testBtn);
    expect(focusBtn?.classList.contains('false')).toBeTruthy();
  });

  it('Should render without label and without onChange prop', async () => {
    const outSideClickMock = jest.fn();
    const {queryByTestId, getByTestId} = render(
      <button
        type='button'
        data-testid='test-btn'
        style={{padding: '20px'}}
        onClick={outSideClickMock}>
        <InputField placeholder='' value='' dataTestid='ref-input' />
      </button>
    );
    const label = queryByTestId('label');
    expect(label).toBeFalsy();
    const el = getByTestId('ref-input');
    fireEvent.change(el, {target: {value: 'I am test'}});
    expect(el).toHaveValue('');
  });

  it('Should handle error message on invalid input', () => {
    const {queryByText} = render(
      <button type='button' data-testid='test-btn' style={{padding: '20px'}}>
        <InputField
          placeholder=''
          value=''
          dataTestid='ref-input'
          isInvalid
          errorMessage='Error message'
        />
      </button>
    );
    const errorMessage = queryByText('Error message');
    expect(errorMessage?.textContent).toBe('Error message');
  });

  it('Should have autocomplete attribute', () => {
    const {getByTestId} = render(
      <div style={{padding: '20px'}}>
        <InputField
          placeholder=''
          value=''
          dataTestid='ref-input'
          autoComplete='on'
        />
      </div>
    );
    const input = getByTestId('ref-input');
    expect(input).toHaveAttribute('autoComplete');
  });

  it('Should render memoized component with diffrent props', () => {
    const {rerender, queryByText} = render(
      <InputField
        dataTestid='ref-input'
        isInvalid
        errorMessage='Error message'
      />
    );
    const errorMessage = queryByText('Error message');
    expect(errorMessage?.textContent).toBe('Error message');

    rerender(
      <InputField
        dataTestid='ref-input'
        isInvalid
        errorMessage='Something went wrong'
      />
    );
    expect(errorMessage?.textContent).toBe('Something went wrong');
  });

  it('Should render memoized component with same props', () => {
    const {rerender, queryByText} = render(
      <InputField
        dataTestid='ref-input'
        isInvalid
        errorMessage='Error message'
      />
    );
    const errorMessage = queryByText('Error message');
    expect(errorMessage?.textContent).toBe('Error message');
    rerender(
      <InputField
        dataTestid='ref-input'
        isInvalid
        errorMessage='Error message'
      />
    );
    expect(errorMessage?.textContent).toBe('Error message');
  });
});

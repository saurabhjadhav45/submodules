import {fireEvent, render} from '@testing-library/react';

/** InputField component */
import SearchBar from './SearchBar';

const SearchBarMemoized = SearchBar.type;
describe('InputField component', () => {
  const setValue = jest.fn();
  const clearText = jest.fn();
  const getValue = jest.fn();
  const getValueByEnter = jest.fn();
  const {getByTestId} = render(
    <SearchBar
      iconPosition='left'
      placeholder='Placeholder'
      searchText='I am search'
      onChange={setValue}
      clearText={clearText}
      onClick={getValue}
    />
  );

  const searchEl = getByTestId('ref-input');

  it('Should render the InputField', () => {
    expect(searchEl).toBeInTheDocument();
  });

  it('Should be of type text', () => {
    expect(searchEl).toHaveAttribute('type', 'text');
  });

  it('Should change the value', () => {
    expect(searchEl).toHaveValue('I am search');
    fireEvent.change(searchEl, {target: {value: 'I am test'}});
    expect(searchEl).toHaveValue('I am test');
  });

  it('Should display Search bar with right side search icon and should not able to clear the input', () => {
    const clear = jest.fn();
    const {rerender} = render(
      <SearchBar
        iconPosition='right'
        placeholder='Placeholder'
        searchText='I am search'
        onChange={setValue}
        clearText={clear}
        onClick={getValue}
        onKeyDown={getValueByEnter}
      />
    );
    const el = getByTestId('right-icon');
    expect(el).toBeInTheDocument();
    const clearBtn = getByTestId('clear-btn');
    fireEvent.click(clearBtn);
    expect(clear).toHaveBeenCalledTimes(1);
    const onClickRightBtn = getByTestId('right-icon');
    fireEvent.click(onClickRightBtn);
    expect(getValue).toHaveBeenCalledTimes(1);

    rerender(
      <SearchBar
        iconPosition='right'
        placeholder='Placeholder'
        searchText='I am search'
        onChange={setValue}
      />
    );
    /** firing clearing event */
    fireEvent.click(clearBtn);
    const input = getByTestId('ref-input');
    /** check input is not cleared */
    expect(input).toHaveValue('I am search');
  });

  it('Should render without clearText function', () => {
    render(
      <SearchBarMemoized
        iconPosition='right'
        placeholder='Placeholder'
        searchText='I am search'
        onChange={setValue}
      />
    );
    const clearBtn = getByTestId('clear-btn');
    fireEvent.click(clearBtn);
    expect(SearchBarMemoized.defaultProps.clearText).toBeDefined();
  });
  it('Should render memoized component with diffrent props', () => {
    const {rerender} = render(
      <SearchBar
        iconPosition='right'
        placeholder='Placeholder'
        searchText='I am search'
        onChange={setValue}
      />
    );
    const searchEl2 = getByTestId('ref-input');
    expect(searchEl2).toHaveValue('I am search');

    rerender(
      <SearchBar
        iconPosition='right'
        placeholder='Placeholder'
        searchText='I am searching'
        onChange={setValue}
      />
    );
    expect(searchEl2).toHaveValue('I am searching');

    rerender(
      <SearchBar
        iconPosition='right'
        placeholder='Placeholder'
        searchText='I am searching'
        onChange={setValue}
        onClick={getValue}
      />
    );
    expect(searchEl2).toHaveValue('I am searching');
  });

  it('Should render memoized component with same props', () => {
    const {rerender} = render(
      <SearchBar
        iconPosition='right'
        placeholder='Placeholder'
        searchText='I am search'
        onChange={setValue}
        onClick={getValue}
      />
    );
    const searchEl2 = getByTestId('ref-input');
    expect(searchEl2).toHaveValue('I am search');
    rerender(
      <SearchBar
        iconPosition='right'
        placeholder='Placeholder'
        searchText='I am search'
        onChange={setValue}
        onClick={getValue}
      />
    );
    expect(searchEl2).toHaveValue('I am search');

    rerender(
      <SearchBar
        iconPosition='right'
        placeholder='Placeholder'
        searchText='I am searching'
        onChange={setValue}
        onClick={getValue}
      />
    );
    expect(searchEl2).toHaveValue('I am searching');
  });

  it('Should render memoized component with onClick', () => {
    render(
      <SearchBar
        iconPosition='left'
        placeholder='Placeholder'
        searchText='I am search'
        onChange={setValue}
      />
    );
    const searchBtn = getByTestId('left-icon');
    fireEvent.click(searchBtn);
  });

  it('Should render memoized component with onKeyDown', () => {
    render(
      <SearchBar
        iconPosition='left'
        placeholder='Placeholder'
        searchText='I am search'
        onChange={setValue}
      />
    );
    const keyDownEl = getByTestId('ref-input');
    expect(fireEvent.keyDown(keyDownEl)).toBe(true);
  });
});

import {act, fireEvent, render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SelectField, {OptionType} from './SelectField';

const options = [
  {id: 1, tag: 'React js'},
  {id: 2, tag: 'Next js'},
  {id: 3, tag: 'Vue js'},
  {id: 4, tag: 'Angular js'},
  {id: 5, tag: 'JavaScript'},
  {id: 6, tag: 'React js2'},
  {id: 7, tag: 'Next js2'},
  {id: 8, tag: 'Vue js2'},
  {id: 9, tag: 'Angular js2'},
  {id: 10, tag: 'JavaScript2'},
];

const optionsImages: OptionType[] = [
  {id: 1, tag: 'red', imageName: 'flag1'},
  {id: 2, tag: 'blue', imageName: 'flag2'},
  {id: 3, tag: 'green', imageName: 'flag1'},
  {id: 4, tag: 'Yellow', imageName: 'flag2'},
  {id: 5, tag: 'Orange', imageName: 'flag1'},
  {id: 6, tag: 'Pink', imageName: 'flag2'},
  {id: 7, tag: 'Teal', imageName: 'flag1'},
  {id: 8, tag: 'Tomato', imageName: 'flag2'},
  {id: 9, tag: 'Gray', imageName: 'flag1'},
  {id: 10, tag: 'Purple', imageName: 'flag2'},
  {id: 11, tag: 'Red1', imageName: 'flag1'},
  {id: 12, tag: 'Blue1', imageName: 'flag2'},
  {id: 13, tag: 'Green1', imageName: 'flag1'},
];
const onSelect = (data: OptionType[]) => {
  return data;
};

describe('Rendering part for SelectField component testing', () => {
  it('Should render the SelectField with default props', async () => {
    render(
      <SelectField
        options={options}
        onSelect={onSelect}
        label='Choose single'
        placeholder='Search'
      />
    );
    const container = screen.getByTestId('select-container');
    const label = screen.queryByText('Choose single');
    expect(container).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    userEvent.click(container);
    const upIcon = document.querySelectorAll('.up-icon');
    expect(upIcon).toHaveLength(1);
    userEvent.click(upIcon[0]);
    expect(label).not.toBeInTheDocument();
  });

  it('Should render the options are open when we clicked on container', async () => {
    render(
      <div data-testid='outside'>
        <SelectField
          options={options}
          onSelect={onSelect}
          label='Choose single'
          placeholder='Search'
        />
      </div>
    );

    const container = screen.getByTestId('select-container');
    const OutsideContainer = screen.getByTestId('outside');
    userEvent.click(container);
    const optionsContainer = screen.queryByTestId('options');
    expect(optionsContainer).toBeInTheDocument();
    userEvent.click(OutsideContainer);
    expect(optionsContainer).not.toBeInTheDocument();
  });

  it('should render input box and checkbox', async () => {
    render(
      <div data-testid='outside'>
        <SelectField
          options={options}
          onSelect={onSelect}
          label='Choose single'
          isSearch
          placeholder='Search here...'
        />
      </div>
    );

    const container = screen.getByTestId('select-container');
    const OutsideContainer = screen.getByTestId('outside');
    expect(screen.queryByTestId('select-searchbox')).not.toBeInTheDocument();
    userEvent.click(container);
    const checkboxes = screen.queryAllByTestId('item-checkbox');
    expect(checkboxes).toHaveLength(0);
    expect(screen.getByTestId('select-searchbox')).toBeInTheDocument();
    userEvent.click(OutsideContainer);
    expect(screen.queryByRole('select-searchbox')).not.toBeInTheDocument();
  });
});

describe('functionality checking', () => {
  it('Searching functionality in multiselect and filtering and removing', async () => {
    render(
      <SelectField
        options={options}
        onSelect={onSelect}
        label='Choose single'
        clearAllBtn
        isMulti
        isSearch
        placeholder='Search here...'
      />
    );

    const container = screen.getByTestId('select-container');
    userEvent.click(container);
    const inputBox: HTMLInputElement = screen.getByTestId('select-searchbox');
    await act(async () => {
      fireEvent.change(inputBox, {target: {value: 'JavaScript'}});
    });
    expect(inputBox.value).toBe('JavaScript');

    const fieldArr = screen.queryAllByTestId('field');
    expect(fieldArr.length).toBe(2);
    userEvent.click(fieldArr[0]);
    userEvent.click(fieldArr[1]);
    expect(inputBox.value).toBe('');

    const filteredArr = screen.queryAllByTestId('filtered');
    expect(filteredArr.length).toBe(2);
    const filteredElement = screen.getByTestId('JavaScript');
    userEvent.click(filteredElement);
    expect(filteredElement).not.toBeInTheDocument();
    expect(screen.queryAllByTestId('filtered').length).toBe(1); // after removing 1element remaining 1 element

    // clear all btn testing
    const clearAllBtn = screen.getByTestId('clear');
    expect(clearAllBtn).toBeInTheDocument();
    userEvent.click(clearAllBtn);
    expect(clearAllBtn).not.toBeInTheDocument();
    expect(screen.queryAllByTestId('filtered').length).toBe(0); // clear all btn do clearing all filtered tags
  });

  it('Searching functionality in SingleSelect ', async () => {
    render(
      <SelectField
        options={options}
        onSelect={onSelect}
        label='Choose single'
        isSearch
        placeholder='Search here...'
      />
    );
    const container = screen.getByTestId('select-container');
    expect(screen.queryByRole('select-searchbox')).not.toBeInTheDocument();
    userEvent.click(container);

    const inputBox: HTMLInputElement = screen.getByTestId('select-searchbox');
    await act(async () => {
      fireEvent.change(inputBox, {target: {value: 'JavaScript'}});
    });
    const fieldArr = screen.queryAllByTestId('field');
    expect(fieldArr.length).toBe(2);
    userEvent.click(fieldArr[0]);
    const filteredArr = screen.queryAllByTestId('filtered');
    expect(filteredArr.length).not.toBe(2); // for single select filteredArr.length = 1
  });

  it('Without searching functionality in SingleSelect ', async () => {
    render(
      <SelectField
        options={options}
        onSelect={onSelect}
        label='Choose single'
        placeholder='Search here...'
      />
    );
    const container = screen.getByTestId('select-container');
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    userEvent.click(container);
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    const fieldArr = screen.queryAllByTestId('field');
    expect(fieldArr.length).toBe(10);
    userEvent.click(fieldArr[0]);
    userEvent.click(container);
    expect(screen.queryAllByTestId('field').length).toBe(10); // 1 option removed when click done
    userEvent.click(fieldArr[1]);
    expect(screen.queryAllByTestId('field').length).toBe(10); // no option removed until unless clear the filter
  });

  it('checkbox functionality', async () => {
    render(
      <SelectField
        label='multiple select'
        placeholder='search'
        options={options}
        onSelect={onSelect}
        isSearch
        clearAllBtn
        isMulti
        isCheckBoxes
        eachOptionHeight={36}
        maxMenuHeight={200}
      />
    );
    const container = screen.getByTestId('select-container');
    userEvent.click(container);
    const fieldArr = screen.queryAllByTestId('field');
    const filteredArr = screen.queryAllByTestId('filtered');
    expect(filteredArr.length).toBe(0);
    userEvent.click(fieldArr[0]);
    userEvent.click(fieldArr[0]);
    expect(screen.queryAllByTestId('filtered').length).toBe(0);
    const checkbox = document.querySelector('.checkbox-container') as Element;
    userEvent.click(checkbox);
    expect(screen.queryAllByTestId('filtered').length).toBe(1);
    userEvent.click(container);
    expect(screen.queryAllByTestId('field').length).toBe(10); // 1 option removed when click done
    userEvent.click(fieldArr[1]);
    expect(screen.queryAllByTestId('field').length).toBe(10); // no option removed until unless clear the filter
  });

  it('Should render images in option', async () => {
    await act(async () => {
      render(
        <SelectField
          label='single select'
          placeholder='search'
          options={optionsImages}
          onSelect={onSelect}
          isCheckBoxes
        />
      );
    });

    const container = screen.getByTestId('select-container');
    expect(container).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(container);
    });
    const images = screen.getAllByTestId('option-img');
    expect(images).toHaveLength(13);
    const fieldArr = screen.queryAllByTestId('field');
    const filteredArr = screen.queryAllByTestId('filtered');
    expect(filteredArr.length).toBe(0);
    await act(async () => {
      userEvent.click(fieldArr[0]);
    });
    const filterImg = screen.getByTestId('filtered-img');
    expect(filterImg).toBeInTheDocument();
  });
});

describe('bottomUp feature', () => {
  it('render bottomUp', async () => {
    window = Object.assign(window, {innerHeight: 100});
    render(
      <SelectField
        label='multiple select'
        placeholder='search'
        options={options}
        onSelect={onSelect}
        isSearch
        clearAllBtn
        isMulti
        eachOptionHeight={36}
        maxMenuHeight={200}
        isCheckBoxes={false}
      />
    );

    const container = screen.getByTestId('select-container');
    await waitFor(() => {
      expect(container).toBeInTheDocument();
      fireEvent.click(container);
    });
    await waitFor(() => {
      fireEvent.scroll(window, {scrollY: 40});
      expect(document.querySelectorAll('.bottom-top')).toHaveLength(1);
    });
  });
});

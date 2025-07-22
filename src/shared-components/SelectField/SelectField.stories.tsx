import type { Meta, StoryObj } from '@storybook/react';

import '../../utils/main.scss';
import SelectField, {ISelectFieldProps, OptionType} from './SelectField';

const meta: Meta = {
  title: 'SelectField',
  component: SelectField,
};

export default meta;
const optionsArr = [
  {id: 1, tag: 'red'},
  {id: 2, tag: 'blue'},
  {id: 3, tag: 'green'},
  {id: 4, tag: 'Yellow'},
  {id: 5, tag: 'Orange'},
  {id: 6, tag: 'Pink'},
  {id: 7, tag: 'Teal'},
  {id: 8, tag: 'Tomato'},
  {id: 9, tag: 'Gray'},
  {id: 10, tag: 'Purple'},
  {id: 11, tag: 'Red1'},
  {id: 12, tag: 'Blue1'},
  {id: 13, tag: 'Green1'},
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

const Template: StoryObj<ISelectFieldProps> = function selectField(args) {
  const {
    label,
    options,
    isSearch,
    isMulti,
    placeholder,
    clearAllBtn,
    maxMenuHeight,
    eachOptionHeight,
    isCheckBoxes,
  } = args;
  return (
    <div style={{width: '100%', height: '400px'}}>
      <SelectField
        options={options}
        label={label}
        isCheckBoxes={isCheckBoxes}
        isMulti={isMulti}
        placeholder={placeholder}
        onSelect={onSelect}
        isSearch={isSearch}
        clearAllBtn={clearAllBtn}
        maxMenuHeight={maxMenuHeight}
        eachOptionHeight={eachOptionHeight}
      />
    </div>
  );
};

export const multiField = Template.bind({});

multiField.args = {
  label: 'Select multi',
  isCheckBoxes: true,
  isSearch: true,
  isMulti: true,
  clearAllBtn: false,
  options: optionsArr,
  onSelect,
};

export const singleField = Template.bind({});

singleField.args = {
  label: 'Select one',
  options: optionsArr,
  onSelect,
};

export const imageTextField = Template.bind({});

imageTextField.args = {
  label: 'Select one',
  options: optionsImages,
  onSelect,
};

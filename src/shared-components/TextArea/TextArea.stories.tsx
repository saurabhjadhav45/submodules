import type { Meta, StoryObj } from '@storybook/react';
import React, {useState} from 'react';

import TextArea from './TextArea';

const meta: Meta = {
  title: 'TextArea',
  component: TextArea,
};

export default meta;

const Template: StoryObj<typeof TextArea> = function TextAreaStory(args) {
  const {
    className,
    row,
    readOnly,
    disabled,
    name,
    label,
    id,
    maxLength,
    minLength,
    placeholder,
    value,
  } = args;
  const [text, setText] = useState(value);
  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  return (
    <TextArea
      className={className}
      row={row}
      readOnly={readOnly}
      disabled={disabled}
      name={name}
      label={label}
      id={id}
      maxLength={maxLength}
      minLength={minLength}
      placeholder={placeholder}
      value={text}
      onChange={changeHandler}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Comment',
};

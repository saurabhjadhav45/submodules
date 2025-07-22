import type { Meta, StoryObj } from '@storybook/react';
import {useState} from 'react';

import InputField from './InputField';

/** stories of InputField */

const meta: Meta = {
  title: 'InputField',
  component: InputField,
};

export default meta;
export const Template: StoryObj<typeof InputField> =
  function InputFieldStory(args) {
    const {
      id,
      dataTestid,
      disabled,
      label,
      maxLength,
      minLength,
      readOnly,
      type,
      placeholder = 'placeholder',
      value,
      isInvalid,
      errorMessage,
      autoComplete,
    } = args;
    const [text, setValue] = useState(value);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
    return (
      <InputField
        id={id}
        readOnly={readOnly}
        disabled={disabled}
        dataTestid={dataTestid}
        label={label}
        maxLength={maxLength}
        minLength={minLength}
        type={type}
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
        isInvalid={isInvalid}
        errorMessage={errorMessage}
        autoComplete={autoComplete}
      />
    );
  };
export const Default = Template.bind({});
export const Password = Template.bind({});
export const WithoutLabel = Template.bind({});
export const Disabled = Template.bind({});
Default.args = {
  id: 'input-default',
  label: 'Label',
  maxLength: 10,
  minLength: 0,
  disabled: false,
  placeholder: 'placeholder',
  type: 'text',
  value: 'value',
};

Password.args = {
  id: 'input-password',
  label: 'Label',
  placeholder: 'placeholder',
  type: 'password',
};
WithoutLabel.args = {
  id: 'input-without-label',
  label: '',
  placeholder: ' placeholder',
  type: 'text',
};

Disabled.args = {
  id: 'input-disabled',
  label: 'Label',
  placeholder: ' placeholder',
  type: 'text',
  disabled: true,
};

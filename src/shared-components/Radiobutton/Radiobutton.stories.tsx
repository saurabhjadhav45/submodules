import type { Meta } from '@storybook/react';
import {useState} from 'react';

import Radiobutton from './Radiobutton';
import './Radiobutton.scss';

export default {
  title: 'Radiobutton',
  component: Radiobutton,
} as Meta<typeof Radiobutton>;
function Template() {
  const [value, setVlaue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVlaue(event.target.value);
  };
  return (
    <div className='radio'>
      <Radiobutton
        label='Pune'
        id='1'
        onChange={handleChange}
        value='pune'
        isSelected={value === 'pune'}
      />
      <Radiobutton
        label='Mumbai'
        id='2'
        onChange={handleChange}
        value='mumbai'
        isSelected={value === 'mumbai'}
      />
      <Radiobutton
        label='Nashik'
        id='3'
        onChange={handleChange}
        value='nashik'
        isSelected={value === 'nashik'}
      />
    </div>
  );
}
export const RadioButton = Template.bind({});

export function RadiobuttonSize() {
  const [value, setVlaue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVlaue(event.target.value);
  };
  return (
    <div className='radio'>
      <Radiobutton
        id='1'
        onChange={handleChange}
        value='pune'
        isSelected={value === 'pune'}
        size='small'
      />
      <Radiobutton
        id='2'
        onChange={handleChange}
        value='mumbai'
        isSelected={value === 'mumbai'}
        size='medium'
      />
      <Radiobutton
        id='3'
        onChange={handleChange}
        value='nashik'
        isSelected={value === 'nashik'}
        size='large'
      />
    </div>
  );
}

export function DisableRadio() {
  const [value, setVlaue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVlaue(event.target.value);
  };
  return (
    <Radiobutton
      label='Disabled'
      id='1'
      onChange={handleChange}
      value='pune'
      isSelected={value === 'pune'}
      disabled
    />
  );
}
export function VerticalRadiobutton() {
  const [value, setVlaue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVlaue(event.target.value);
  };
  return (
    <div className='vertical-align'>
      <Radiobutton
        label='Pune'
        id='1'
        onChange={handleChange}
        value='pune'
        isSelected={value === 'pune'}
      />
      <Radiobutton
        label='Mumbai'
        id='2'
        onChange={handleChange}
        value='mumbai'
        isSelected={value === 'mumbai'}
      />
      <Radiobutton
        label='Nashik'
        id='3'
        onChange={handleChange}
        value='nashik'
        isSelected={value === 'nashik'}
      />
    </div>
  );
}

export function ColorRadiobutton() {
  const [value, setVlaue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVlaue(event.target.value);
  };
  return (
    <div className='color_radio'>
      <Radiobutton
        label='Pune'
        id='1'
        onChange={handleChange}
        value='pune'
        isSelected={value === 'pune'}
        color='blue'
      />
      <Radiobutton
        label='Mumbai'
        id='2'
        onChange={handleChange}
        value='mumbai'
        isSelected={value === 'mumbai'}
        color='red'
      />
      <Radiobutton
        label='Nashik'
        id='3'
        onChange={handleChange}
        value='nashik'
        isSelected={value === 'nashik'}
        color='green'
      />
    </div>
  );
}

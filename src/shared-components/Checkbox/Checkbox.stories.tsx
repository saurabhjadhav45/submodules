import type { Meta } from '@storybook/react';
import {useCallback, useState} from 'react';

import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',

  component: Checkbox,
} as Meta<typeof Checkbox>;

function Template() {
  const [isChecked, setisChecked] = useState([false]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setisChecked({...isChecked, [event.target.name]: event.target.checked});
  };

  return (
    <Checkbox
      id='1'
      onChange={handleChange}
      label='Checkbox'
      name='Checkbox1'
    />
  );
}

function CheckboxSizes() {
  const [isChecked, setisChecked] = useState([false]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setisChecked({...isChecked, [event.target.name]: event.target.checked});
  };

  return (
    <div className='checkbox_size'>
      <Checkbox
        id='1'
        onChange={handleChange}
        name='Checkbox1'
        size='small'
        checked
      />
      <Checkbox
        id='2'
        onChange={handleChange}
        name='Checkbox1'
        size='medium'
        checked
      />
      <Checkbox
        id='3'
        onChange={handleChange}
        name='Checkbox1'
        size='large'
        checked
      />
    </div>
  );
}

export const CheckboxDefaultComponent = Template.bind({});
export const CheckboxSize = CheckboxSizes.bind({});
export function CheckboxDisable() {
  const [isChecked, setisChecked] = useState([false]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setisChecked({...isChecked, [event.target.name]: event.target.checked});
    },
    [isChecked]
  );

  const styles = {
    cursor: 'default',
  };
  return (
    <div>
      <Checkbox
        id='1'
        onChange={handleChange}
        label='Disabled'
        name='Checkbox1'
        style={styles}
        disabled
      />
    </div>
  );
}

export function CheckboxColor() {
  const [isChecked, setisChecked] = useState([false]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setisChecked({...isChecked, [event.target.name]: event.target.checked});
  };
  return (
    <div>
      <Checkbox
        id='1'
        onChange={handleChange}
        label='Option 1'
        color='red'
        name='Checkbox1'
        checked
      />

      <Checkbox
        id='2'
        onChange={handleChange}
        label='Option 2'
        color='#198754'
        name='Checkbox1'
        checked
      />

      <Checkbox
        id='3'
        onChange={handleChange}
        label='Option 3'
        color='#0d6efd'
        name='Checkbox1'
        checked
      />
    </div>
  );
}

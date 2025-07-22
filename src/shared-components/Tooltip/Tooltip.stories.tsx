import type { Meta, StoryObj } from '@storybook/react';

import Tooltip, {TooltipProps} from './Tooltip';
import './Tooltip.scss';

const meta: Meta = {
  title: 'Tooltip',
  component: Tooltip,
};

export default meta;

const Template: StoryObj<TooltipProps> = function tooltip(args) {
  const {children, content, direction, behavior, hasArrowPointer} = args;
  return (
    <div
      style={{
        width: '100%',
        height: '200px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Tooltip
        content={content}
        hasArrowPointer={hasArrowPointer}
        direction={direction}
        behavior={behavior}>
        {children}
      </Tooltip>
    </div>
  );
};

export const DefaultHover = Template.bind({});
export const FocusTip = Template.bind({});

DefaultHover.args = {
  direction: 'top',
  content: 'This is hover toolTip',
  children: <p style={{fontSize: '16px'}}>Tool tip jf kf</p>,
};

FocusTip.args = {
  direction: 'bottom',
  content: 'This is focus toolTip',
  behavior: 'focus',
  children: (
    <input
      type='text'
      style={{height: '30px', border: '1px solid gray'}}
      placeholder='focus cursor'
    />
  ),
};

import type { Meta, StoryObj } from '@storybook/react';

import Paper from './Paper';

const meta: Meta = {
  title: 'Paper',
  component: Paper,
};

export default meta;
export const Template: StoryObj<typeof Paper> = function PaperStory(
  args
) {
  const {variant, elevation, children, square} = args;

  return (
    <div style={{width: '250px', height: '250px'}}>
      <Paper variant={variant} elevation={elevation} square={square}>
        {children}
      </Paper>
    </div>
  );
};

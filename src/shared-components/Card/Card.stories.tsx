import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

export default {
  title: 'Card',
  component: Card,
} as Meta<typeof Card>;

const Template: StoryObj<typeof Card> = function CardTemplate(args) {
  const {header, content, footer, border} = args;
  return (
    <Card header={header} content={content} footer={footer} border={border} />
  );
};

export const CardComponent = Template.bind({});

CardComponent.args = {
  header: 'Word of the Day',
  content: 'well meaning and kindly. a benevolent smile',
  footer: 'footer here..',
  border: false,
};

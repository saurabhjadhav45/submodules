import type { Meta, StoryObj } from '@storybook/react';

import Container from './Container';

export default {
  title: 'Container',
  component: Container,
} as Meta<typeof Container>;

const Template: StoryObj<typeof Container> = function ContainerTemplate(
  args
) {
  const {maxWidth} = args;
  return (
    <Container maxWidth={maxWidth}>
      <div style={{backgroundColor: 'skyblue', height: '100vh'}} />
    </Container>
  );
};

export const ContainerTemplate = Template.bind({});

ContainerTemplate.args = {
  maxWidth: 'sm',
};

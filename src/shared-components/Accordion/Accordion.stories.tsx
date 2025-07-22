import Accordion from './Accordion';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Accordion',
  component: Accordion,
} as Meta<typeof Accordion>;

const AccordionStyle = {
  width: '500px',
  margin: '20px',
};

const Template: StoryObj<typeof Accordion> = function AccordionTemplate(args) {
  const { title, content, hasBorder, isDisabled, accordionIcon } = args;
  return (
    <div style={AccordionStyle}>
      <Accordion
        title={title}
        content={content}
        hasBorder={hasBorder}
        isDisabled={isDisabled}
        accordionIcon={accordionIcon}
      />
    </div>
  );
};

export const AccordionComponent = Template.bind({});

AccordionComponent.args = {
  title: 'Title',
  content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
  hasBorder: true,
  isDisabled: false,
};

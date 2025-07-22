import type { Meta, StoryObj } from '@storybook/react';
import {BrowserRouter} from 'react-router-dom';

import Link from './Link';

export default {
  title: 'Link',
  component: Link,
} as Meta<typeof Link>;
const Template: StoryObj<typeof Link> = function CardTemplate(args) {
  const {href, children, underline} = args;
  return (
    <BrowserRouter>
      <Link href={href} underline={underline}>
        {children}
      </Link>
    </BrowserRouter>
  );
};
export const LinkComponent = Template.bind({});
export const LinkHover = Template.bind({});
export const LinkAlways = Template.bind({});

LinkComponent.args = {
  href: '/goto',
  children: 'Link',
};
LinkAlways.args = {
  href: '/goto',
  underline: 'always',
  children: 'Link',
};
LinkHover.args = {
  href: '/goto',
  underline: 'hover',
  children: 'Link',
};

import type { Meta, StoryObj } from '@storybook/react';

import Gif from '../../assets/images/Spinner.gif';
import Loader from './Loader';

export default {
  title: 'Loader',

  component: Loader,
} as Meta<typeof Loader>;

const Template: StoryObj<typeof Loader> = function LoaderTemplate(args) {
  const {isLoading, color, content} = args;
  const styleObject = {
    width: '200px',
    display: 'flex',
    justifyContent: 'center',
  };
  return (
    <div style={styleObject}>
      <Loader isLoading={isLoading} color={color} content={content} />
    </div>
  );
};

export const LoaderComponent = Template.bind({});

export function LoaderImage() {
  return (
    <div>
      <Loader isLoading content='Loading..' gif={Gif} />
    </div>
  );
}

LoaderComponent.args = {
  isLoading: true,
  color: 'black',
  content: 'Loading..',
};

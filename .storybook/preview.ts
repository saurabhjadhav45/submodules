import '../src/index.css';
import { Preview } from '@storybook/react-vite';

// for themeing, we will need to call api in this file and set the css
// :root with variables.
// As The storybook won't be able to access the root variables from parent application
// in a submodule architecture the themeing will be handling in this file.

// For deployment of different applications we will need a env setup to call
// APIs for theme variables

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  tags: ['autodocs']
};

export default preview;

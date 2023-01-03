import { ChakraProvider } from '@chakra-ui/react';
import { Meta, StoryObj } from '@storybook/react';

import { App } from './App';
import { ThemeConfigs } from './Styles/theme';

export default {
  title: '/App',
  component: App,
  decorators: [
    (Story) => {
      return <ChakraProvider theme={ThemeConfigs}>{Story()}</ChakraProvider>;
    },
  ],
} as Meta;

export const Default: StoryObj = {};

import { Sidebar } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeConfigs } from '../../Styles/theme';

export default {
  title: 'SidebarComponents/Sidebar',
  component: Sidebar,
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          <ChakraProvider theme={ThemeConfigs}>{Story()}</ChakraProvider>
        </BrowserRouter>
      );
    },
  ],
} as Meta;

export const Default: StoryObj = {};

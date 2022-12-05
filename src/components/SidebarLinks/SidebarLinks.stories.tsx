import { SidebarLinks } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { SidebarWrapperContainer } from '../SidebarWrapperContainer';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeConfigs } from '../../Styles/theme';
export default {
  title: 'components/SidebarLinks',
  component: SidebarLinks,
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          <ChakraProvider theme={ThemeConfigs}>
            <SidebarWrapperContainer>{Story()}</SidebarWrapperContainer>
          </ChakraProvider>
        </BrowserRouter>
      );
    },
  ],
} as Meta;

export const Default: StoryObj = {};

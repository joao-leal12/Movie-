import { SidebarLinks } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { SidebarWrapperContainer } from '../SidebarWrapperContainer';

export default {
  title: 'components/SidebarLinks',
  component: SidebarLinks,
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          <SidebarWrapperContainer>{Story()}</SidebarWrapperContainer>
        </BrowserRouter>
      );
    },
  ],
} as Meta;

export const Default: StoryObj = {};

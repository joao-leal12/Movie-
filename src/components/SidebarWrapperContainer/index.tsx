import { chakra } from '@chakra-ui/react';

export const SidebarWrapperContainer = chakra('section', {
  baseStyle: {
    flex: '1',
    backgroundColor: 'light.900',
    maxWidth: '28.5rem',
    paddingTop: '6rem',
    paddingBottom: '9.1rem',
    borderTopRightRadius: '90px',
    borderBottomRightRadius: '90px',
    boxShadow: '2px 6px 18px 0px #FB3F3F',
  },
});

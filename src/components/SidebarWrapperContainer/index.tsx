import { chakra } from '@chakra-ui/react';

export const SidebarWrapperContainer = chakra('section', {
  baseStyle: {
    flex: '1',
    maxWidth: { base: '5.4rem', md: '5.4rem', lg: '28.5rem' },
    paddingTop: '6rem',
    paddingBottom: '9.1rem',
    borderTopRightRadius: '90px',
    borderBottomRightRadius: '90px',
    maxHeight: '60.4rem',
  },
});

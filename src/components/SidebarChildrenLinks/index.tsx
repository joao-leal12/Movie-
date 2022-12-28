import { chakra } from '@chakra-ui/react';

export const SidebarChildrenLinks = chakra('li', {
  baseStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: { base: '0', md: '0', lg: '1.5rem' },
    color: 'dark.500',
    fontSize: '1.8rem',
    overflow: { base: 'initial', md: 'initial', lg: 'hidden' },
    borderRadius: '1.6rem',
    width: '100%',
    _hover: { background: 'orange.900', color: 'light.900' },
    _active: { background: 'orange.900', color: 'light.900' },
  },
});

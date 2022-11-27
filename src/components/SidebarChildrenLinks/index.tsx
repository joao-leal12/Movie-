import { chakra } from '@chakra-ui/react';

export const SidebarChildrenLinks = chakra('li', {
  baseStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '1.5rem',
    color: 'dark.500',
    fontSize: '1.8rem',
    _hover: { background: 'orange.900', color: 'light.900' },
    _active: { background: 'orange.900', color: 'light.900' },
  },
});

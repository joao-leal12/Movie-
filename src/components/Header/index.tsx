import { chakra } from '@chakra-ui/react';

export const Header = chakra('header', {
  baseStyle: {
    display: 'flex',
    height: '220px',
    position: 'relative',
    justifyContent: 'space-between',
    zIndex: '100',
    // _before: {
    //   backgroundImage: 'url(./src/assets/logo.svg)',
    //   backgroundRepeat: 'no-repeat',
    //   content: '" "',
    //   height: '100%',
    //   position: 'absolute',
    //   width: '100%',
    // },
  },
});

import { extendTheme } from '@chakra-ui/react';

export const ThemeConfig = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      '*': {
        magin: '0',
        padding: '0',
        boxSizing: 'border-box',
      },
      'html, body': {
        color: '#000 ',
        fontFamily: 'Roboto',
        height: '100%',
        backgroundImage:
          'radial-gradient(50% 50% at 50% 50%, #FB3F3F 0%, #FC8346 100%)',
      },
      ':root': {
        fontSize: '62.5%',
      },
      a: {
        textDecoration: 'none',
      },
      ul: {
        listStyle: 'none',
      },
      img: {
        width: '100%',
      },
    },
  },
  colors: {
    light: {
      900: '#fff',
    },
    dark: {
      900: '#000',
      500: '#8A7E72',
      700: 'rgba(0, 0, 0, 0.25)',
    },

    yellow: {
      900: '#FFAD05',
    },
    red: {
      900: '#FB3F3F',
    },
    orange: {
      900: '#FC8346',
    },
  },
});

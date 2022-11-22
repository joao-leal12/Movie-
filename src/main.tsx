import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ThemeConfig } from './Styles/theme';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={ThemeConfig}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

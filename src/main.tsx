import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ThemeConfigs } from './Styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { GlobalContext } from './Context/GlobalContext';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalContext>
      <ChakraProvider theme={ThemeConfigs}>
        <App />
      </ChakraProvider>
    </GlobalContext>
  </React.StrictMode>
);

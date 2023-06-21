import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ThemeConfigs } from './Styles/theme';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { GlobalContext } from './Context/GlobalContext';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalContext>
        <ChakraProvider theme={ThemeConfigs}>
          <ColorModeScript initialColorMode={ThemeConfigs.initialColorMode} />
          <App />
        </ChakraProvider>
      </GlobalContext>
    </QueryClientProvider>
  </React.StrictMode>
);

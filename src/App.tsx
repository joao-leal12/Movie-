import { Container } from '@chakra-ui/react';
import { ContainerMovies } from './components/ContainerMovies';
import { Home } from './pages/Home';
import { Sidebar } from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { GlobalContext } from './Context/GlobalContext';
export const App = (): JSX.Element => {
  return (
    <GlobalContext>
      <BrowserRouter>
        <Header />
        <Container
          maxWidth="100%"
          display="flex"
          padding="0"
          gap="4.2rem"
          position="static"
        >
          <Sidebar />
          <Home>
            <ContainerMovies />
          </Home>
        </Container>
      </BrowserRouter>
    </GlobalContext>
  );
};

import { Container } from '@chakra-ui/react';
import { ContainerMovies } from './components/ContainerMovies';
import { Home } from './pages/Home';
import { Sidebar } from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { TesteContainer } from './components/TesteContainer';

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth="100%" display="flex" padding="0" gap="4.2rem">
        <Sidebar />
        <Home>
          <ContainerMovies />
          <TesteContainer />
        </Home>
      </Container>
    </BrowserRouter>
  );
};

import { Container } from '@chakra-ui/react';
import { ContainerMovies } from './components/ContainerMovies';
import { Home } from './pages/Home';
import { Sidebar } from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom';
export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Container maxWidth="100%" display="flex" padding="0" gap="4.2rem">
        <Sidebar />
        <Home flex="3">
          <ContainerMovies />
        </Home>
      </Container>
    </BrowserRouter>
  );
};

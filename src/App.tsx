import { Container } from '@chakra-ui/react';
import { ContainerMovies } from './components/ContainerMovies';
import { Home } from './pages/Home';
import { Sidebar } from './components/Sidebar';
export const App = (): JSX.Element => {
  return (
    <Container maxWidth="100%">
      <Sidebar />
      <Home>
        <ContainerMovies />
      </Home>
    </Container>
  );
};

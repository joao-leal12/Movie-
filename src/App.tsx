import { Container } from '@chakra-ui/react';
import { ContainerMovies } from './components/ContainerMovies';
import { Home } from './pages/Home';
export const App = (): JSX.Element => {
  return (
    <Container maxWidth="100%">
      <Home>
        <ContainerMovies />
      </Home>
    </Container>
  );
};

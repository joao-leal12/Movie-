import { Container } from '@chakra-ui/react';
import { ContainerMovies } from './components/ContainerMovies';
import { Home } from './pages/Home';
import { Sidebar } from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { useEffect } from 'react';
import axios from 'axios';
export const App = (): JSX.Element => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=9cfd40b43fdd0d0687798042ba3050eb'
      )
      .then((json) => console.log(json));
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth="100%" display="flex" padding="0" gap="4.2rem">
        <Sidebar />
        <Home>
          <ContainerMovies />
        </Home>
      </Container>
    </BrowserRouter>
  );
};

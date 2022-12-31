import { Container, Flex, useColorModeValue } from '@chakra-ui/react';
import { ContainerMovies } from './components/ContainerMovies';
import { Home } from './pages/Home';
import { Sidebar } from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { ToogleColor } from './components/ToogleColor';
import { Logo } from './components/Logo';

export const App = (): JSX.Element => {
  const bg = useColorModeValue(
    'radial-gradient(50% 50% at 50% 50%, #FB3F3F 0%, #FC8346 100%)',
    '#111'
  );
  return (
    <BrowserRouter>
      <Flex flexDir="column" bg={bg}>
        <Header>
          <Logo />
          <ToogleColor />
        </Header>
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
      </Flex>
    </BrowserRouter>
  );
};

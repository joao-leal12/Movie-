import { Flex, useColorModeValue } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainContainer } from './components/MainContainer';

export const App = (): JSX.Element => {
  const bg = useColorModeValue(
    'radial-gradient(50% 50% at 50% 50%, #FB3F3F 0%, #FC8346 100%)',
    '#111'
  );
  return (
    <BrowserRouter>
      <Flex flexDir="column" bg={bg}>
        <Header />
        <MainContainer />
        <Footer />
      </Flex>
    </BrowserRouter>
  );
};

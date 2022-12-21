import { chakra } from '@chakra-ui/react';
import { RoutesMovies } from '../RoutesMovies';
import { GlobalProvider } from '../../Context/GlobalContext';

export const ContainerMovies = () => {
  return (
    <GlobalProvider>
      <chakra.section mt="2rem">
        <RoutesMovies />
      </chakra.section>
    </GlobalProvider>
  );
};

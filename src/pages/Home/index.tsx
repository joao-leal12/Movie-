import { Flex } from '@chakra-ui/react';
import { RoutesMovies } from '../../components/RoutesMovies';

export const Home = () => {
  return (
    <Flex as="section" flex={2} position={'relative'}>
      <RoutesMovies />
    </Flex>
  );
};

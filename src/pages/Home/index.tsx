import { Flex } from '@chakra-ui/react';
import { HomeMoviesList } from '../../components/HomeMovieList';

export const Home = () => {
  return (
    <Flex as="section" flex={2} position={'relative'}>
      <HomeMoviesList />
    </Flex>
  );
};

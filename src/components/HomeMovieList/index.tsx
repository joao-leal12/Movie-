import { Flex } from '@chakra-ui/react';
import { ListMoviesWrapper } from '../ListMoviesWrapper';
export const HomeMoviesList = () => {
  return (
    <Flex as="section">
      <ListMoviesWrapper />
    </Flex>
  );
};

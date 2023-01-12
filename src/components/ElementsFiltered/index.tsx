import { useFilter } from '../../hooks/useFilter';
import { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { IMovieFilter } from '../../types/ApiType';
import { MoviesList } from '../MoviesList';
export const ElementsFiltered = ({
  data,
  getMovieData,
  setDataMovies,
  loading,
}: IMovieFilter) => {
  const { ElementsFiltered, newElement } = useFilter(data);

  useEffect(() => {
    useEffect(() => {
      if (ElementsFiltered !== undefined && ElementsFiltered.length > 0) {
        setDataMovies(ElementsFiltered);
      }
      if (newElement.length === 0) {
        getMovieData();
      }
    }, [ElementsFiltered, newElement]);
  }, []);
  return (
    <Flex>
      <MoviesList data={data} loading={loading} />
    </Flex>
  );
};

import { UseFetch } from '../../hooks/UseFetch';
import { useContextCreate } from '../../hooks/useContextCreate';

import { MoviesList } from '../MoviesList';

export const HomeContainerList = () => {
  const { loading } = UseFetch();
  const { dataMovies } = useContextCreate();

  return (
    <>
      {dataMovies.length > 0 && (
        <MoviesList data={dataMovies} loading={loading} />
      )}
    </>
  );
};

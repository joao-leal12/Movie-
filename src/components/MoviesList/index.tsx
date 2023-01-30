import { useEffect, useState } from 'react';

import { GET_MOVIES } from '../../utils/API/API_ROUTES';
import { apiCall } from '../../lib/apiCall';
import { RenderCards } from '../RenderCards';
interface IMoviesListProps {
  page?: string;
}
export const MoviesList = ({ page = '1' }: IMoviesListProps) => {
  // const { dataMovies, setDataMovies } = useContextCreate();
  const [dataTest, setDataTest] = useState();
  console.log('Renderizei');
  useEffect(() => {
    const { url } = GET_MOVIES(page);
    const controller = new AbortController();
    apiCall
      .get(url, {
        signal: controller.signal,
      })
      .then((response) => {
        setDataTest(response.data.results);
      });

    return () => controller.abort();
  }, []);

  if (dataTest != null)
    return (
      <>
        <RenderCards data={dataTest} />
      </>
    );
  else return null;
};

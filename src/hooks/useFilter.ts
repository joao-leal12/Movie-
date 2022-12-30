import { useCallback, useEffect, useState } from 'react';
import { useContextCreate } from './useContextCreate';
import { IMovieData } from '../types/ApiType';

export const useFilter = (data: IMovieData[] | null) => {
  const { newElement } = useContextCreate();

  const [ElementsFiltered, setElementsFiltered] = useState<IMovieData[]>();
  const filteredElements = useCallback(() => {
    if (newElement.length > 0) {
      setElementsFiltered(
        data?.filter((movie) =>
          movie.title
            .split('')
            .slice(0, newElement.length)
            .join('')
            .toLowerCase()
            .includes(newElement.toLowerCase())
        )
      );
    }
  }, [newElement]);

  useEffect(() => {
    filteredElements();
  }, [newElement]);
  return {
    newElement,
    ElementsFiltered,
  };
};
import { Dispatch, MutableRefObject } from 'react';

import { DEFAULT_VALUE, IGenres } from './GlobalContext';

export interface IinitialValueProps {
  handleStates: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    input: MutableRefObject<HTMLInputElement | null>
  ) => void;
  handleClickOnLinks: (e: any, path: string) => void;
  genres: IGenres | undefined;

  eventContext: typeof DEFAULT_VALUE;
  dispatchContext: Dispatch<Partial<typeof DEFAULT_VALUE>>;
}

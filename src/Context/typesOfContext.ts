import { Dispatch } from 'react';

import { DEFAULT_VALUE, IGenres } from './GlobalContext';

export interface IinitialValueProps {
  handleStates: (input: any) => void;
  handleClickOnLinks: (e: any, path: string) => void;
  genres: IGenres | undefined;
  eventContext: typeof DEFAULT_VALUE;
  dispatchContext: Dispatch<Partial<typeof DEFAULT_VALUE>>;
}

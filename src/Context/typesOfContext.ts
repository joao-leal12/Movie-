import { Dispatch, MutableRefObject } from 'react';

import { DEFAULT_VALUE, IGenres } from './GlobalContext';

export type EventsHandle =
  | React.MouseEvent<HTMLButtonElement, MouseEvent>
  | React.KeyboardEvent<HTMLInputElement>;
export interface IinitialValueProps {
  handleStates: (
    e: any,
    input: MutableRefObject<HTMLInputElement | null>
  ) => void;
  handleClickOnLinks: (e: any, path: string) => void;
  genres: IGenres | undefined;

  eventContext: typeof DEFAULT_VALUE;
  dispatchContext: Dispatch<Partial<typeof DEFAULT_VALUE>>;
}

import { createContext, ReactNode } from 'react';
// import { ICardMovie } from '../types/MoviesCards';
interface IChildrenProps {
  children: ReactNode;
}
// interface IContextProvider {
//   dataMovie: ICardMovie;
// }
export const GlobalContext = createContext<Record<any, any>>({
  name: 'Abel braga',
});

export const GlobalProvider = ({ children }: IChildrenProps) => {
  return (
    <GlobalContext.Provider value={{ name: 'João' }}>
      {children}
    </GlobalContext.Provider>
  );
};

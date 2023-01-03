import { useContext } from 'react';
import { ContextCreate } from '../Context/GlobalContext';

export const useContextCreate = () => {
  const context = useContext(ContextCreate);

  return context;
};

import { createContext, ReactNode, useState } from 'react';

interface IinitialValue {
  newElement: string;
  handleChangeInput: (value: string) => void;
}

interface Ichildren {
  children: ReactNode;
}

export const ContextCreate = createContext({} as IinitialValue);

export const GlobalContext = ({ children }: Ichildren) => {
  const [newElement, setNewElement] = useState('');

  function handleChangeInput(value: string) {
    setNewElement(value);
  }

  return (
    <ContextCreate.Provider value={{ newElement, handleChangeInput }}>
      {children}
    </ContextCreate.Provider>
  );
};

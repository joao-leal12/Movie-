import { createContext, ReactNode, useState, useCallback } from 'react';

interface IinitialValue {
  newElement: string;
  handleChangeInput: (value: string) => void;
  setStyleOfOpacity: (value: string) => void;
  opacityEl: string;
}

interface Ichildren {
  children: ReactNode;
}

export const ContextCreate = createContext({} as IinitialValue);

export const GlobalContext = ({ children }: Ichildren) => {
  const [newElement, setNewElement] = useState('');
  const [opacityEl, setOpacityEl] = useState('0');
  function handleChangeInput(value: string) {
    setNewElement(value);
  }
  const setStyleOfOpacity = useCallback((value: string) => {
    setOpacityEl(value);
  }, []);
  return (
    <ContextCreate.Provider
      value={{ newElement, handleChangeInput, setStyleOfOpacity, opacityEl }}
    >
      {children}
    </ContextCreate.Provider>
  );
};

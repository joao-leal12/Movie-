import { createContext, ReactNode, useState, useCallback } from 'react';

interface IinitialValue {
  newElement: string;
  handleChangeInput: (value: string) => void;
  setStyleOfOpacity: (value: string) => void;
  opacityEl: string;
  setStyleHome: (value: string) => void;
  OpacityHome: string;
}

interface Ichildren {
  children: ReactNode;
}

export const ContextCreate = createContext({} as IinitialValue);

export const GlobalContext = ({ children }: Ichildren) => {
  const [newElement, setNewElement] = useState('');
  const [opacityEl, setOpacityEl] = useState('1');
  const [OpacityHome, setOpacityHome] = useState('0');
  function handleChangeInput(value: string) {
    setNewElement(value);
  }
  const setStyleHome = useCallback((value: string) => {
    setOpacityHome(value);
  }, []);
  const setStyleOfOpacity = useCallback((value: string) => {
    setOpacityEl(value);
  }, []);
  return (
    <ContextCreate.Provider
      value={{
        newElement,
        handleChangeInput,
        setStyleOfOpacity,
        opacityEl,
        setStyleHome,
        OpacityHome,
      }}
    >
      {children}
    </ContextCreate.Provider>
  );
};
